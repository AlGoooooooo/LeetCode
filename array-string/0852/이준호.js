/**
 * @param {number[]} arr
 * @return {number}
 * i를 기준으로 왼쪽은 오름차순 오른쪽은 내림차순을 반환하는 i를 찾아내라
 * 배열은 무족권 산이다
 */
var peakIndexInMountainArray = function (arr) {
  let min = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < arr.length; i++) {
    if (min < arr[i]) {
      min = arr[i]
    } else {
      return i - 1
    }
  }
};

peakIndexInMountainArray([0, 10, 5, 2])

