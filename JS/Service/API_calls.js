
//http://localhost:8080/api/login
//http://jsonplaceholder.typicode.com/posts

//data to work with

let value = 'islogedIn';

const post = {
    title: value,
    body: 'true',
    userId: 1
}

//post data
const newPost = post => {
    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: new Headers({
            'Content-Type':'application/json'
        })
    }
    return fetch(`http://jsonplaceholder.typicode.com/posts`,options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.error(`Error: ${error}`))
}
newPost(post)

//requesting all data
function getPosts(id){
    fetch(`http://jsonplaceholder.typicode.com/posts/?userid=101`)
        .then(res => res.json())
        .then(posts => console.log(posts))
}