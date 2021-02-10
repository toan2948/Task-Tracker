import React, {  } from 'react'
import { TaskComponent } from './TaskComponent'


const Task =({tasks, onDelete, onToggle}) =>{   

    return (
        <div >  
            {tasks.map(task => <TaskComponent key = {task.id} task = {task} onDelete ={onDelete} onToggle ={onToggle}/> )}
        </div>
    )
}
export default Task
