import React, {useState} from 'react'

function StateObjectHook() {
    const [name, setname] = useState({firstname:'',lastname:''})
    return (
        <div>
            <form action="">
                {/* <input type="text" value ={name.firstname} onChange={e => setname({firstname: e.target.value})} />
                <input type="text" value ={name.lastname} onChange={e => setname({lastname: e.target.value})} /> */}
                {/* add spread operator '...' */}
                 <input type="text" value ={name.firstname} onChange={e => setname({...name,firstname: e.target.value})} />
                <input type="text" value ={name.lastname} onChange={e => setname({...name, lastname: e.target.value})} />
                firstname: {name.firstname}
                <br/>
                lastname: {name.lastname}
            </form>
        </div>
    )
}

export default StateObjectHook
