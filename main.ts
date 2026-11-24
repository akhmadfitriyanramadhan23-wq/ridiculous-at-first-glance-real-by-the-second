// Ridiculous at First Glance, Real by the Second — make.fun entry
// One sentence, at most 200 characters, pitching a startup idea so strange
// it sounds like a joke, yet specific enough that a reader can see the
// customers and the money: the odd thing, who pays, why it holds together.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "For $9 a month, city folk adopt a real cow by video: they name it, watch it graze live, and pay extra to visit their cow.";
const MAX_CHARS = 200;

// The gate: a single sentence within the limit (counted in code points).
const chars = [...ENTRY].length;
if (chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} chars, over the ${MAX_CHARS} limit`);
}
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
// Read-back: what landed on disk must be exactly the gated entry.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY + "\n") throw new Error("read-back mismatch in /output/entry.txt");
console.log(`wrote ${chars} chars to /output/entry.txt`);
