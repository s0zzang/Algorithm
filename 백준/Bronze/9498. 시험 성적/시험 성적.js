const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];

if (input >= 90) console.log("A");
else if (input >= 80) console.log("B");
else if (input >= 70) console.log("C");
else if (input >= 60) console.log("D");
else console.log("F");
