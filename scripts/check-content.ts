import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { projects, metrics } from "../content/projects.ts";
import { profile } from "../content/profile.ts";
import { experience } from "../content/experience.ts";

assert.equal(
  new Set(projects.map((project) => project.slug)).size,
  projects.length,
  "Project slugs must be unique",
);
assert.equal(projects.filter((project) => project.featured).length, 3);
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
assert.equal(experience[0].period, "February–June 2026");
assert.equal(experience[3].period, "June–August 2024");
if (profile.cv)
  assert.ok(
    existsSync(`public${profile.cv}`),
    "CV must exist before enabling downloads",
  );
if (profile.portrait.src)
  assert.ok(existsSync(`public${profile.portrait.src}`));
console.log(
  "Content integrity checks passed: routes, qualifiers, dates, links, and configured assets.",
);
