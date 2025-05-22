const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((line) => line.split('').map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && graph[nx][ny] === 1) {
        graph[nx][ny] = graph[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

bfs(0, 0);

console.log(graph[N - 1][M - 1]);
