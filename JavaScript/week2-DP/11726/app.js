const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : './input.txt')
  .toString();

function solution(n) {
  let dp = Array(input + 1).fill(0);

  dp[1] = 1;

  if (n >= 2) dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(solution(input));
