const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(""));

let [x, y] = [0, 0];
let result = "";
let length = input.length;
const maxColLength = Math.max(...input.map((row) => row.length));

while (x < length && y < maxColLength) {
  if (input[x][y]) result += input[x][y];

  if (x + 1 < length) x += 1;
  else {
    x = 0;
    y += 1;
  }
}

console.log(result);
