import React, {  } from 'react'
import { TaskComponent } from './TaskComponent'

// const Tasks = [
//     {
//         id: 1,
//         text: 'Goto Meeting'
//     },
//     {
//         id: 2,
//         text: 'Üben in Park'
//     },
//     {
//         id: 3,
//         text: 'read Fa'
//     }
// ]
const Task =({tasks, onDelete, onToggle}) =>{   
// const [tasks, settasks] = useState([
//         {
//             id: 1,
//             text: 'Goto Meeting'
//         },
//         {
//             id: 2,
//             text: 'Üben in Park'
//         },
//         {
//             id: 3,
//             text: 'read Fa'
//         }
//     ])
    return (
        <div >
            {/* with Tasks is an object which is outside of 'task' function (still inside this component) as above */}
            {/* {Tasks.forEach(task => console.log(task.id))} */}
            {/* {Tasks.map(task => (<h3 key={task.id}>{task.text}</h3>))} */}

            {/* with the state 'task' inside this component
            {tasks.map(task => (<h3 key={task.id}>{task.text}</h3>))} */}
            
            {/* without server: {tasks.map(task => <TaskComponent key = {task.id} task = {task} onDelete ={onDelete} onToggle ={onToggle}/> )} */}
            {tasks.map((task, id) => <TaskComponent key = {id} task = {task} onDelete ={onDelete} onToggle ={onToggle}/> )}

        </div>
    )
}

export default Task
