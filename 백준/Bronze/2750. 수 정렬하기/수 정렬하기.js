const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const [_, ...nums] = input;
nums.sort((a, b) => a - b);

nums.map((n) => console.log(n));
