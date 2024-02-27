var number=function(array){
    //your awesome code here
    const result = [];
    for(let i = 0; i < array.length; i++){
        result.push(`${i+1}: ${array[i]}`)
    }
    return (
      result
    )
    
  }

  console.log(number(['a','e','d','l']))