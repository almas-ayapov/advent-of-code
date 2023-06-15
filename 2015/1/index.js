// Simplicity and dumbness of this code is intentional.Everyone can read it, it is reliable, and has healthy amount of redundancy.
const fs = require("node:fs");
const path = require("node:path");

// Simple task = procedural approach.
let currentFloor = 0;
let currentStairsNumber = 1;
let firstBasementStairsNumber = null;

const rs = fs.createReadStream(path.join(__dirname, "input"), {
  encoding: "utf-8",
});

rs.on("readable", () => {
  let chunk;

  while (null !== (chunk = rs.read(1))) {
    // Nobody dies if no using ternary operator
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
    `Final floor is ${currentFloor}. First basement stairs number is ${firstBasementStairsNumber}.`
  )
);
