const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

let idx = 0;

const result = [];
while (true) {
  const [M, N] = input[idx++].split(' ').map(Number);
  if (M === 0 && N === 0) break;

  const graph = [];
  for (let i = 0; i < N; i++) {
    graph.push(input[idx++].split(' ').map(Number));
  }

  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const dx = [0, 0, -1, 1, -1, -1, 1, 1];
  const dy = [-1, 1, 0, 0, -1, 1, -1, 1];

  const dfs = (x, y) => {
    visited[y][x] = true;

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < M &&
        ny < N &&
        graph[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        dfs(nx, ny);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && graph[i][j] === 1) {
        dfs(j, i);
        count++;
      }
    }
  }

  console.log(count);
}
