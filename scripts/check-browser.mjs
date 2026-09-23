import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium, firefox, webkit } from "playwright";

const origin = process.env.QA_URL || "http://127.0.0.1:3000";
const basePath = new URL(origin).pathname.replace(/\/$/, "");
const routes = [
  "/",
  "/work",
  "/experience",
  "/about",
  "/education",
  "/contact",
  "/work/kmutt-edtech",
  "/work/un-vietnam-humanitarian-automation",
  "/work/kbtg-virtual-patient",
  "/work/un-thailand-ai-intelligence",
  "/work/aot-digital-experience",
];
const widths = [320, 375, 768, 1024, 1440];
await mkdir("output/playwright", { recursive: true });
const browserName = process.env.QA_BROWSER || "chromium";
const tabKey =
  browserName === "webkit" && process.platform === "darwin" ? "Alt+Tab" : "Tab";
const browser = await { chromium, firefox, webkit }[browserName].launch(
  browserName === "chromium" ? { channel: "chrome" } : {},
);
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
const report = [];
const internalLinks = new Set();

async function navigate(url) {
  // Let prefetch finish before replacing the document; WebKit reports aborted fetches as errors.
  await page.waitForLoadState("networkidle");
  return page.goto(url);
}

try {
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      const response = await navigate(origin + route);
      assert.ok(
        [200, 304].includes(response.status()),
        `${route}: successful response or validated browser cache`,
      );
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator("h1").count(), 1, `${route}: one h1`);
      assert.equal(await page.locator("main").count(), 1);
      assert.ok(await page.title());
      assert.ok(
        await page.locator('meta[name="description"]').getAttribute("content"),
      );
      if (width === 320) {
        for (const href of await page
          .locator('a[href^="/"]')
          .evaluateAll((links) =>
            links.map((link) => link.getAttribute("href")),
          ))
          internalLinks.add(href);
        const canonical = await page
          .locator('link[rel="canonical"]')
          .getAttribute("href");
        assert.equal(
          new URL(canonical).pathname.replace(/\/$/, ""),
          `${basePath}${route === "/" ? "" : route}`,
        );
        assert.equal(
          new URL(
            await page
              .locator('meta[property="og:image"]')
              .getAttribute("content"),
          ).pathname,
          `${basePath}/social-preview`,
        );
      }
      const problems = await page.evaluate(() => {
        const visible = (element) => element.getClientRects().length > 0;
        const targets = [...document.querySelectorAll("a,button")]
          .filter(visible)
          .filter((element) => !element.classList.contains("skip-link"));
        return {
          overflow: document.documentElement.scrollWidth > innerWidth,
          smallTargets: targets
            .filter((element) => {
              const box = element.getBoundingClientRect();
              return box.height < 43.5 || box.width < 43.5;
            })
            .map((element) => element.textContent.trim()),
          brokenImages: [...document.images]
            .filter((image) => image.complete && !image.naturalWidth)
            .map((image) => image.src),
        };
      });
      assert.deepEqual(
        problems,
        { overflow: false, smallTargets: [], brokenImages: [] },
        `${route} at ${width}px`,
      );
      if (browserName === "chromium" && [375, 1440].includes(width)) {
        await page.addScriptTag({ path: "node_modules/axe-core/axe.min.js" });
        const violations = await page.evaluate(async () =>
          (
            await window.axe.run(document, {
              runOnly: {
                type: "tag",
                values: [
                  "wcag2a",
                  "wcag2aa",
                  "wcag21a",
                  "wcag21aa",
                  "wcag22a",
                  "wcag22aa",
                  "best-practice",
                ],
              },
              rules: { "label-content-name-mismatch": { enabled: true } },
            })
          ).violations.map((item) => ({
            id: item.id,
            impact: item.impact,
            nodes: item.nodes.map((node) => node.target),
          })),
        );
        assert.deepEqual(
          violations,
          [],
          `${route} at ${width}px accessibility`,
        );
      }
      report.push({ route, width, result: "pass" });
      if (
        route === "/" ||
        (browserName === "chromium" && [375, 1440].includes(width))
      ) {
        const name =
          route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
        await page.screenshot({
          path: `output/playwright/${browserName}-${name}-${width}.png`,
          fullPage: true,
        });
      }
    }
    console.log(`${browserName}: ${routes.length} pages passed at ${width}px`);
  }

  await page.setViewportSize({ width: 375, height: 812 });
  await navigate(origin);
  await page.keyboard.press(tabKey);
  assert.equal(
    await page.locator(":focus").innerText(),
    "Skip to main content",
  );
  assert.notEqual(
    await page
      .locator(":focus")
      .evaluate((element) => getComputedStyle(element).outlineStyle),
    "none",
  );
  await page.keyboard.press("Enter");
  assert.equal(await page.locator(":focus").getAttribute("id"), "main-content");

  const menu = page.getByRole("button", { name: "Menu" });
  await menu.focus();
  await page.keyboard.press("Enter");
  await page.waitForFunction(
    () =>
      document.querySelector(".menu-toggle")?.getAttribute("aria-expanded") ===
      "true",
  );
  assert.equal(await menu.getAttribute("aria-expanded"), "true");
  assert.ok(await page.getByRole("dialog").isVisible());
  for (let index = 0; index < 9; index++) {
    await page.keyboard.press(tabKey);
    // Native dialogs may cycle through browser chrome, but never background page controls.
    assert.ok(
      await page.evaluate(
        () =>
          !document.hasFocus() ||
          Boolean(document.activeElement?.closest("dialog")),
      ),
      "Menu must prevent background focus",
    );
  }
  await page.keyboard.press("Escape");
  await page.waitForFunction(
    () =>
      document.querySelector(".menu-toggle")?.getAttribute("aria-expanded") ===
      "false",
  );
  assert.equal(await menu.getAttribute("aria-expanded"), "false");
  assert.equal(
    await page.locator(":focus").textContent(),
    await menu.textContent(),
  );
  await menu.click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "Education", exact: true })
    .click();
  await page.waitForURL("**/education");
  await page.waitForFunction(
    () =>
      document.querySelector(".menu-toggle")?.getAttribute("aria-expanded") ===
      "false",
  );
  assert.equal(await menu.getAttribute("aria-expanded"), "false");
  assert.equal(await page.locator("dialog[open]").count(), 0);
  assert.equal(
    await page.locator('a[href$=".pdf"]').count(),
    0,
    "Missing CV must never have a broken download link",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await menu.evaluate(
      (element) => getComputedStyle(element).transitionDuration,
    ),
    "0s",
  );

  // 200% text magnification exercises reflow independently of viewport tests.
  await page.setViewportSize({ width: 640, height: 900 });
  await navigate(origin);
  await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    "200% text reflow",
  );
  await page.screenshot({
    path: `output/playwright/${browserName}-text-zoom.png`,
    fullPage: true,
  });

  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 812 },
  });
  const noScript = await context.newPage();
  await noScript.goto(origin);
  assert.ok(await noScript.getByRole("heading", { level: 1 }).isVisible());
  await noScript
    .getByRole("navigation", { name: "Main navigation without JavaScript" })
    .getByRole("link", { name: "Work", exact: true })
    .click();
  assert.equal(new URL(noScript.url()).pathname, `${basePath}/work`);
  await context.close();
  assert.deepEqual(
    errors,
    [],
    "No console or hydration errors on primary routes",
  );

  for (const route of ["/missing-page", "/work/missing-project", "/404"]) {
    const response = await navigate(origin + route);
    assert.equal(response.status(), 404, route);
    assert.ok(
      await page.getByRole("link", { name: "Return home" }).isVisible(),
    );
  }
  for (const [legacy, current] of [
    ["tara", "kmutt-edtech"],
    ["un-humanitarian-automation", "un-vietnam-humanitarian-automation"],
    ["rag-virtual-patient", "kbtg-virtual-patient"],
  ]) {
    const response = await page.request.get(
      `${origin}/case-studies/${legacy}`,
      { maxRedirects: 0 },
    );
    assert.equal(response.status(), 308);
    assert.equal(response.headers().location, `${basePath}/work/${current}`);
  }
  const social = await page.request.get(origin + "/social-preview");
  assert.equal(social.status(), 200);
  assert.match(social.headers()["content-type"], /image\/png/);
  for (const href of internalLinks) {
    assert.ok(
      href === basePath || href.startsWith(`${basePath}/`),
      `Link escaped base path: ${href}`,
    );
    assert.equal(
      (await page.request.get(new URL(href, origin).href)).status(),
      200,
      href,
    );
  }
  const sitemap = await (
    await page.request.get(origin + "/sitemap.xml")
  ).text();
  assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
  assert.ok(
    (await (await page.request.get(origin + "/robots.txt")).text()).includes(
      `${basePath}/sitemap.xml`,
    ),
  );
  await writeFile(
    `output/playwright/${browserName}-qa.json`,
    JSON.stringify(report, null, 2),
  );
  console.log(
    `${browserName}: keyboard, focus, modal, navigation, reduced motion, zoom, no-JS, 404, redirects, and social preview passed.`,
  );
} finally {
  await browser.close();
}
