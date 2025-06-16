const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < K; i++) sum += arr[i];
let max = sum;

for (let i = 1; i <= N - K; i++) {
  sum = sum - arr[i - 1] + arr[i + K - 1];
  max = Math.max(sum, max);
}

console.log(max);
