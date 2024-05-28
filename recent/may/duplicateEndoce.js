function duplicateEncode(word){
    // ...
    let result = ''
    let newword = word.toLowerCase()
    for(let item of newword){
        
      let len =  newword.split('').filter((i)=> i === item ).length 
      console.log(len)
      if(len > 1){
        result+= ')'
      } else {
        result+= '('
      }
    }
  
    return result;
}


console.log(duplicateEncode('miSsed'))