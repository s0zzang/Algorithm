const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];

const [target, base] = input.split(" ");
console.log(parseInt(target, base));
