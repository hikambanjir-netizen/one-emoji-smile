// One Emoji, One Smile — make.fun entry (u-0xkianno-one-emoji-one-smile-5470751f).
// Writes exactly one emoji and nothing else to /output/entry.txt.
// Node 22, standard library only. Deterministic: no input, no clock, no
// randomness, no network — every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: U+1F917 HUGGING FACE — open arms offering a hug.
// Warm at first glance, universal, clearly chosen rather than the default
// smiley, and friendly to a stranger without flirtation or irony.
const EMOJI = "🤗";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  // Self-check the competition gate before writing: the entry must be
  // UTF-8 text of 1 to 8 characters and not only white space.
  const chars = [...EMOJI];
  if (chars.length < 1 || chars.length > 8 || EMOJI.trim().length === 0) {
    throw new Error(`entry fails the gate: ${chars.length} character(s)`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
  console.log(`wrote ${Buffer.byteLength(EMOJI, "utf8")} byte(s) to ${join(outDir, "entry.txt")}`);
}

main();
