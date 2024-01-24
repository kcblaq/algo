function removeEveryOther(arr){
const result = []
for(let i = 0; i < arr.length; i++){
  i % 2 == 0 ? result.push(arr[i]) : null

}
return result
}

console.log(removeEveryOther(["obi", "ada", "Sunday", "Uka", "Valentine", "Tina"]))