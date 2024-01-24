function addLength(str){
const splitted = str.split(" ")
const result = []
for(let i of splitted){
    result.push(`${i} ${i.length}`)
}
return result
}

console.log(addLength("Wetin dey happen here sef"))