const fs = require("node:fs");
const path = require("node:path");
const housesWithPresent = new Map();

const rs = fs.createReadStream(path.join(__dirname, "aoc-2015-3-input.txt"), {
  encoding: "utf-8",
});

rs.on("readable", () => {
  let chunk;
  const currentPosition = { x: 0, y: 0 };

  housesWithPresent.set("00", 1);

  while (null !== (chunk = rs.read(1))) {
    if (chunk === "^") {
      currentPosition.y += 1;
    } else if (chunk === ">") {
      currentPosition.x += 1;
    } else if (chunk === "v") {
      currentPosition.y -= 1;
    } else if (chunk === "<") {
      currentPosition.x -= 1;
    }

    const key = `${currentPosition.x}${currentPosition.y}`;
    if (!housesWithPresent.has(key)) {
      housesWithPresent.set(key, 1);
    } else {
      const numberOfPresents = housesWithPresent.get(key);
      housesWithPresent.set(key, numberOfPresents + 1);
    }
  }
});

rs.on("end", () =>
  console.log(
    `AoC 2015 day 3 part 1: ${housesWithPresent.size} houses received at least one present.`
  )
);
