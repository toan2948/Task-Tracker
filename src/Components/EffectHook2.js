import React, {useState, useEffect} from 'react'

function EffectHook2() {
    const [count, setcount] = useState(0)
    const [name, setname] = useState('')

    /* // this will log also when 'name' is updated
    useEffect(() => {
        console.log('useEffect- Updating the Document title')
        document.title = `You clicked ${count} times`
    }) */


    useEffect(() => {
        console.log('useEffect- Updating the Document title')
        document.title = `You clicked ${count} times`
    },[count])
    return (

        <div>
            <input type="text" value={name} onChange={(e)=> setname(e.target.value)}/>
            <button onClick={()=>setcount(prevcount => prevcount+1)}>Click {count}</button>
        </div>
    )
}

export default EffectHook2
