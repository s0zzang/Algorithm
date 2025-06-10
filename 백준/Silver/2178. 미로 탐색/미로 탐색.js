const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const visited = Array(N)
  .fill()
  .map(() => Array(M).fill(false));
const delta = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const bfs = (x, y, d) => {
  const q = [[x, y, d]];
  visited[x][y] = true;
  while (q.length) {
    const [x, y, d] = q.shift();
    if (x === N - 1 && y === M - 1) return console.log(d);

    for (const [dx, dy] of delta) {
      const [nx, ny] = [dx + x, dy + y];
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        !visited[nx][ny] &&
        input[nx][ny] == 1
      ) {
        q.push([nx, ny, d + 1]);
        visited[nx][ny] = true;
      }
    }
  }
};

bfs(0, 0, 1);
