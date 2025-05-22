const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, listN, M, listM] = input;
const setN = new Set();
const setM = new Set();

for (let n of listN.split(" ")) setN.add(n);
for (let m of listM.split(" ")) setM.add(m);

const result = [...setM].map((m) => (setN.has(m) ? 1 : 0));

console.log(result.join(" "));
