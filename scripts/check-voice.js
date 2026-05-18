#!/usr/bin/env node
// Voice lint — scans src/content/**/*.js and src/pages/**/*.js for
// banned-word occurrences. Exits non-zero on any hit.
// voice.js is excluded because it defines the list.

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");

function loadBannedWords() {
  const src = fs.readFileSync(
    path.join(repoRoot, "src/content/voice.js"),
    "utf8"
  );
  const match = src.match(/bannedWords\s*=\s*\[([\s\S]*?)\];/);
  if (!match) {
    console.error("Could not find bannedWords export in src/content/voice.js");
    process.exit(2);
  }
  return Array.from(match[1].matchAll(/"([^"]+)"/g)).map((m) => m[1]);
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (/\.(js|jsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function escapeForRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const banned = loadBannedWords();
const files = [
  ...walk(path.join(repoRoot, "src/content")),
  ...walk(path.join(repoRoot, "src/pages")),
].filter((f) => !f.endsWith(path.sep + "voice.js"));

let hits = 0;
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split("\n");
  for (const word of banned) {
    const pattern = new RegExp(`\\b${escapeForRegex(word)}\\b`, "i");
    lines.forEach((line, idx) => {
      if (pattern.test(line)) {
        const rel = path.relative(repoRoot, file);
        console.log(`${rel}:${idx + 1}: "${word}" — ${line.trim()}`);
        hits++;
      }
    });
  }
}

if (hits === 0) {
  console.log("Voice lint passed: no banned words found.");
  process.exit(0);
}
console.error(`\nVoice lint failed: ${hits} banned-word occurrence(s).`);
process.exit(1);
