function stray(numbers) {
  let temp = [];
  let result = 0;

  temp.push(numbers[0]);

  if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {
      for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] !== numbers[i + 1]) {
              result = numbers[i + 1];
              break;
          }
      } 
  }  else if(numbers[0] == numbers[1]){
    result = numbers[2]
  } else if(numbers[1] == numbers[2]){
    result = numbers[0]
  } else if(numbers[0] == numbers[2]){
    result = numbers[1]
  }
  return result;
}


console.log(stray([2,2,2,2,2,2,90]))