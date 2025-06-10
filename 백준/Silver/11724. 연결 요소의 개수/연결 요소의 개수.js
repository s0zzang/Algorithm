const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const graph = {};
for (let i = 1; i <= N; i++) graph[i] = [];
for (const line of input) {
  const [from, to] = line.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
for (line in graph) graph[line].sort((a, b) => a - b);

const visited = [];
let count = 0;
const dfs = (startV) => {
  visited[startV] = true;
  for (const el of graph[startV]) {
    if (!visited[el]) dfs(el);
  }
};

for (el in graph) {
  if (!visited[el]) {
    count++;
    dfs(el);
  }
}

console.log(count);
