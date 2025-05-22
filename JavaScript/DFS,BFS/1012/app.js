const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function createField(M, N, positions) {
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  positions.forEach(([x, y]) => {
    field[y][x] = 1;
  });
  return field;
}

function dfs(field, visited, x, y, M, N) {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < M &&
      ny >= 0 &&
      ny < N &&
      !visited[ny][nx] &&
      field[ny][nx] === 1
    ) {
      dfs(field, visited, nx, ny, M, N);
    }
  }
}

function solve(M, N, K, positions) {
  const field = createField(M, N, positions);
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  let count = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1 && !visited[y][x]) {
        dfs(field, visited, x, y, M, N);
        count++;
      }
    }
  }
  return count;
}

const T = +input[0];
let idx = 1;
for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(' ').map(Number);
  const positions = [];
  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(' ').map(Number);
    positions.push([x, y]);
  }
  const answer = solve(M, N, K, positions);
  console.log(answer);
}
