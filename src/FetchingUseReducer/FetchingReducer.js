import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState ={
    loading: true,
    error: '',
    post :{}
}
const reducer = (state,action) => {
    switch (action.type){
        case 'success': return {
            loading: false,
            error: '',
            post :action.payload
        }
        case 'failed': return {
            loading: false,
            error: 'something went wrong',
            post :{}
        }
        default: return state
    }
}


function FetchingReducer1() {
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then (res => {
                console.log(res)
                dispatch({type:'success',payload: res.data})
            })
            .catch (error=> {
                dispatch({type:'failed'})
            })
        },[])
    
   
    return (
        <div>
             {state.loading ? 'Loading...' :state.post.body} 
            {/* if loading is true, show 'loading', else show 'post.title' */}
            {state.error ? state.error :null}
        </div>
    )
}

export default FetchingReducer1
