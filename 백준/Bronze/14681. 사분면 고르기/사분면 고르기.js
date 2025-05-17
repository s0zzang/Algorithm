const fs = require("fs");
const input = fs.readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n1, n2] = input;

if (n1 > 0 && n2 > 0) console.log(1);
if (n1 < 0 && n2 > 0) console.log(2);
if (n1 < 0 && n2 < 0) console.log(3);
if (n1 > 0 && n2 < 0) console.log(4);
