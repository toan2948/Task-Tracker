import React, { useReducer } from 'react'

const initialState = {
    firstCounter:0,
    secondCounter:0

}

//Case: action is an object which has two properties named 'type' and 'value'
const reducer =(state,action) => {
    switch(action.type){
        // The spead operator is to keep the state of firstCounter and secondCounter during updates
        case 'increment': return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement': return {...state,firstCounter: state.firstCounter - action.value}
        case 'reset': return {...state, firstCounter: initialState.firstCounter}
        case 'increment2': return {...state,secondCounter: state.secondCounter + action.value}
        case 'decrement2': return {...state,secondCounter: state.secondCounter - action.value}
        case 'reset2': return {...state, secondCounter: initialState.secondCounter}
        default: return state
    }
}

function StateObjectActionObjectTwoCounter() {
    const [count, dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            count: {count.firstCounter}
            <p></p>
            <button onClick={()=> dispatch({type: 'increment', value: 2})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 2})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button> 

            <p>Second count: {count.secondCounter}</p>
            <button onClick={()=> dispatch({type: 'increment2', value: 2})}>Increment2</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 2})}>Decrement2</button>
            <button onClick={()=> dispatch({type: 'reset2'})}>Reset2</button> 
        </div>
    )
}


export default StateObjectActionObjectTwoCounter
