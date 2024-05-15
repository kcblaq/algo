function Tribonaci(signature, n){
    
    for(let i = 3; i < n; i++){
        let nextNum = (signature[i -1] + signature[i-2] + signature[i-3])
        if(signature.length < n){
            signature.push(nextNum)
        }
    }
    return signature
}


console.log(Tribonaci([2,3,4],6))