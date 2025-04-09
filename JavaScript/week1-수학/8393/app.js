const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(num) {
  const arr = Array.from({ length: input }, (_, i) => i + 1);
  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  return sum;
}

console.log(solution(input));
