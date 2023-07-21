// // Print values in the console :-
// console.log('This is a Log!')
// console.warn('This is a warning!')
// console.error('This is an error!')

// // Data Types :- 
// // 1. Primitive Data Types (PDTs) :-
// // a. number
// variable_one = 100000000.0000000
// console.log(variable_one);
// console.log(typeof(variable_one));
// // 2. string - '' ; " "; ``
// variable_one = `Welcome to JS`
// console.log(variable_one);
// console.log(typeof(variable_one));
// // 3. boolean
// variable_two = false
// console.log(variable_two)
// console.log(typeof(variable_two))
// // 4. null
// variable_three = null;
// console.log(variable_three);
// console.log(typeof(variable_three));        // object -> This is a mistake
// // 5. undefined
// variable_four = undefined
// console.log(variable_four);
// console.log(typeof(variable_four));

// // Conditional Statements :-
// demo = 10
// if(demo >= 0) {
//     console.log(demo + " is a +ve number")
// } else {
//     console.log(demo + " is a -ve number")
// }

// // ES6 Syntax 
// // condition ? TRUE : FALSE
// // Limitiation :- TRUE / FALSE statements one-liner statements
// demo2 = -10
// demo2 >= 0 ? console.log(`${demo2} is a +ve number`) : console.log(`${demo2} is a -ve number`)

// // let, var, const
// flag = true
// if(flag) {
//     let a
//     var b
//     a = 100
//     b = 200
//     const c = 300;
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(`The value of a inside if-block is ${a}`)
// } else {
//     b = 200
// }

// console.log(c)

// LOOPS :-
// a.) for-loop :-
// for(let i=0; i < 5; i+=2) {
//     console.log(i)
// }
// let i=0
// while(i < 5) {
//     console.log(i)
//     i += 1
// }

// Non-Primitive Data Types (Non-PDTs)
// a.) Arrays
// Contiguous | [ ]
let numbers = [10, 20, 30, 40, 50]
let arr = [];
let arrObj = new Array(10);

console.log(typeof(numbers))
console.log(typeof(arr))
console.log(typeof(arrObj))

// for(let i=0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

console.log(numbers)

// Array Methods
numbers.push(60)
console.log(numbers)

let myArr1 = [100, 200, 300, 400, 500]
// let myArr2 = myArr1                             // THIS IS NOT A COPY MECH.
// Array Spread Operators
let myArr2 = [ ...myArr1 ]
myArr1.push(-10)
myArr2.push(1000)
console.log(myArr1)                             // [100, 200, 300, 400, 500, -10]
console.log(myArr2)                             // [100, 200, 300, 400, 500, 1000]

// pop()
myArr1.pop()
console.log(myArr1)

let deletedElement = myArr1.shift()
console.log(myArr1)

let newLength = myArr1.unshift(50);
console.log(newLength)                          // 5
console.log(myArr1)

let num1 = [10, 20, 30, 40]
let num2 = [100, 200, 300, 400, 500]
let combinedArray = num2.concat(num1);
console.log(combinedArray)                      // 

let dummyArray = [10, "String", true, null, undefined, []]
console.log(dummyArray)
