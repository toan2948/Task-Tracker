import React, {useState} from 'react'

function StateArrayHook() {
    const [items, setitems] = useState([])
    const addItem =()=>{
        setitems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10) +1 //randoms number form 1 to 10
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(item =>
                    <li key={item.id}>
                        {item.value}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default StateArrayHook
