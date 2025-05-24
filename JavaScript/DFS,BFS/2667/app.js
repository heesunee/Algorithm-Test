const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];

const graph = Array.from({ length: N }, () => []);

for (let i = 1; i < N + 1; i++) {
  graph[i] = input[i].split('').map(Number);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const visited = Array.from({ length: N }, () => Array(N).fill(false));

const dfs = (x, y) => {
  visited[x][y] = true;
  let count = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      !visited[nx][ny] &&
      graph[nx][ny] === 1
    ) {
      count += dfs(nx, ny);
    }
  }

  return count;
};

let result = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && graph[i][j] === 1) {
      const size = dfs(i, j);
      result.push(size);
    }
  }
}

console.log(result.length); // 단지 수
console.log(result.sort((a, b) => a - b).join('\n'));

// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
//   .toString()
//   .trim()
//   .split('\n');

// const N = +input[0];

// const graph = input.slice(1).map((line) => line.split('').map(Number));

// const dx = [-1, 1, 0, 0];
// const dy = [0, 0, -1, 1];
// const visited = Array.from({ length: N }, () => Array(N).fill(false));

// const bfs = (x, y) => {
//   const queue = [[x, y]];
//   visited[x][y] = true;
//   let count = 1;

//   while (queue.length > 0) {
//     const [x, y] = queue.shift();

//     for (let i = 0; i < 4; i++) {
//       const nx = x + dx[i];
//       const ny = y + dy[i];

//       if (
//         nx >= 0 &&
//         ny >= 0 &&
//         nx < N &&
//         ny < N &&
//         !visited[nx][ny] &&
//         graph[nx][ny] === 1
//       ) {
//         visited[nx][ny] = true;
//         queue.push([nx, ny]);
//         count++;
//       }
//     }
//   }
//   return count;
// };

// let result = [];

// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < N; j++) {
//     if (!visited[i][j] && graph[i][j] === 1) {
//       result.push(bfs(i, j));
//     }
//   }
// }

// console.log(result.length);
// console.log(result.sort((a, b) => a - b).join('\n'));
