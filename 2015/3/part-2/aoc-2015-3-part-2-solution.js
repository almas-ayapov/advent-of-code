const fs = require("node:fs");
const path = require("node:path");
const housesWithPresent = new Map();

const rs = fs.createReadStream(
  path.join(__dirname, "../aoc-2015-3-input.txt"),
  {
    encoding: "utf-8",
  }
);

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

rs.on("readable", () => {
  let chunk;
  let positions = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];

  housesWithPresent.set("00", 2);

  let santasTurn = true;

  while (null !== (chunk = rs.read(1))) {
    let key;

    if (santasTurn) {
      positions[0] = getNewPosition(chunk, positions[0]);
      key = `${positions[0].x}${positions[0].y}`;
    } else {
      positions[1] = getNewPosition(chunk, positions[1]);
      key = `${positions[1].x}${positions[1].y}`;
    }

    if (!housesWithPresent.has(key)) {
      housesWithPresent.set(key, 1);
    } else {
      const numberOfPresents = housesWithPresent.get(key);
      housesWithPresent.set(key, numberOfPresents + 1);
    }

    santasTurn = !santasTurn;
  }
});

rs.on("end", () =>
  console.log(
    `AoC 2015 day 3 part 2: ${housesWithPresent.size} houses received at least one present.`
  )
);
