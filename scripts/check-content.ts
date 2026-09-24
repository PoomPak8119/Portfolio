import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { projects, metrics } from "../content/projects.ts";
import { profile } from "../content/profile.ts";
import { experience } from "../content/experience.ts";
import { credentials, recommendations } from "../content/credentials.ts";
import { recognitions } from "../content/recognition.ts";

assert.equal(
  new Set(projects.map((project) => project.slug)).size,
  projects.length,
  "Project slugs must be unique",
);
assert.equal(projects.filter((project) => project.featured).length, 4);
for (const project of projects) {
  assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(
    project.title && project.role && project.challenge && project.outcome,
  );
  assert.ok(project.image.alt && project.image.filename);
  if (project.image.src)
    assert.ok(
      existsSync(`public${project.image.src}`),
      `Missing image: ${project.image.src}`,
    );
  for (const image of project.gallery ?? [])
    if (image.src)
      assert.ok(
        existsSync(`public${image.src}`),
        `Missing gallery image: ${image.src}`,
      );
  if (project.evidence)
    assert.equal(new URL(project.evidence.href).protocol, "https:");
}
for (const reference of [
  ...metrics.map((item) => item.slug),
  ...experience.map((item) => item.project),
]) {
  assert.ok(
    projects.some((project) => project.slug === reference),
    `Broken project reference: ${reference}`,
  );
}
assert.match(
  projects.find(
    (project) => project.slug === "un-vietnam-humanitarian-automation",
  )!.outcome,
  /estimated/,
);
assert.match(
  projects.find((project) => project.slug === "kmutt-edtech")!.outcome,
  /20-student pilot/,
);
assert.match(
  projects.find((project) => project.slug === "kbtg-virtual-patient")!.outcome,
  /Co-developed/,
);
const strategicAlignment = projects.find(
  (project) => project.slug === "un-vietnam-strategic-alignment",
)!;
assert.ok(strategicAlignment.workflow?.length === 7);
assert.match(
  strategicAlignment.workflow!.find((step) => step.title === "Augment")!.text,
  /support tool/,
);
assert.match(
  strategicAlignment.sections.find((section) => section.title === "Outcome")!
    .text,
  /UN Resident Coordinator/,
);
for (const credential of credentials) {
  if (credential.image?.src)
    assert.ok(
      existsSync(`public${credential.image.src}`),
      `Missing credential image: ${credential.image.src}`,
    );
  if (credential.href.startsWith("https://")) new URL(credential.href);
  else
    assert.ok(
      existsSync(`public${credential.href}`),
      `Missing credential: ${credential.href}`,
    );
}
for (const recommendation of recommendations)
  assert.ok(
    existsSync(`public${recommendation.href}`),
    `Missing recommendation: ${recommendation.href}`,
  );
for (const recognition of recognitions) {
  assert.equal(new URL(recognition.url).protocol, "https:");
  assert.ok(recognition.image.src && recognition.image.alt);
  assert.ok(
    existsSync(`public${recognition.image.src}`),
    `Missing recognition image: ${recognition.image.src}`,
  );
}
assert.equal(experience[0].period, "February–June 2026");
assert.equal(experience[3].period, "June–August 2024");
if (profile.cv)
  if (profile.cv.startsWith("https://")) new URL(profile.cv);
  else
    assert.ok(
      existsSync(`public${profile.cv}`),
      "Local CV must exist before enabling downloads",
    );
if (profile.portrait.src)
  assert.ok(existsSync(`public${profile.portrait.src}`));
const redirects = readFileSync("public/_redirects", "utf8");
for (const [legacy, current] of [
  ["tara", "kmutt-edtech"],
  ["un-humanitarian-automation", "un-vietnam-humanitarian-automation"],
  ["rag-virtual-patient", "kbtg-virtual-patient"],
]) {
  assert.match(redirects, new RegExp(`/case-studies/${legacy} /work/${current}`));
}
console.log(
  "Content integrity checks passed: routes, qualifiers, dates, links, and configured assets.",
);
