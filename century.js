function century(year) {
  // Finish this :
  let firstTwo = ''
  let result
  for (let i = 0; i <= year.length; i++) {
    if (i == 0 || i == 1) {
      firstTwo += (year[i])
      result = Number(firstTwo)
    }
    if (i == 2 || i == 3) {
      if (year[i] > 0) {
        let res = parseInt(firstTwo, 10)
        result = result + 1

      }
    }
  }
  return result;
}

console.log(century('1705'))