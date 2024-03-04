function reverseWords(str) {
    // Go for it
   const eachword = str.split(" ")
  const res = eachword.map(item => item.split("").reverse().join(""))
  return res.join(" ")
  }

  console.log(reverseWords("We that does not Waste time"))