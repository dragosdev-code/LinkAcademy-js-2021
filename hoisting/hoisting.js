// functioneaza pentru ca x este "hoisted"
x = 10

// eroare pentru ca y nu este "hoisted"
// y = 20


console.log(x)

// eroare pentru ca z nu este "hoisted"
// console.log(z)

test()

// eroare deoarece clasa Hello nu e "hoisted"
// var w = new Hello()

// declaratia variabilei este ridicata la inceput
// (hoisted)
var x
let y
const z = 3

function test() {
    console.log('test')
}
// var test = function() {
//     console.log('test')
// }

class Hello {
    message
}