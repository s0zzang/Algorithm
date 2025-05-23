const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
let [x, y, direction] = input.shift().split(" ").map(Number);
const room = input.map((i) => i.split(" ").map(Number));
let count = 0;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while (true) {
  if (room[x][y] == 0) {
    room[x][y] = 2;
    count++;
  }

  let cleaned = false;
  for (let i = 0; i < 4; i++) {
    direction = (direction + 3) % 4;
    const nx = x + dx[direction];
    const ny = y + dy[direction];

    if (room[nx][ny] === 0) {
      x = nx;
      y = ny;
      cleaned = true;
      break;
    }
  }

  if (!cleaned) {
    const back = (direction + 2) % 4;
    const bx = x + dx[back];
    const by = y + dy[back];

    if (room[bx][by] == 1) break;
    x = bx;
    y = by;
  }
}

console.log(count);