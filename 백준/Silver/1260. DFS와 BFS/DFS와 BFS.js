const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const graph = {};
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}
for (const line of input) {
  const [from, to] = line.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
for (const node in graph) {
  graph[node].sort((a, b) => a - b);
}

const DFSvisited = {};
const DFSresult = [];
const dfs = (v) => {
  DFSvisited[v] = true;
  DFSresult.push(v);
  for (let el of graph[v]) if (!DFSvisited[el]) dfs(el);
};

dfs(V);
console.log(DFSresult.join(" "));

const BFSresult = [];
const bfs = (v) => {
  const visited = {};
  const queue = [v];
  visited[v] = true;
  BFSresult.push(v);

  while (queue.length) {
    const curV = queue.shift();
    for (const node of graph[curV]) {
      if (!visited[node]) {
        queue.push(node);
        visited[node] = true;
        BFSresult.push(node);
      }
    }
  }
};

bfs(V);
console.log(BFSresult.join(" "));
