const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];

if (input === "") console.log(0);
else console.log(input.split(" ").length);
