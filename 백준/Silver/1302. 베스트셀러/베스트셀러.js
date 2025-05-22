const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const _ = input.shift();
const map = new Map();

for (let i of input) map.set(i, (map.get(i) || 0) + 1);
const [best] = [...map].sort((a, b) => {
  if (a[1] > b[1]) return -1;
  else if (a[1] < b[1]) return 1;
  else {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
  }
})[0];

console.log(best);