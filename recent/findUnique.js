function findUniq(arr) {
    // do magic
  const temp = {}
  for (let item of arr){
    temp.hasOwnProperty(item)? temp[item]++ : temp[item] = 1
  }
for(let key in temp){
    if(temp[key]=== 1){
return Number(key)
    } 
}
  }

  console.log(findUniq([3,5,5,5,5,5,5,5,5,5,]))