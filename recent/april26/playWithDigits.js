function playWithDigits(n, p) {
  let sum = 0;
  const digits = n.toString().split('');
  for ( let i of digits) {
    sum += Math.pow(i, p);
    p++;
  }
  return sum % n === 0 ? sum / n : -1;
}

console.log(playWithDigits(89, 1));
console.log(playWithDigits(92, 1));
console.log(playWithDigits(695, 2));
console.log(playWithDigits(46288, 3));