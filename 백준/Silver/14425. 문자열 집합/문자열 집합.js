const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [length, ...inputs] = input;
const [n] = length.split(" ").map(Number);
const arrM = new Set(inputs.slice(0, n).map((i) => i.trim()));
const arrS = inputs.slice(n, inputs.length);
let result = 0;

for (let s of arrS) if (arrM.has(s)) result++;

console.log(result);
