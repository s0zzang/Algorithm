const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const notSee = new Set();
const notHear = new Set();
const notSeeAndHear = new Set();

for (let i = 0; i < N; i++) notSee.add(input[i]);
for (let i = N; i < N + M; i++) notHear.add(input[i]);

[...notSee].map((s) => notHear.has(s) && notSeeAndHear.add(s));
[...notHear].map((s) => notSee.has(s) && notSeeAndHear.add(s));

console.log(notSeeAndHear.size);
[...notSeeAndHear].sort().map((s) => console.log(s));