const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString();

[...Array(input)].forEach((_, i) => console.log(i + 1));
