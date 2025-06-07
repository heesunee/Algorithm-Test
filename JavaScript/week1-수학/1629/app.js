const [A, B, C] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// Math.pow(A,B)가 너무 큰 수를 반환하기 때문에 오답.
// A의 B제곱을 직접 계산하지 않고 효율적으로 A의 B제곱을 C로 나눈 나머지로 구하는 것이 핵심

const pow = (a, b, c) => {
  if (b === 0) return 1;
  let half = pow(a, Math.floor(b / 2), c);
  let result = (half * half) % c;
  if (b % 2 === 1) {
    result = (result * a) % C;
  }
  return result;
};

console.log(pow(A, B, C));
