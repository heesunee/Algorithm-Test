// 최소거리니까 DFS
// 1,1에서 출발해서 N,M의 위치
// 배열은 0부터니까 4,6이면 [3,5]위치로 올때 끝내야함
// 이전거리에서 +1해서 값을 구하기

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((line) => line.split('').map(Number));
const visited = Array.from({ length: M }, () => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (n, m) => {
  const queue = [[n, m]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < M &&
        !visited[nx][ny] &&
        graph[nx][ny] === 1
      ) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

bfs(0, 0);
console.log(graph[N - 1][M - 1]);
