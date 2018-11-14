 
 function power(base: number, n: number){
  if(n === 0){
    return 1;
  }
  return base * power(base, n - 1);
 }

 console.log(power(10, 8));