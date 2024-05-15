function roundToNext5(n){
  let result = n;
  while (result % 5 !== 0){
    result++;
  }
  result
  return result;
  }

  console.log(roundToNext5(21));