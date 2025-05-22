const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, V] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const BFS = (graph, N, V) => {
  const queue = [V];
  const visited = Array(N + 1).fill(false);
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (visited[node]) continue;
    visited[node] = true;
    result.push(node);

    const needVisit = [...graph[node]].sort((a, b) => a - b);
    for (const next of needVisit) {
      if (!visited[next]) {
        queue.push(next);
      }
    }
  }

  return result;
};

const DFS = (graph, N, V) => {
  const stack = [V];
  const visited = Array(N + 1).fill(false);
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (visited[node]) continue;
    visited[node] = true;
    result.push(node);

    const needVisit = [...graph[node]].sort((a, b) => b - a);
    for (const next of needVisit) {
      if (!visited[next]) {
        stack.push(next);
      }
    }
  }

  return result;
};

console.log(DFS(graph, N, V).join(' '));
console.log(BFS(graph, N, V).join(' '));
