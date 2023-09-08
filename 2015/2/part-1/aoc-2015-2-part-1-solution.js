const readline = require("node:readline");
const fs = require("node:fs");
const path = require("node:path");
let totalAreaOfPaper = 0;

const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, "../aoc-2015-2-input.txt")),
});

rl.on("line", (line) => {
  const [d1, d2, d3] = line
    .split("x")
    .map((str) => parseInt(str))
    .sort((a, b) => a - b);

  totalAreaOfPaper += 2 * (d1 * d2 + d2 * d3 + d1 * d3) + d1 * d2;
});

rl.on("close", () =>
  console.log(
    `AoC 2015 day 2 part 1: elves should order ${totalAreaOfPaper} square feet of wrapping paper.`
  )
);
