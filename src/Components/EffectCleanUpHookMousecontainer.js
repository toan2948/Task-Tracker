import React,{ useState } from 'react'
import EffectCleanUpHook from './EffectCleanUpHook'

function EffectCleanUpHookMousecontainer() {
    const [display, setdisplay] = useState(true)
    // const toggleComponent =() =>{
    //     if (display){
    //         document.getElementById('getComp').innerHTML= <div><EffectCleanUpHook/></div>
    //     }}

    return (
        <div >
            <br/>
            <button onClick={()=> { setdisplay(!display)}}>Toogle Display</button>
            {display && <EffectCleanUpHook/>}
            
        </div>
    )
}

export default EffectCleanUpHookMousecontainer
