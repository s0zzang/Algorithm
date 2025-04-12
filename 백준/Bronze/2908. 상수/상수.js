const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ");

const [fir, sec] = input.map((n) => [...n].reverse().join(""));
console.log(Math.max(fir, sec));
