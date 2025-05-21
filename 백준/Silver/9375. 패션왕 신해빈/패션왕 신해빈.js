const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = input.shift();
let M = 0;

const getCount = (map) => {
  let count = 1;
  for (let [_, x] of map) count *= x + 1;
  return count;
};

Array.from({ length: N }).map((_) => {
  const length = +input[M];
  const list = input.slice(M + 1, M + length + 1);
  const map = new Map();

  list.map((s) => {
    const [_, category] = s.split(" ");
    map.set(category, (map.get(category) || 0) + 1);
  });

  console.log(getCount(map) - 1);
  M += length + 1;
});
