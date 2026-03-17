function breakCamelCase(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === char.toUpperCase()) {
      result.push(' ');
    }
    result.push(char);
  }
  return result.join('');
}

console.log(breakCamelCase('camelCaseTest'));