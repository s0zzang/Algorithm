const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let amount = 1000 - input;
const coins = [500, 100, 50, 10, 5, 1];
const result = coins.map((coin) => {
  const count = Math.floor(amount / coin);
  amount %= coin;
  return count;
});

console.log(result.reduce((acc, cur) => acc + cur));
