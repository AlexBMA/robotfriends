export const getRobots = (url)=>
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
