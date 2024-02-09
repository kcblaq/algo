function accum(s) {
	// your code
  if(!(/^[a-zA-Z]+$/.test(s))) return s;
    let result = ''
  for(let i = 0; i < s.length; i++){
    let first = s[i].toUpperCase();

   let temp = first +=s[i].repeat(i)

    result+= s[i] == s[0] || s[i] == s.length -1 ? temp : `-${temp}`
  }
    return result
}

console.log(accum("Philadelphia"))