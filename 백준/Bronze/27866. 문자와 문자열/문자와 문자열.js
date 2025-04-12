const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [s, i] = input;
console.log(s[i - 1]);
