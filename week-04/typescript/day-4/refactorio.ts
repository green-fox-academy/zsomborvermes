
function refactorio(num: number): number {
  if (num == 1) {
    return 1;

  } else {
    return num * (refactorio(num - 1));
    
  }
}

console.log(refactorio(5));