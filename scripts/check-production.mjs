import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const base = process.argv[2] || "http://127.0.0.1:3107";
const manifest = JSON.parse(readFileSync(".next/prerender-manifest.json", "utf8"));
const routes = Object.keys(manifest.routes).filter((path) => !path.startsWith("/_"));
const pages = new Map();
const titles = new Map();
const descriptions = new Map();
const internalLinks = new Set();
const images = new Set();

for (const path of routes) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  if (!response.headers.get("content-type")?.includes("text/html")) continue;
  const html = await response.text();
  pages.set(path, html);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, "One H1: " + path);
  assert.ok(html.includes('id="main-content"'), "Skip-link target: " + path);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && description, "Metadata: " + path);
  assert.ok(!titles.has(title), "Duplicate title: " + path + " and " + titles.get(title));
  assert.ok(!descriptions.has(description), "Duplicate description: " + path + " and " + descriptions.get(description));
  titles.set(title, path);
  descriptions.set(description, path);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    if (href.startsWith("/") && !href.startsWith("//")) internalLinks.add(href.replaceAll("&amp;", "&"));
  }
  for (const [, src] of html.matchAll(/<img\b[^>]*src="([^"]+)"/g)) images.add(src.replaceAll("&amp;", "&"));
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(json);
}
const checked = new Set(pages.keys());
for (const href of internalLinks) {
  const url = new URL(href, base);
  if (!checked.has(url.pathname)) {
    const response = await fetch(url);
    assert.equal(response.status, 200, "Internal link: " + href);
    if (response.headers.get("content-type")?.includes("text/html")) pages.set(url.pathname, await response.text());
    checked.add(url.pathname);
  }
  if (url.hash) assert.ok(pages.get(url.pathname)?.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'), "Anchor: " + href);
}
for (const path of ["/unavailable-audit-route", "/services/unavailable-audit-service", "/projets/unavailable-audit-project"]) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 404, "Unknown route: " + path);
  assert.ok((await response.text()).includes("noindex"), "404 robots: " + path);
}
for (const src of images) {
  const response = await fetch(new URL(src, base));
  assert.equal(response.status, 200, "Image: " + src);
  assert.ok(response.headers.get("content-type")?.startsWith("image/"), "Image type: " + src);
}
const share = await fetch(new URL("/sharing-image", base));
assert.equal(share.status, 200);
assert.ok(share.headers.get("content-type")?.includes("image/png"));
const bytes = Buffer.from(await share.arrayBuffer());
assert.equal(bytes.readUInt32BE(16), 1200);
assert.equal(bytes.readUInt32BE(20), 630);
const contact = pages.get("/contact");
assert.ok(contact?.includes("tel:+237699151448") && contact?.includes("tel:+237670152328") && contact?.includes("mailto:7buildinginnovation@gmail.com"));
console.log("PASS: " + pages.size + " pages, " + internalLinks.size + " internal links/anchors, " + images.size + " images, 3 unknown-route 404s, JSON-LD, unique metadata and 1200×630 sharing image.");
