const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input.shift().split(" ");
const baskets = Array.from({ length: N }).map((_, i) => i + 1);

for (let i = 0; i < M; i++) {
  const [x, y] = input[i].split(" ");
  const basketX = baskets[x - 1];
  baskets[x - 1] = baskets[y - 1];
  baskets[y - 1] = basketX;
}

console.log(baskets.join(" "));
