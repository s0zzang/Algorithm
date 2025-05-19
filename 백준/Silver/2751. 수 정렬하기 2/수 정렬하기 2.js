const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [_, ...numsOfStr] = input;
const nums = numsOfStr.sort((a, b) => +a - +b);

console.log(nums.join("\n"));
