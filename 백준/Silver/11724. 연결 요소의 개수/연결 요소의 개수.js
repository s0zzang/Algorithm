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

const visited = Array(N + 1).fill(false);
let count = 0;
const bfs = (v) => {
  const q = [v];
  visited[v] = true;

  while (q.length) {
    const current = q.shift();
    for (const v of graph[current]) {
      if (!visited[v]) {
        q.push(v);
        visited[v] = true;
      }
    }
  }
};

for (el in graph) {
  if (!visited[el]) {
    count++;
    bfs(el);
  }
}

console.log(count);
