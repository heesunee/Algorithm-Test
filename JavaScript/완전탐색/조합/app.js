// 조합
// 서로다른 n개에서 r개를 뽑음
// getCombinations(arr, r)
// 순서가 없음. 순서 다른것도 같은 것으로 인식함

let arr = [1, 2, 3, 4];
// 기댓값
// 1, 2, 3
// 1, 2, 4
// 1, 3, 4
// 2, 3, 4

const getCombinations = (arr, selectNum) => {
  //result를 안에다가 선언해야 [[3], [4]]로 돌아가지 ..그리고 리셋되지

  const result = [];
  if (selectNum === 1) return arr.map((num) => [num]);
  arr.forEach((fixed, index) => {
    // 고정 숫자는 fixed, 0번째에는 1이다.
    // 이제 1과 조합할 2, 3, 4를 분리해아한다.
    const rest = arr.slice(index + 1);

    const combinations = getCombinations(rest, selectNum - 1);
    // 4) fixed와 나머지 조합 합치기
    const attached = combinations.map((combination) => [fixed, ...combination]);

    result.push(...attached);
  });
  return result;
};

console.log(getCombinations(arr, 3));
