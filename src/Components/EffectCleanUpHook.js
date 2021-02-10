import React, { useState, useEffect} from 'react'

function EffectCleanUpHook() {

     const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const logMousePosition = e =>{
        console.log('mouse event')
        setx(e.clientX);
        sety(e.clientY)
    }
    useEffect(() => {
        console.log('effect called') 
        window.addEventListener('mousemove',logMousePosition)
        return () => {
            console.log ('unmouting the component')
            window.removeEventListener('mousemove',logMousePosition)
        }
    }, [])
    

    return (
        <div>
            X: {x}
            <br/>
            Y: {y}
        </div>
    )
}


export default EffectCleanUpHook
