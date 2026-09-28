import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import vm from "node:vm";
import ts from "typescript";

// Isolated loadedModule loader: fixtures never alter production company/project data.
function loadModule(file, env = {}, cache = new Map()) {
  const filename = resolve(file);
  if (cache.has(filename)) return cache.get(filename).exports;
  const loadedModule = { exports: {} };
  cache.set(filename, loadedModule);
  const nativeRequire = createRequire(filename);
  const localRequire = (specifier) => {
    if (specifier.startsWith("@/")) return loadModule(resolve("src", specifier.slice(2)) + ".ts", env, cache);
    if (specifier.startsWith(".")) return loadModule(resolve(dirname(filename), specifier) + ".ts", env, cache);
    return nativeRequire(specifier);
  };
  const code = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(code, { exports: loadedModule.exports, module: loadedModule, require: localRequire, process: { env }, URL, Date }, { filename });
  return loadedModule.exports;
}
const { company, getCompanyExperienceYears, getCompanyExperienceLabel } = loadModule("src/data/company.ts");
assert.equal(company.experienceStartYear, null, "Unvalidated start year must stay unset.");
assert.equal(getCompanyExperienceYears(2026), null);
company.experienceStartYear = 2004; // Test fixture only.
assert.equal(getCompanyExperienceLabel(2026), "22+ ans d’expérience");
assert.equal(getCompanyExperienceLabel(2027), "23+ ans d’expérience");
assert.equal(getCompanyExperienceLabel(2028), "24+ ans d’expérience");
assert.equal(getCompanyExperienceYears(), new Date().getFullYear() - 2004);
for (const value of [2030, 0, 2004.5, NaN]) {
  company.experienceStartYear = value;
  assert.equal(getCompanyExperienceYears(2026), null);
}
const { isProjectIndexable, projects } = loadModule("src/data/projects.ts");
assert.equal(projects.length, 0, "No unapproved project should be introduced.");
const project = { id: "fixture", slug: "test-project", title: "Fixture", category: "Test", description: "Test only", featured: false, published: true, coverImage: { src: "/fixture.jpg", alt: "Fixture", width: 100, height: 80 } };
assert.ok(isProjectIndexable(project));
for (const change of [{ published: false }, { slug: "../invalid" }, { title: " " }, { description: " " }, { category: "" }, { coverImage: undefined }, { coverImage: { ...project.coverImage, alt: " " } }, { coverImage: { ...project.coverImage, width: 0 } }]) {
  assert.equal(isProjectIndexable({ ...project, ...change }), false, JSON.stringify(change));
}
const noDomain = loadModule("src/lib/page-metadata.ts").createPageMetadata({ title: "Contact", description: "Test", path: "/contact" });
assert.equal(noDomain.alternates, undefined);
assert.equal(noDomain.openGraph.url, undefined);
const { createPageMetadata } = loadModule("src/lib/page-metadata.ts", { NEXT_PUBLIC_SITE_URL: "https://example.invalid/" });
for (const path of ["/", "/contact", "/services/expertise-judiciaire"]) {
  const metadata = createPageMetadata({ title: "Test " + path, description: path, path });
  assert.equal(metadata.alternates.canonical, "https://example.invalid" + path);
  assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
  assert.equal(metadata.twitter.title, metadata.openGraph.title);
  assert.equal(metadata.twitter.description, metadata.description);
  assert.equal(metadata.openGraph.images[0].url, "https://example.invalid/sharing-image");
}
for (const value of ["javascript:alert(1)", "https://user:password@example.invalid", "invalid"]) {
  assert.throws(() => loadModule("src/lib/site-url.ts", { NEXT_PUBLIC_SITE_URL: value }).getSiteUrl());
}
console.log("PASS: experience, project publication, canonical and social metadata rules.");
