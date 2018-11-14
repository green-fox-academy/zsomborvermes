
function counter(n: number) {
  if (n !== 0) {
    console.log(n);
    counter(n - 1);
  }
}


counter(100);