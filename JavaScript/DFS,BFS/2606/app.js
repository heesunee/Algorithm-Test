const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const COM = +input[0];
const v = +input[1];

const graph = Array.from({ length: COM + 1 }, () => []);

for (let i = 2; i < COM + 1; i++) {
  const [n1, n2] = input[i].split(' ').map(Number);
  graph[n1].push(n2);
  graph[n2].push(n1);
}

const bfs = (start) => {
  const visited = Array(COM + 1).fill(false);
  const queue = [start];
  visited[start] = true;
  let count = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
        count++;
      }
    }
  }

  return count;
};

console.log(bfs(1));
