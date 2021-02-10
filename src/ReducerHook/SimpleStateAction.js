import React, { useReducer } from 'react'

const initialState = 0
const reducer =(state,action) => {
    switch(action){
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return initialState
        default: return state
    }
}

function SimpleStateAction() {
    // useReducer returns the current state (in this case: count) and a dispatch method which accepts an action to execute
    //the code specified in the render function
    const [count, dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            count: {count}
            <p></p>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}

export default SimpleStateAction
