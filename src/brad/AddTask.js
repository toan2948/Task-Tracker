import React, { useState } from 'react'


const AddTask = ({ onAdd }) => {
    const [text, settext] = useState('')
    const [date, setdate] = useState('')
    const [reminder, setreminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        onAdd(text,date,reminder)
        settext('')
        setdate('')
        setreminder(false)
        }
    return (
        <form className="add-form" onSubmit ={onSubmit}>
            <h3>Add a new task:</h3>
            <div className="form-control">
                <label>Task</label>
                <input  type="text" name="" className="input" placeholder="new task ..."
                         onChange={(e) => settext(e.target.value) }/>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="text" name="" className="input" placeholder="date ..."
                        onChange={(e) => setdate(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input className="checkbox" type="checkbox"
                    onChange={(e) => setreminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Save" className="btn btn-block" style ={{background:'green'}}/>
            <input type="reset" className="btn btn-block" defaultValue="Reset" />  
        </form>
    )
}

export default AddTask

