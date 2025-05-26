// W라는 특정 단어를 기록으로 부터 찾고있음
// 문자열 S가 주어졌을 때 단어 W가 S에 들어있을 수 있는 모든 수를 계산 하는 프로그램
// 문자열 S안에서 문자열 W의 순열중 하나가 부분 문자열로 들어있는
// 모든 경우의 수

// g = W의 길이, l = S의 길이
// w = cAda
// s = AbrAcadAbRa
// 순열을 구해라

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const k = +input[1];
const card = input.slice(2);

// ✅ 카드 인덱스를 이용해 중복된 값을 가진 카드도 구분
const visited = Array(n).fill(false);
const result = new Set();

const dfs = (path, depth) => {
  if (depth === k) {
    result.add(path.join(''));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...path, card[i]], depth + 1);
      visited[i] = false;
    }
  }
};

dfs([], 0);
console.log(result.size);
