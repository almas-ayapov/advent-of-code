const fs = require("node:fs");
const path = require("node:path");
const housesWithPresent = new Map();

const rs = fs.createReadStream(path.join(__dirname, "aoc-2015-3-input.txt"), {
  encoding: "utf-8",
});

function getNewPosition(direction, currentPosition) {
  let { x, y } = currentPosition;
  if (direction === "^") {
    y += 1;
  } else if (direction === ">") {
    x += 1;
  } else if (direction === "v") {
    y -= 1;
  } else if (direction === "<") {
    x -= 1;
  }
  return { x, y };
}

function dropPresent() {}

rs.on("readable", () => {
  let chunk;
  const positions = new Map();
  positions.set("Santa", { x: 0, y: 0 });
  positions.set("RoboSanta", { x: 0, y: 0 });
  housesWithPresent.set("00", 2);

  while (null !== (chunk = rs.read(1))) {
    const key = `${positionOfSanta.x}${positionOfSanta.y}`;
    if (!housesWithPresent.has(key)) {
      housesWithPresent.set(key, 1);
    } else {
      const numberOfPresents = housesWithPresent.get(key);
      housesWithPresent.set(key, numberOfPresents + 1);
    }
  }
});

rs.on("end", () =>
  console.log(`${housesWithPresent.size} houses received at least one present.`)
);
