const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

let maxN = Number.MIN_SAFE_INTEGER;
let maxNPos = "";
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (maxN < input[i][j]) {
      maxN = input[i][j];
      maxNPos = `${i + 1} ${j + 1}`;
    }
  }
}

console.log(maxN);
console.log(maxNPos);
