

function createMultiplier(multiplier) {
   
    return function(number) {
      return number * multiplier;
    };
  }
  
  
  const multiplyBy5 = createMultiplier(5); 
  console.log(multiplyBy5(5));  //25
  
  const multiplyBy10 = createMultiplier(10);
  console.log(multiplyBy10(10));    //100
  