const n = 20;

function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let divisiorCount = 0;

    for (let j = 1; j <= n; j++) {
      if (i % j === 0) {
        divisiorCount++;
      }
    }

    if (divisiorCount >= 3) {
      count++;
    }
  }
  return count;
}

console.log(solution(n));
