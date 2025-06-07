const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const M = +input[1];
const materials = input.slice(2).toString().split(' ').map(Number);

let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    if (i !== j && materials[i] + materials[j] === M) {
      result++;
    }
  }
}

console.log(result);
