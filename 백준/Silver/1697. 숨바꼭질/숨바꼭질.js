const fs = require("fs");
const [from, to] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

const move = (X) => [+X + 1, X - 1, X * 2];

// bfs로 풀기
if (from === to) return console.log(0);
const visited = new Set();

const bfs = (X, time) => {
  const q = [[X, time]];
  visited.add(X);

  while (q.length) {
    const current = q.shift();
    for (let next of move(current[0])) {
      let [_, time] = current;
      if (next === to) return console.log(time);
      if (next < 0 || next > 100000) continue;
      if (visited.has(next)) continue;
      q.push([next, ++time]);
      visited.add(next);
    }
  }
};

bfs(from, 1);
