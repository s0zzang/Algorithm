const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [firstLine, scores] = input;
const [_, standard] = firstLine.split(" ");

console.log(
  scores
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a)
    .at(standard - 1)
);
