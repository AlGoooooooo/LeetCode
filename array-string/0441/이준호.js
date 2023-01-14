/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let answer = 0;
  let count = 1;
  while (true) {
    n -= count
    if (n < 0) break
    count++, answer++
  }
  return answer
};