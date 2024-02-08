export function fixNames( names ) {
	//Insert your code here
	let splittedNames = names.join(",");
    let nam = splittedNames.split(" ")
    
	let result = ""
    
	// for(let name of splittedNames){
	// 	let splittedElem = name.split(" ");
    //     console.log(splittedElem)
	// 	let temp = ""
	// 	for(let i = 0; i < splittedElem.length -1; i++){
	// 		if(i == 0){
	// 			splittedElem[i].toUpperCase()
	// 		} else {
	// 			splittedElem[i].toLowerCase()
	// 		}
	// 		temp+= splittedElem[i]
	// 	}
	// 	result+= temp
	// }
	return result.trim()
}

console.log(fixNames(["Jmaes muler", "kings Olll"]))