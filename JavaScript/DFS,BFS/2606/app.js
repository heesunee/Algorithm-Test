const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const COM = +input[0];
const V = +input[1];

const graph = Array.from({ length: COM + 1 }, () => []);

for (let i = 2; i <= COM; i++) {
  const [n1, n2] = input[i].split(' ').map(Number);
  graph[n1].push(n2);
  graph[n2].push(n1);
}

const bfs = (start) => {
  const queue = [start];
  const visited = Array(COM + 1).fill(false);
  let count = 0;
  visited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    const nodeVisit = [...graph[node]].sort((a, b) => a - b);

    for (const next of nodeVisit) {
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
