const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const delta = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 1],
  [1, 1],
  [1, -1],
  [-1, -1],
];

while (input.length) {
  const [N, M] = input.shift().split(" ").map(Number);
  if (N === 0 && M === 0) break;
  let count = 0;
  const map = [];
  for (let i = 0; i < M; i++) {
    map.push(input.shift().split(" ").map(Number));
  }
  const visited = Array(M)
    .fill()
    .map(() => Array(N).fill(false));

  const dfs = (x, y) => {
    visited[x][y] = true;
    for (const [dx, dy] of delta) {
      const [nx, ny] = [dx + x, dy + y];
      if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
      if (visited[nx][ny] || map[nx][ny] !== 1) continue;
      dfs(nx, ny);
    }
  };

  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      if (!visited[x][y] && map[x][y] === 1) {
        dfs(x, y);
        count++;
      }
    }
  }

  console.log(count);
}
