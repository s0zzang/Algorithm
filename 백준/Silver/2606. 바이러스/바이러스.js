const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = input.shift();
const M = input.shift();

const graph = {};
for (let i = 1; i <= N; i++) graph[i] = [];
for (const line of input) {
  const [from, to] = line.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const visited = [];
let count = 0;

const dfs = (startV) => {
  visited[startV] = true;
  count++;
  for (const el of graph[startV]) {
    if (!visited[el]) {
      dfs(el);
    }
  }
};

dfs(1);
console.log(count - 1);
