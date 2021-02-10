import React, {useState} from 'react'

function StateHook() {
    const [count, setcount] = useState(0)
    return (
        <div>
            {/* function call is implemented inside an arrow function */}
            <button onClick={() => setcount(count +1)}> Hook {count} times</button>
        </div>
    )
}

export default StateHook
