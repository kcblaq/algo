function reverseList(list) {
  const result = [];
  const len = list.length;

  for (let i = len; i > 0; i--) {
    result.push(list[i - 1]);
  }

  return result;

}

console.log(reverseList([2,4,2,6,8,9]))