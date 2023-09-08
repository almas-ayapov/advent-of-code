const readline = require("node:readline");
const fs = require("node:fs");
const path = require("node:path");

const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, "../aoc-2015-5-input.txt")),
});

let niceStringsCount = 0;

const ALLOWED_VOWELS = "aeiou";
const REQUIRED_ALLOWED_VOWEL_COUNT = 3;
const restrictedStrings = ["ab", "cd", "pq", "xy"];

rl.on("line", (line) => {
  let allowedVowelCount = 0;
  let duplicateFound = false;
  let containsRestrictedStrings = false;

  for (let i = 0; i < line.length; i++) {
    if (containsRestrictedStrings) break;

    const currentChar = line[i];
    const nextChar = line[i + 1];

    if (
      ALLOWED_VOWELS.includes(currentChar) &&
      allowedVowelCount < REQUIRED_ALLOWED_VOWEL_COUNT
    ) {
      allowedVowelCount++;
    }

    if (!nextChar) continue;

    if (!duplicateFound) {
      duplicateFound = currentChar === nextChar;
    }

    if (!containsRestrictedStrings) {
      containsRestrictedStrings = restrictedStrings.includes(
        `${currentChar}${nextChar}`
      );
    }
  }

  if (
    allowedVowelCount >= REQUIRED_ALLOWED_VOWEL_COUNT &&
    duplicateFound &&
    !containsRestrictedStrings
  ) {
    niceStringsCount++;
  }
});

rl.on("close", () =>
  console.log(
    `AoC 2015 day 5 part 1: Santa has ${niceStringsCount} nice strings in his text file.`
  )
);
