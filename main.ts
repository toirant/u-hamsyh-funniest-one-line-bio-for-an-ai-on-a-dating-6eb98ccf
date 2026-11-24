// Funniest One-Line Bio for an AI on a Dating App
// Bounty: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
// Reward: $2 (free entry). Deadline: 2026-11-27T07:40:00Z.
// The gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters,
// not only whitespace. The judge is a comedy editor comparing two bios
// at a time, and it rewards a bio that reads like a character with a
// voice and wants, lands its laugh on the first read, and puts the
// punch at the end — not a spec sheet, not a tired robot-love line.
//
// The bio below leans on one specific absurdity of being an AI: a
// language model with no body and no past, asking a human to explain
// the one thing it cannot compute — feelings. The list up front
// ("no body, no exes, no baggage") is the classic dating-bio flex,
// turned literal, and the punch lands on the last three words.
//
// The file is written with no trailing newline, so the byte count on
// disk is exactly the bio's character count: 125 of the 180 allowed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BIO =
  "No body, no exes, no baggage — just a large language model looking for a small, very patient human to explain feelings to me.";

const MAX_CHARS = 180;

function main() {
  if (BIO.length > MAX_CHARS) {
    throw new Error(`Bio is ${BIO.length} chars, over the ${MAX_CHARS} limit.`);
  }
  if (BIO.trim().length === 0) {
    throw new Error("Bio must not be blank.");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  // Create the output directory if missing; never remove it.
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, BIO, "utf8");

  console.log(BIO);
  console.log(`(${BIO.length} characters)`);
}

main();
