const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((line) => line.split("").map(Number));

const delta = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const bfs = (x, y) => {
  const q = [[x, y]];

  while (q.length) {
    const [x, y] = q.shift();
    if (x === N - 1 && y === M - 1) return console.log(maze[x][y]);

    for (const [dx, dy] of delta) {
      const [nx, ny] = [dx + x, dy + y];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (maze[nx][ny] !== 1) continue;

      q.push([nx, ny]);
      maze[nx][ny] = maze[x][y] + 1;
    }
  }
};

bfs(0, 0);
