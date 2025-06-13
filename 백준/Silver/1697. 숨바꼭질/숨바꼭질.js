const fs = require("fs");
const [from, to] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

const move = (X) => [+X + 1, X - 1, X * 2];
const totalTime = Array(100001).fill(0);

// bfs로 풀기
if (from === to) return console.log(0);
const visited = new Set();

const bfs = (X) => {
  const q = [X];
  visited.add(X);

  while (q.length) {
    const current = q.shift();
    if (current === to) return totalTime[current];

    for (let next of move(current)) {
      if (next < 0 || next > 100000) continue;
      if (visited.has(next)) continue;
      q.push(next);
      visited.add(next);
      totalTime[next] = totalTime[current] + 1;
    }
  }
};

console.log(bfs(from));
