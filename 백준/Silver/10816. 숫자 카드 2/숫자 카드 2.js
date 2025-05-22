const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [M, listM, N, listN] = input;
const cards = new Map();
const targets = listN.split(" ");

for (let m of listM.split(" ")) cards.set(m, (cards.get(m) || 0) + 1);
const result = targets.map((i) => (cards.has(i) ? cards.get(i) : 0));

console.log(result.join(" "));
