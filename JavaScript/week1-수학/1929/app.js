const [M, N] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// Array.from({ length: N - M + 1 }, (_, i) => M + i)
//   .filter(isPrime)
//   .forEach((num) => console.log(num));

for (let i = M; i <= N; i++) {
  if (isPrime(i)) console.log(i);
}
