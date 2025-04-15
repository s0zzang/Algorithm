const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [num, ...rest] = input;
const papers = rest.map((paper) => paper.split(" "));
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 0; i < num; i++) {
  for (let j = papers[i][0]; j < +papers[i][0] + 10; j++) {
    for (let k = papers[i][1]; k < +papers[i][1] + 10; k++) {
      paper[j][k] = (paper[j][k] | 0) + 1;
    }
  }
}

console.log(paper.flat().filter((n) => n > 0).length);
