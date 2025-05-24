// getAllPermutations 가능한 모든 순열을 찾기
// permute 함수의 역할
// arr 배열에서 숫자들을 하나씩 골라서 prefix에 붙여가며 모든 가능한 숫자 조합을 만들고
// 그 숫자들을 결과에 저장한다

// arr -> 남은 숫자 후보들
// prefix -> 지금까지 만든 숫자 조합(문자열 형태)

const getAllPermutations = (numbers) => {
  const result = new Set();

  const permute = (arr, prefix = '') => {
    if (prefix.length > 0) {
      // 지금까지 만든 조합을 결과에 추가
      result.add(Number(prefix));
    }

    for (let i = 0; i < arr.length; i++) {
      // fixed 제외한 나머지 숫자
      const next = [...arr.slice(0, i), ...arr.slice(i + 1)];

      // 고정 숫자 붙이고 재귀 호출
      permute(next, prefix + arr[i]);
    }
  };

  permute(numbers.map(String));
  return Array.from(result).sort((a, b) => a - b);
};

console.log(getAllPermutations([1, 7]));
