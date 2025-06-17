const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let maxLength = 0;
const count = Array(100001).fill(0);

for (let right = 0; right < N; right++) {
  count[arr[right]] += 1;
  while (count[arr[right]] > K) {
    count[arr[left++]] -= 1;
  }
  maxLength = Math.max(right - left + 1, maxLength);
}

console.log(maxLength);
