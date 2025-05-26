const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

const total = input.reduce((sum, val) => sum + val, 0);
const target = total - 100;
let a = -1,
  b = -1;

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === target) {
      a = i;
      b = j;
      break;
    }
  }
  if (a !== -1) break;
}

const result = input.filter((_, idx) => idx !== a && idx !== b);

console.log(result.join('\n'));
