// ES5
// let functionName = function(params) { functionBody }
const add = (a , b) => {
    if(typeof(a) == 'number' && typeof(b) == 'number') {
        return a + b;
    } else {
        return `${a} or ${b} is not a number type!`
    } 
}
console.log( add(20, 30) )
console.log( add("Hello", null) )               // Hellonull

// ES6 :- let variable = [], {}, [{}, {}]
// Array - []; Objects - {}, AoO - [{},{}]
// const greeting = (fName, lName) => {
//     console.log(100/0)
//     console.log( 'String' + 100 )       // String100
//     console.log( 'String' - 100 )       // NaN
//     console.log( 'String' * 100 )       // NaN
//     console.log( 'String' / 100 )       // NaN
//     console.log( 'String' - "Another" ) // NaN
//     console.log(100 + true)             // 101
//     console.log("String" + true)        // Stringtrue
//     console.log("String" - true)        // NaN
//     console.log("String" * true)        // NaN
//     console.log("String" / true)        // NaN
//     return `Hello ${fName} ${lName}`
// }
// console.log( greeting('Arun', 'Kudiyal') )

// console.log(typeof(greeting))