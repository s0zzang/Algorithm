const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const total = input[0];
let result = 0;

for (let i = 2; i < input.length; i++) {
  const [price, count] = input[i].split(" ");
  result += price * count;
}

console.log(total == result ? "Yes" : "No");
