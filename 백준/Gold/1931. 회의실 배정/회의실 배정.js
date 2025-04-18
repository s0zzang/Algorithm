const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [_, ...inputs] = input;
const times = inputs.map((input) => input.split(" ").map(Number));
times.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0]; // 시작 시간 오름차순
  return a[1] - b[1]; // 종료 시간 오름차순
});

let currentEndTime = 0;
let count = 0;

for (let time of times) {
  if (currentEndTime <= time[0]) {
    currentEndTime = time[1];
    count += 1;
  }
}
console.log(count);
