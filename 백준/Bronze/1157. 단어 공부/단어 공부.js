const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0]
  .toUpperCase();

const map = new Map();
for (let s of [...input]) map.set(s, (map.get(s) || 0) + 1);
const max = [...map].sort((a, b) => b[1] - a[1]);

if (map.size === 1) console.log(max[0][0]);
else console.log(max[0][1] === max[1][1] ? "?" : max[0][0]);
