function sumTwoSmallestNumbers(numbers) {  
    //Code here
   let sorted = numbers.sort((a,b) => a-b)
   return sorted[0]  + sorted[1]
   
  }

  console.log(sumTwoSmallestNumbers([3,5,2,9]))