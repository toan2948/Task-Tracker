import React, {useState, useEffect} from 'react'

function EffectHook() {
    const [count, setcount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <button onClick={()=>setcount(prevcount => prevcount+1)}>Click {count}</button>
        </div>
    )
}

export default EffectHook
