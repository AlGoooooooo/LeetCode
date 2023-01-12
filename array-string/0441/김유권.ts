const arrangeCoins = (n: number): number => {
  let _sum: number = 0;
  let _answer: number = 0;

  while (_sum <= n) {
    _sum += _answer + 1;
    _answer += 1;
  }

  return _answer - 1;
};
