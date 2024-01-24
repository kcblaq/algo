function isPalindrome(x) {
const temp = x.split("")
let n = ""
for(let i = temp.length -1; i >= 0; i--) {
   n += temp[i].trim()
}
if(n == x){
    return true;
} else {
    return false;
}
  }

  console.log(isPalindrome("racecar"));