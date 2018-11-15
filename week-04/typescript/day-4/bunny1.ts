

function countBunnyEars(bunnies: number): number {
  if (bunnies === 1) {
    return 2;
  }
  return countBunnyEars(1) + countBunnyEars(bunnies - 1);
}

console.log(countBunnyEars(400));


