const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [num, ...arrs] = input;
const coins = [25, 10, 5, 1];

for (let i = 0; i < num; i++) {
  let amount = +arrs[i];

  const result = coins.map((coin) => {
    const count = Math.floor(amount / coin);
    amount %= coin;
    return count;
  });

  console.log(result.join(" "));
}
