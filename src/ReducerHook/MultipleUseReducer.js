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

function MultipleUseReducer() {
    // useReducer returns the current state (here is count) and a dispatch method which accepts an action to execute
    //the code specified in the render function
    const [count, dispatch] = useReducer(reducer,initialState)
    const [count2, dispatch2] = useReducer(reducer,initialState)

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>

            <p>count: {count2}</p>
            <button onClick={()=> dispatch2('increment')}>Increment</button>
            <button onClick={() => dispatch2('decrement')}>Decrement</button>
            <button onClick={()=> dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default MultipleUseReducer
