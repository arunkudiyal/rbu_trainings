const posts = [
    { id: 1, name: 'Post 1', desc: 'Post 1 Desc.' },
    { id: 2, name: 'Post 2', desc: 'Post 2 Desc.' },
    { id: 3, name: 'Post 3', desc: 'Post 3 Desc.' },
    { id: 4, name: 'Post 4', desc: 'Post 4 Desc.' },
    { id: 5, name: 'Post 5', desc: 'Post 5 Desc.' }
]

const greet = () => {
    console.log('Welcome to Async JS')
}
// callback
// const getPosts = () => {
//     setTimeout(() => {
//         posts.forEach(post => console.log(post.name))
//     }, 2000)
// }
// Side Effect
const createPost = (post, callbackfn) => {      // 5 secs
    setTimeout(() => {
        posts.push(post)            // 3 secs
        callbackfn()                // 2 secs
    }, 6000)
}

// addEventListener('click', () => {})
createPost( {id: 6, name: 'Post 6', desc: 'Post 6 Desc.'}, () => {
    setTimeout(() => {
        posts.forEach(post => console.log(post.name))
    }, 2000)
} )
greet()