const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split('\n');

const numbers = input[1].split(' ').map(Number);
const maxNum = Math.max(...numbers);

const isPrime = new Array(maxNum + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= maxNum; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      isPrime[j] = false;
    }
  }
}

const result = numbers.reduce((acc, num) => acc + (isPrime[num] ? 1 : 0), 0);
console.log(result);
