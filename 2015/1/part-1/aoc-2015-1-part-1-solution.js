const fs = require("node:fs");
const path = require("node:path");

let currentFloor = 0;

const rs = fs.createReadStream(
  path.join(__dirname, "../aoc-2015-1-input.txt"),
  {
    encoding: "utf-8",
  }
);

rs.on("readable", () => {
  let chunk;

  while (null !== (chunk = rs.read(1))) {
    if (chunk === "(") {
      currentFloor += 1;
    } else if (chunk === ")") {
      currentFloor -= 1;
    }
  }
});

rs.on("end", () =>
  console.log(`AoC 2015 day 1 part 1: final floor is ${currentFloor}.`)
);
