// 조합은 [1, 2, 3, 4]에서 1번 탐색이 끝나면 그다음은
// 2, 3, 4 만 가지고 순회하지만
// 순열은 순서가 있기때문에 2를 고정값이면 다시 1,3,4를 가지고 검사해야한다.

const getPermutations = (arr, r) => {
  const result = [];

  if (r === 1) return arr.map((num) => [num]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, r - 1);

    const attached = permutations.map((i) => [fixed, ...i]);

    result.push(...attached);
  });
  return result;
};

let arr = [1, 2, 3];
const result = getPermutations(arr, 2);
console.log(result);
