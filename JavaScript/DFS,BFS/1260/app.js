const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, V] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

// 그래프 생성
for (let i = 1; i <= M; i++) {
  const [n1, n2] = input[i].split(' ').map(Number);
  graph[n1].push(n2);
  graph[n2].push(n1);
}

const bfs = (graph, N, V) => {
  const queue = [V];
  const visited = Array(N + 1).fill(false);
  visited[V] = true;
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    const needVisit = [...graph[node]].sort((a, b) => a - b);
    for (const next of needVisit) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
  return result;
};

console.log(bfs(graph, N, V));

const dfs = (graph, N, V) => {
  const visited = Array(N + 1).fill(false);
  const result = [];

  const dfsRecursive = (node) => {
    visited[node] = true;
    result.push(node);

    const nextNodes = [...graph[node]].sort((a, b) => a - b);
    for (const next of nextNodes) {
      if (!visited[next]) {
        dfsRecursive(next);
      }
    }
  };

  dfsRecursive(V);
  return result;
};

console.log(dfs(graph, N, V));
