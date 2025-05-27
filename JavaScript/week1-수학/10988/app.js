const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('');

const middle = Math.ceil(input.length / 2);

let flag = 1;
for (let i = 0; i < middle; i++) {
  if (input[i] !== input[input.length - 1 - i]) {
    flag = 0;
  }
}

console.log(flag);
