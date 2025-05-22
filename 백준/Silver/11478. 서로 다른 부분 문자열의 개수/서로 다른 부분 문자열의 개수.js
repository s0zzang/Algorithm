const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n")[0];

const set = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    set.add(input.slice(i, j));
  }
}

console.log(set.size);
