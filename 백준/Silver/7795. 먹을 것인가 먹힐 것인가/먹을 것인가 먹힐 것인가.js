const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const T = input.shift();

for (let i = 0; i < T; i++) {
  const [N, M] = input.shift().split(" ").map(Number);
  const arrA = input.shift().split(" ").map(Number);
  const arrB = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let result = 0;

  for (const a of arrA) {
    let left = 0;
    let right = M - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (a > arrB[mid]) left = mid + 1;
      else right = mid - 1;
    }

    result += left;
  }

  console.log(result);
}
