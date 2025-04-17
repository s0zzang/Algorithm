const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [num, ...inputs] = input;
let total = num.split(" ")[1];
const coins = inputs.reverse().map(Number);

const result = coins.map((coin) => {
  if (total >= coin) {
    const count = Math.floor(total / coin);
    total %= coin;
    return count;
  } else return 0;
});

console.log(result.reduce((a, c) => a + c));
