const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const map = input.slice(1).map((line) => line.split('').map(Number));

const queue = [[0, 0]];

while (queue.length > 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < M && ny < N && map[ny][nx] === 1) {
      map[ny][nx] = map[y][x] + 1;
      queue.push([nx, ny]);
    }
  }
}

console.log(map[N - 1][M - 1]);
