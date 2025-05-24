let arr = [1, 2, 3];
/*
부분집합
[]
[1] [2] [3]
[1,2] [1,3]
[2,3]
[1,2,3]
2의 3제곱 개수
*/

let result = [];

for (let i = 1; i < 1 << arr.length; i++) {
  // 현재 부분집합을 담을 그릇릇
  result.push([]);

  for (let j = 0; j < arr.length; j++) {
    // 1<<j : j번째 비트를 1로 만든숫자
    // 000에 대해 001 010 100을 해야 거기에 해당하는 숫자를 집어넣으니까까
    if (i & (1 << j)) result[i - 1].push(arr[j]);
  }
}
console.log(result);
