function printerError(s) {
    const sample = ["a","b","c","d","e","f","g","h","i","j","k","l","m"]
    const inputLength = s.length;
    let count = 0;
    for(item of s){
        if(!sample.includes(item)){
            count+= 1
        }
    }
    return `${count}/${inputLength}`
}

console.log(printerError("xyzeeeen"))