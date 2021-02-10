import React, { useReducer } from 'react'

const initialState = {
    firstCounter:0
}

/* //in case, action is not an object
const reducer =(state,action) => {
    switch(action){
        case 'increment': return {firstCounter: state.firstCounter + 1}
        case 'decrement': return {firstCounter: state.firstCounter - 1}
        case 'reset': return initialState
        default: return state
    }
} */

/* Case: action is an object which has one property named 'type'
 const reducer =(state,action) => {
    switch(action.type){
        case 'increment': return {firstCounter: state.firstCounter + 1}
        case 'decrement': return {firstCounter: state.firstCounter - 1}
        case 'reset': return initialState
        default: return state
    }
} */

//Case: action is an object which has two properties named 'type' and 'value'
const reducer =(state,action) => {
    switch(action.type){
        case 'increment': return {firstCounter: state.firstCounter + action.value}
        case 'decrement': return {firstCounter: state.firstCounter - action.value}
        case 'reset': return initialState
        default: return state
    }
}

function StateObjectActionObject() {
    const [count, dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            count: {count.firstCounter}
            <p></p>

           {/* without adding a property'type' for the action, it still works
             <button onClick={()=> dispatch( 'increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch( 'reset')}>Reset</button> */}

          {/*   <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button> */}
            <button onClick={()=> dispatch({type: 'increment', value: 2})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 2})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button> 
       
        </div>
    )
}


export default StateObjectActionObject
