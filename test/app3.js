const arr = [1, 3, 2, 4, 6, 5];
const k = 2; // 책장을 2개로 나누면, w = 3

function minTotalBookshelfHeight(arr, k) {
  const w = arr.length / k; // 한 책장에 들어갈 책 수
  let totalHeight = 0;

  for (let i = 0; i < arr.length; i += w) {
    // w만큼 자른 구간에서 최대값 계산
    let maxHeight = 0;
    for (let j = i; j < i + w; j++) {
      maxHeight = Math.max(maxHeight, arr[j]);
    }
    totalHeight += maxHeight;
  }

  return totalHeight;
}

console.log(minTotalBookshelfHeight(arr, k)); // 출력: 10 (3 + 6)
