import React, {useEffect, useState} from 'react'
import axios from 'axios'

function FetchingUseState() {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [post,setpost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then (response => {
             console.log(response)
             setpost(response.data)
             setloading(false)
             seterror('')
         })
         .catch(error =>{
            setpost({})
            setloading(false)
            seterror('Something went wrong!')
         })
        
    }, [])
    return (
        <div>
            {loading ? 'Loading...' :post.title} 
            {/* if loading is true, show 'loading', else show 'post.title' */}
            {error ? error :null}
        </div>
    )
}

export default FetchingUseState
