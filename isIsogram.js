function isIsogram(str){
    //...
    let temp = []
    let splitted = str.split("");

  for(let item of splitted){
    item.toUpperCase()
    if(temp.includes(item.toUpperCase())){
      return false
    }  else {
      temp.push(item.toUpperCase())
    }
  }
return true
  }

  console.log(isIsogram("itoma"))