// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByZero(num: number): void{
  try {
    if (num === 0){
      throw new Error("fail")
    }
    let result: number = 10 / num;
    console.log(result);
  } catch(e){
    console.log(e.message);
  }
}

divideByZero(0);
divideByZero(2);