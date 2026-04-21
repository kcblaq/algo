function diamond(n){
    if (n < 0 || n % 2 === 0) return null;
    let result = '';
    for (let i = 1; i <= n; i += 2) {
        result += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';   

    }

    return result;
}

console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(2))