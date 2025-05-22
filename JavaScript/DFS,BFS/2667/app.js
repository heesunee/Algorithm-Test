const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

// const N = +input[0];
// const graph = input.slice(1).map((line) => line.split('').map(Number));

// // 방문 여부를 조사할 배열
// const visited = Array.from({ length: N }, () => Array(N).fill(false));
// const dx = [-1, 1, 0, 0];
// const dy = [0, 0, -1, 1];

// const dfs = (x, y) => {
//   visited[x][y] = true;
//   let count = 1;

//   for (let i = 0; i < 4; i++) {
//     const nx = x + dx[i];
//     const ny = y + dy[i];

//     if (
//       nx >= 0 &&
//       ny >= 0 &&
//       nx < N &&
//       ny < N &&
//       !visited[nx][ny] &&
//       graph[nx][ny] === 1
//     ) {
//       count += dfs(nx, ny);
//     }
//   }

//   return count;
// };

// let result = [];

// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < N; j++) {
//     if (!visited[i][j] && graph[i][j] === 1) {
//       const size = dfs(i, j);
//       result.push(size);
//     }
//   }
// }
// result.sort((a, b) => a - b);
// console.log(result.length);
// console.log(result.join('\n'));

// const N = +input[0];
// const graph = input.slice(1).map((line) => line.split('').map(Number));

// const visited = Array.from({ length: N }, () => Array(N).fill(false));
// const dx = [0, 0, -1, 1];
// const dy = [-1, 1, 0, 0];

// const bfs = (x, y) => {
//   const queue = [];
//   queue.push([x, y]);
//   visited[x][y] = true;
//   let count = 1;

//   while (queue.length > 0) {
//     const [cx, cy] = queue.shift();

//     for (let i = 0; i < 4; i++) {
//       const nx = cx + dx[i];
//       const ny = cy + dy[i];

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
//       const n = bfs(i, j);
//       result.push(n);
//     }
//   }
// }

// result.sort((a, b) => a - b);
// console.log(result.length);
// console.log(result.join('\n'));
