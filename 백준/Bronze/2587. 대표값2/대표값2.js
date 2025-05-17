const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

console.log(input.reduce((a, c) => a + c) / input.length);
console.log(input.sort((a, b) => a - b)[2]);
