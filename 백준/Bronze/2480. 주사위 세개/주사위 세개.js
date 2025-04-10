const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map((n) => +n);

const result = new Map();
for (let n of input) {
  result.set(n, (result.get(n) || 0) + 1);
}

if (result.size === 1) console.log(10000 + input[0] * 1000);
else if (result.size === 2) {
  const twiceKey = [...result].find(([_, v]) => v === 2)[0];
  console.log(1000 + twiceKey * 100);
} else console.log(Math.max(...input) * 100);
