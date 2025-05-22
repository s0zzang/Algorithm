const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 1. a요소에서 b요소를 제외하여 length 구하기
// 2. b요소에서 a요소를 제외하여 length 구하기

const [_, a, b] = input;
const setA = new Set(a.split(" "));
const setB = new Set(b.split(" "));

const getDifference = (x, y) => [...x].filter((i) => !y.has(i)).length;

console.log(getDifference(setA, setB) + getDifference(setB, setA));
