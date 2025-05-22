const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
const result = Array.from({ length: N }).fill(0);

for (let i = 0; i < M; i++) {
  let [x, y, n] = input[i].split(" ").map(Number);
  while (x <= y) {
    result[x - 1] = n;
    x++;
  }
}

console.log(result.join(" "));
