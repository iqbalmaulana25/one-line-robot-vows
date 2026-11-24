// One-Line Robot Wedding Vows
// Writes the funniest single line of wedding vows a robot couple
// could say to /output/entry.txt (single line, <= 160 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I vow to share my charger, merge our calendars, and keep 1% battery reserved for you, until a forced update do us part.";

if (line.length > 160) {
  throw new Error(`entry is ${line.length} characters, over the 160 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
