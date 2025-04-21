const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];

const condition = input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0);
console.log(condition ? 1 : 0);
