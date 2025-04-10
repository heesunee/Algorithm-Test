const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const maxNum = 2 * Math.max(...input);

const array = new Array(maxNum + 1).fill(true);
array[0] = array[1] = false;

for (let i = 2; i * i <= maxNum; i++) {
  if (array[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      array[j] = false;
    }
  }
}

for (let i = 0; i < input.length - 1; i++) {
  const n = input[i];
  const max = n * 2;
  let count = 0;
  for (let i = n + 1; i <= max; i++) {
    if (array[i]) count++;
  }

  console.log(count);
}
