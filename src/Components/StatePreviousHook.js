import React, { useState} from 'react'

function StatePreviousHook() {
    const initialCount=0
    const [count, setcount] = useState(initialCount)

   /*  //only increase by 1, not 5
    const incrementFive =()=>{
        for(let i=0;i<5;i++){
            setcount(count+1)
        }
    } */
    const incrementFive = () =>{
        for(let i=0;i<5; i++){
            setcount(prevCount => prevCount +1) // pass a function as an argument for a function, not pass a value
        }
    }
    return (
        <div>
            count: {count}
            {/* <button onClick={()=>{setcount(initialCount)}}>Reset</button>
            <button onClick={()=>setcount(count + 1)}>Increment</button>
            <button onClick={()=>setcount(count -1)}>Decrement</button>
            <button onClick={()=>setcount(count + 5)}>Increment 5</button> */}
            <button onClick={incrementFive}>Increment 5</button>
            <button onClick={() =>setcount(prevCount => prevCount +1)}>Increment</button>
            <button onClick={() =>setcount(prevCount => prevCount -1)}>Decrement</button>
        </div>
    )
}

export default StatePreviousHook
