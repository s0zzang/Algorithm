const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const maxNumber = Math.max(...input);
console.log(maxNumber);
console.log(input.indexOf(maxNumber + "") + 1);
