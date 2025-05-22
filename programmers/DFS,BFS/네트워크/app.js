const n = 3;
const compouters = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

function solution(n, compouters) {
  const visited = Array(n).fill(false);
  let count = 0;

  // const DFS = (start) => {
  //   visited[start] = true;

  //   for (let i = 0; i < n; i++) {
  //     if (compouters[start][i] === 1 && !visited[i]) {
  //       DFS(i);
  //     }
  //   }
  // };

  const BFS = (start) => {
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();

      for (let i = 0; i < n; i++) {
        if (compouters[node][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      BFS(i);
      count++;
    }
  }
  return count;
}

console.log(solution(n, compouters));
