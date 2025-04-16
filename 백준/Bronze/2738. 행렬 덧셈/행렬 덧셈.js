const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [num, ...arrs] = input;
const [x] = num.split(" ");

for (let i = 0; i < x; i++) {
  const arrA = arrs[i].split(" ").map((n) => +n);
  const arrB = arrs[i + +x].split(" ");
  console.log(arrA.map((n, i) => n + +arrB[i]).join(" "));
}
