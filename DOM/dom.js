// DOM -> Document  Object Model

console.dir(document)
console.log(document.URL)
console.log(document.all)

const myHeading = document.all[4];
document.all[4].textContent = "Welcome to DOM"
console.log(myHeading)