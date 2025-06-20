const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);
let min = Infinity;
let left = 0;
let right = left + 1;

while (right < N) {
  const diff = Math.abs(arr[right] - arr[left]);
  if (diff >= M) {
    min = Math.min(min, diff);
    left++;
  } else {
    right++;
  }
}

console.log(min);
