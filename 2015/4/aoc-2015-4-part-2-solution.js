const { createHash } = require("node:crypto");

let count = -1;
let hash = "";

while (!hash.startsWith("000000")) {
  count++;
  hash = createHash("md5").update(`bgvyzdsv${count}`).digest("hex");
}

console.log(`AoC 2015 day 3 part 2: Answer is ${count}.`);
