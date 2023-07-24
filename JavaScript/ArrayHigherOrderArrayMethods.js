const employees = [
    {id: 10021, name: 'Employee 1', designation: 'IT', start: 1987, end: 2022},
    {id: 10022, name: 'Employee 2', designation: 'Sales', start: 2010, end: 2012},
    {id: 10023, name: 'Employee 3', designation: 'HR', start: 1999, end: 2017},
    {id: 10024, name: 'Employee 4', designation: 'Technical', start: 1981, end: 2018},
    {id: 10025, name: 'Employee 5', designation: 'IT', start: 2000, end: 2005},
    {id: 10026, name: 'Employee 6', designation: 'IT', start: 1997, end: 2008},
    {id: 10027, name: 'Employee 7', designation: 'Technical', start: 1999, end: 2009},
    {id: 10028, name: 'Employee 8', designation: 'HR', start: 1991, end: 2004},
    {id: 10029, name: 'Employee 9', designation: 'Sales', start: 1993, end: 2013},
    {id: 10030, name: 'Employee 10', designation: 'HR', start: 1986, end: 2020},
    {id: 10031, name: 'Employee 11', designation: 'Sales', start: 1980, end: 2009}
]
const demoArr = [1, 2, 3, 4, 5, 6, 7]
const ages = [65, 42, 16, 10, 5, 43, 74, 45, 55, 76, 81, 11, 14, 12, 9];
// Higher Order Array Methods
// arrayName.methodName

// 1. forEach() -> Performs the specified action for each element in an array.
// employees.forEach( (iteratingValue, index) => { console.log(iteratingValue) } )
// ages.forEach( (age) => {console.log(age)} )
// ages.forEach( (age, index, array) => console.log(index, age, array) )
// ages.forEach( age => console.log(age - 5) )

// 2. map() -> Calls a defined callback function on each element of an array, and returns an array that contains the results.
const employeeNames = employees.map( employee =>  employee.id)
console.log(employeeNames)

// 3. filter() -> Returns the elements of an array that meet the condition specified in a callback function.
const empNames = employees.filter( employee => employee.end - employee.start >= 10 ).map(emp => emp.name)
console.log(empNames)

const empIDs = employees.filter(emp => emp.designation == 'IT' || emp.designation == 'HR' && emp.end - emp.start >= 6).map(emp => emp.id).sort((a, b) => b - a)
console.log(empIDs)

// 4. sort() -> Sorts an array in place. This method mutates the array and returns a reference to the same array.
// firstV - secondV --> ASCENDING ORDER
// secondV - firstV --> DESCENDING ORDER
console.log(ages)
ages.sort( (a, b) => b - a )
console.log(ages)

// 5. reduce()
const sum = demoArr.reduce( (number, initialSum) => {return number * initialSum}, 1 )
console.log(sum)