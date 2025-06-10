const fs = require("fs");
const [T, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const delta = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

for (let i = 0; i < T; i++) {
  const [M, N, K] = input.shift().split(" ").map(Number);
  const field = Array(M)
    .fill()
    .map(() => Array(N).fill(0));
  const visited = Array(M)
    .fill()
    .map(() => Array(M).fill(false));

  for (let j = 0; j < K; j++) {
    const [x, y] = input.shift().split(" ").map(Number);
    field[x][y] = 1;
  }

  const bfs = (field, x, y) => {
    const q = [[x, y]];
    visited[x][y] = true;

    while (q.length) {
      const [x, y] = q.shift();
      for (const [dx, dy] of delta) {
        const [nx, ny] = [dx + x, dy + y];
        if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
        if (visited[nx][ny] || field[nx][ny] !== 1) continue;

        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  };

  let count = 0;
  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      if (!visited[x][y] && field[x][y] === 1) {
        bfs(field, x, y);
        count++;
      }
    }
  }

  console.log(count);
}
