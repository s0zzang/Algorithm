const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [num, ...arrs] = input;
const [q, d, n, p] = [25, 10, 5, 1];

for (let i = 0; i < num; i++) {
  let sum = arrs[i];
  let [qq, dd, cc, pp] = [0, 0, 0, 0];
  while (sum >= q) {
    sum -= q;
    qq++;
  }
  while (sum >= d) {
    sum -= d;
    dd++;
  }
  while (sum >= n) {
    sum -= n;
    cc++;
  }
  while (sum >= p) {
    sum -= p;
    pp++;
  }
  console.log(qq, dd, cc, pp);
}