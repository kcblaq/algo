function ReversedText(words){
    let rev = words.split(" ")
    let temp = ""

    for(let word = rev.length -1; word >= 0; word--){
        temp += rev[word] + " "
    }
    console.log(words.length)
    return temp.trim();
}

console.log(ReversedText("We have it"))