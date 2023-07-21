// Print values in the console :-
console.log('This is a Log!')
console.warn('This is a warning!')
console.error('This is an error!')

// Data Types :- 
// 1. Primitive Data Types (PDTs) :-
// a. number
variable_one = 100000000.0000000
console.log(variable_one);
console.log(typeof(variable_one));
// 2. string - '' ; " "; ``
variable_one = `Welcome to JS`
console.log(variable_one);
console.log(typeof(variable_one));
// 3. boolean
variable_two = false
console.log(variable_two)
console.log(typeof(variable_two))
// 4. null
variable_three = null;
console.log(variable_three);
console.log(typeof(variable_three));        // object -> This is a mistake
// 5. undefined
variable_four = undefined
console.log(variable_four);
console.log(typeof(variable_four));

// Conditional Statements :-
demo = 10
if(demo >= 0) {
    console.log(demo + " is a +ve number")
} else {
    console.log(demo + " is a -ve number")
}

// ES6 Syntax 
// condition ? TRUE : FALSE
// Limitiation :- TRUE / FALSE statements one-liner statements
demo2 = -10
demo2 >= 0 ? console.log(`${demo2} is a +ve number`) : console.log(`${demo2} is a -ve number`)