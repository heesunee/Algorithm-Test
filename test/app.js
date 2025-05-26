const n = 3;
const rolls = [2, 2, 3, 1, 2];

function solution(n, rolls) {
  const N = n + 1;
  const pattern = Array(n).fill(1);
  pattern.push(0);

  let max = 0;
  const dfs = (index, sum) => {
    if (max < sum) {
      max = sum;
    }

    if (index === rolls.length) return;

    const roll = rolls[index];
    const move = roll + sum;
    const check = move > N ? move % N : move;

    if (pattern[check - 1]) {
      dfs(index + 1, move);
      dfs(index + 1, 0);
    } else {
      dfs(index + 1, 0);
    }

    return max;
  };

  console.log(dfs(0, 0));
}

solution(n, rolls);
