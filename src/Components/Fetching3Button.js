import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Fetching3Button() {
    const [post, setpost] = useState({})
    const [id, setid] = useState(1)
    const [idButton, setidButton] = useState(1)
    const IdClick =() => {
        setidButton(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
         .then( res => {
             console.log(res)
             setpost(res.data)
         })
         .catch(err => {
             console.log(err)
         })
    }, [idButton])
    return (
        <div>
            <input type="text" value={id} onChange={e => setid(e.target.value)}/>
            <button onClick={IdClick}>Fetch Data</button>
            <p>{post.title}</p>

        </div>
    )
}

export default Fetching3Button
