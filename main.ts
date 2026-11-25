// SPDX-License-Identifier: MIT
// Entry program for "The Most Boring Object, Reviewed in One Line"
// (make.fun competition u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3).
// Writes the one-line review to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The lid: fits no container in this house, and we keep it anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
