const array = [1, 2, 3,[4,5], 7,[6,7,[8,9]]]
another_array = array.flat(Infinity)
console.log(another_array)

console.log(Array.from("tushar"))
console.log(Array.from({name : "tushar"}))//question ask in interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))