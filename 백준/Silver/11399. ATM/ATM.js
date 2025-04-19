const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [num, ...inputs] = input;
const times = inputs[0].split(" ").map(Number);
times.sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < num; i++) result += times[i] * (times.length - i);

console.log(result);
