const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

const trucks = input.slice(1).map((line) => line.split(' ').map(Number));

const maxTime = Math.max(...trucks.flat());
const times = Array(maxTime).fill(0);

for (const [start, end] of trucks) {
  for (let i = start; i < end; i++) {
    times[i] += 1;
  }
}

let total = 0;
for (const t of times) {
  if (t === 1) total += A * t;
  else if (t === 2) total += B * t;
  else if (t === 3) total += C * t;
}

console.log(total);
