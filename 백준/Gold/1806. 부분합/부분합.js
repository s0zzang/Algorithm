const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 가변 슬라이딩 윈도우

let left = 0;
let sum = 0;
let minLength = Infinity;

for (let right = 0; right < arr.length; right++) {
  sum += arr[right];

  while (sum >= S) {
    minLength = Math.min(minLength, right - left + 1);
    sum -= arr[left];
    left++;
  }
}

console.log(minLength === Infinity ? 0 : minLength);
