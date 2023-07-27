// Aysynchronous JavaScript And XML
// AJAX :- A technique to integrate an API to a FE application

// Step1 - Create an object of XMLHttpRequest()
const xhr = new XMLHttpRequest();
const url = `https://api.github.com/users`
console.log(`First readyState -> ${xhr.readyState}`)
// Step2 - Open the portal of communication b/w client & server
xhr.open('GET', url)
console.log(`Second readyState -> ${xhr.readyState}`)
// readyState = 1
// StepX - Set your request headers -> setRequestHeaders
// Step3 - Perform an action over request state change
xhr.onreadystatechange = () => {
    console.log(`Remaining readyState -> ${xhr.readyState}`)
    // readyState = 2 -> 3 -> 4
    if(xhr.readyState == 4 && xhr.status == 200) {
        // I will get the response from the server -> responseText
        const jsonRes = xhr.responseText
        const res = JSON.parse(jsonRes)
        console.log(res)
    }
}
xhr.send()