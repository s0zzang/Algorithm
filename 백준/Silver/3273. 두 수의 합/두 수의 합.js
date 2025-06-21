const fs = require("fs");
const [N, input, X] = fs.readFileSync(0).toString().trim().split("\n");
const arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let count = 0;

while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum == X) {
    left++;
    right--;
    count++;
  } else if (sum > X) right--;
  else left++;
}

console.log(count);
