const { createHash } = require("node:crypto");

let count = -1;
let hash = "";

while (!hash.startsWith("00000")) {
  count++;
  hash = createHash("md5").update(`bgvyzdsv${count}`).digest("hex");
}

console.log(`AoC 2015 day 4 part 1: Answer is ${count}.`);
