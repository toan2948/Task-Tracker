import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Fetching2() {
    const [post, setpost] = useState({})
    const [id, setid] = useState(1)
    useEffect(() => {
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(res=>
            {
                console.log(res)
                setpost(res.data)
            }
            )
         .catch( err =>{
             console.log(err)
         })
        
    },[id])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
            <p>{post.title}</p>
        </div>
    )
}

export default Fetching2
