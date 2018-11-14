
function sumDigit(n: number): number {
  if (n === 0) {
    return 0;
  }
  return Math.floor(n % 10 + sumDigit(n / 10));
}

console.log(sumDigit(123));