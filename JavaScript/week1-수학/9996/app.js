const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const [prefix, suffix] = input[1].split('*');
const files = input.slice(2);
const result = files.map((file) => {
  if (
    file.length >= prefix.length + suffix.length && // 길이 체크
    file.startsWith(prefix) &&
    file.endsWith(suffix)
  ) {
    return 'DA';
  } else {
    return 'NE';
  }
});

console.log(result.join('\n'));
