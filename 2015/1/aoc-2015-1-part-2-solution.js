const fs = require("node:fs");
const path = require("node:path");

let firstBasementStairsNumber = null;

const rs = fs.createReadStream(path.join(__dirname, "aoc-2015-1-input.txt"), {
  encoding: "utf-8",
});

rs.on("readable", () => {
  let chunk;
  let currentFloor = 0;
  let currentStairsNumber = 1;

  while (null !== (chunk = rs.read(1))) {
    if (chunk === "(") {
      currentFloor += 1;
    } else if (chunk === ")") {
      currentFloor -= 1;
    }

    if (firstBasementStairsNumber === null) {
      if (currentFloor < 0) {
        firstBasementStairsNumber = currentStairsNumber;
      }
      currentStairsNumber += 1;
    }
  }
});

rs.on("end", () =>
  console.log(
    `AoC 2015 day 1 part 2: first basement stairs number is ${firstBasementStairsNumber}.`
  )
);
