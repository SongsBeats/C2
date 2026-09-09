import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const origin = "https://corevolvix.com";
const source = path.join(root, "src", "app");
const output = path.join(root, "out");

async function pagePaths(directory = source, segments = []) {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes = entries.some((entry) => entry.name === "page.js")
    ? [`/${segments.length ? `${segments.join("/")}/` : ""}`]
    : [];

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith("_")) {
      routes.push(...await pagePaths(path.join(directory, entry.name), [...segments, entry.name]));
    }
  }

  return routes.sort();
}

const routes = await pagePaths();
const expectedUrls = routes.map((route) => new URL(route, origin).toString()).sort();

function assertProductionUrls(text) {
  assert.doesNotMatch(text, /https?:\/\/(?:localhost|127\.0\.0\.1)(?:[:/]|\b)/i);
  assert.doesNotMatch(text, /https?:\/\/[^\s"<>]*\.vercel\.app\b/i);
}

test("sitemap contains every public page exactly once with production URLs", async () => {
  const xml = await readFile(path.join(output, "sitemap.xml"), "utf8");
  assert.match(xml, /<urlset\s+xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  assert.ok(routes.length > 0, "At least one source page must exist");
  assert.equal(new Set(urls).size, urls.length, "Sitemap URLs must be unique");
  assert.deepEqual(urls.sort(), expectedUrls);
  assert.doesNotMatch(xml, /<lastmod>/, "Do not invent content modification dates at build time");
  assertProductionUrls(xml);
});

test("robots permits crawling and advertises the production sitemap", async () => {
  const robots = await readFile(path.join(output, "robots.txt"), "utf8");
  assert.match(robots, /^User-Agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);
  const sitemaps = [...robots.matchAll(/^Sitemap: (.+)$/gm)].map((match) => match[1].trim());
  assert.deepEqual(sitemaps, [`${origin}/sitemap.xml`]);
  assertProductionUrls(robots);
});

for (const route of routes) {
  test(`${route} exports one matching canonical and is not marked noindex`, async () => {
    const html = await readFile(path.join(output, route.slice(1), "index.html"), "utf8");
    const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
    assert.ok(head, "Static HTML must include a head element");
    const canonicalTags = [...head.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)];
    assert.equal(canonicalTags.length, 1, "Each page must have exactly one canonical link");
    const canonical = canonicalTags[0][0].match(/href="([^"]+)"/)?.[1];
    assert.equal(canonical, new URL(route, origin).toString());
    const robotsTags = [...head.matchAll(/<meta\b[^>]*name="(?:robots|googlebot)"[^>]*>/g)];
    for (const [tag] of robotsTags) assert.doesNotMatch(tag, /\bnoindex\b/i);
    assertProductionUrls(head);
  });
}
