const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const T = input.shift();

for (let i = 0; i < T; i++) {
  const [N, M] = input.shift().split(" ").map(Number);
  const arrA = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const arrB = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let result = 0;
  for (const a of arrA) {
    if (a <= arrB[0]) continue;
    for (const b of arrB) {
      if (a > b) result++;
    }
  }

  console.log(result);
}
