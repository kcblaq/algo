function gimme (triplet) {
let max = triplet.map(item=> item !== Math.max(...triplet) && item !== Math.min(...triplet))
return max.indexOf(true)
}
