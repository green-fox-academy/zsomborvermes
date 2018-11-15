

function countBunnies(bunnies: number): number {
  if (bunnies === 1) {
    return 2;
  }
  return countBunnies(1) + countBunnies(bunnies - 1);
}

console.log(countBunnies(400));


