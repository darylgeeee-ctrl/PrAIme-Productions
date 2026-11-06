import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync("index.html", "utf8");
const app = readFileSync("app.js", "utf8");
const assistant = readFileSync("assistant.js", "utf8");
const worker = readFileSync("sw.js", "utf8");

const ids = new Set([...html.matchAll(/\\bid=["']([^"']+)["']/g)].map(m => m[1]));
for (const [file, source] of [["app.js", app], ["assistant.js", assistant]]) {
  for (const match of source.matchAll(/\\$\\(["']#([^"' ]+)/g)) {
    assert(ids.has(match[1]), `${file} references missing HTML id #${match[1]}`);
  }
}

for (const match of html.matchAll(/data-page=["']([^"']+)["']/g)) {
  assert(html.includes(`id="${match[1]}"`), `Navigation target #${match[1]} is missing`);
}

for (const asset of ["index.html", "styles.css", "app.js", "assistant.js", "manifest.webmanifest", "icon.svg"]) {
  assert(worker.includes(`"${asset}"`), `Offline shell does not precache ${asset}`);
}

assert(worker.includes('key.startsWith(CACHE_PREFIX)'), "Cache cleanup must be limited to PrAIme caches");
assert(!worker.includes("caches.keys().then(keys => Promise.all(keys.map"), "Worker must not delete unrelated origin caches");

console.log("PrAIme smoke checks passed: DOM bindings, navigation targets and offline shell.");
