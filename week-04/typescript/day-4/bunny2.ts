
function countEars(bunnies: number): number {
  if (bunnies === 1) {
    return 3;

  }
  if (bunnies % 2 === 0) {
    return 3 + countEars(bunnies - 1);

  }
  return 2 + countEars(bunnies - 1);

}

console.log(countEars(3));