const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const delta = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const [M, N] = input.shift().split(" ").map(Number);
const boxes = input.map((line) => line.split(" ").map(Number));
const points = boxes.flatMap((line, x) =>
  line.map((n, y) => (n === 1 ? [x, y] : null)).filter(Boolean)
);
let count = 0;

// BFS - 토마토

const bfs = (points) => {
  const q = points;
  let head = 0;

  while (q.length > head) {
    const [x, y] = q[head];
    for (const [dx, dy] of delta) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (boxes[nx][ny] !== 0) continue;

      boxes[nx][ny] = boxes[x][y] + 1;
      count = boxes[x][y] + 1;
      q.push([nx, ny]);
    }
    head++;
  }
};

bfs(points);
const isFail = boxes.flatMap((line) => line.filter((n) => n === 0)).length;
console.log(isFail ? -1 : (count || 1) - 1);
