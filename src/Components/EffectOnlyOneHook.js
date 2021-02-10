import React, {useState,useEffect} from 'react'

function EffectOnlyOneHook() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const logMousePosition = e =>{
        console.log('mouse event')
        setx(e.clientX);
        sety(e.clientY)
    }
    useEffect(() => {
        console.log('effect called') //this log is called only one time
        window.addEventListener('mousemove',logMousePosition)
    }, [])// the [] helps that the console.log is called only one time
    

    return (
        <div>
            X: {x}
            <br/>
            Y: {y}
        </div>
    )
}

export default EffectOnlyOneHook
