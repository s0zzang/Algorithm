const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const total = Number(input[0]);
const tastes = input[1].split(" ");

let result = 0;

for (let taste of tastes) {
  if (taste > total) result += total;
  if (taste <= total) result += taste / 1;
}

console.log(result);
