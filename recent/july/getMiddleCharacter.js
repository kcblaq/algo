function getMiddleCharacter(s) {
    //Code goes here!
   let len = s.length
   let mid = Math.floor(len/2)
   if(len % 2 === 0){
    return s.slice(mid -1, mid + 1)
   } else {
    return s[mid]
   }
}

console.log(getMiddleCharacter("Justice"))