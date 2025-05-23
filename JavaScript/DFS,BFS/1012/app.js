const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
let idx = 1;

for (let i = 0; i < T; i++) {
  const [M, N, K] = input[idx++].split(' ').map(Number);

  const graph = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(' ').map(Number);
    graph[y][x] = 1;
  }

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const dfs = (x, y) => {
    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < M &&
        ny < N &&
        !visited[ny][nx] &&
        graph[ny][nx] === 1
      ) {
        dfs(nx, ny);
      }
    }
    return count;
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
