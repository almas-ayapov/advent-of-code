const { createHash } = require("node:crypto");

for (let i = 0; i <= 999999; i++) {
  const str = `bgvyzdsv${`${i}`.padStart(6, "0")}`;
  const hash = createHash("md5").update(str).digest("hex");
  if (hash.startsWith("00000")) {
    console.log(`Anser is ${str}, hash is ${hash}`);
    break;
  }
}
