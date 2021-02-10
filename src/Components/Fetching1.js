import React, { useState, useEffect} from 'react'
import axios from 'axios'
function Fetching1() {
    const [posts, setposts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => {
             console.log(res)
             setposts(res.data) //this code will render all posts on the screen
         })
          .catch( err => {
              console.log(err)
          })
    },[])// this [] helps to have only one time fetching
    return (

        <div>
            {
                posts.map(post =>(<li key={post.id}>{post.title}</li>)
                    )
            }
        </div>
    )
}

export default Fetching1
