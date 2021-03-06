import React, { useState, useEffect} from 'react'
import './App.css';
import AddTask from './components/AddTask';
import Button from './components/Button';
import Header from "./components/Header.js";
import Task from './components/Task';


function App() {
  const name ='Tasks:'
  const [showTask, setshowTask] = useState(false)
  const showAddTask = () => {
    setshowTask(!showTask)
  }
  const [tasks, settasks] = useState([
    {
        id: 1,
        text: 'Goto Meeting',
        date: 'Feb 18th 2020',
        reminder: true
    },
    {
        id: 2,
        text: 'Üben in Park',
        date: 'Feb 23th 2020',
        reminder: true
    },
    {
        id: 3,
        text: 'read Fa',
        date: 'jeden Tag',
        reminder: true
    }
])




const deleteTask = (id) => {
  settasks(tasks.filter(task => task.id !== id))
}



const toggleReminder = (id) => {
  settasks(tasks.map(task => task.id ===id ? {...task, reminder: !task.reminder} : task))
}

const addTask = (text, date, reminder)=>{
  const newTask = {
    id: Math.random() *10,
    text,
    date,
    reminder
  }
  settasks([...tasks, newTask])
}



  return (
    <div className="container">
     <Header name ={name} />
     {tasks.length >0 ? <Task tasks = {tasks} onDelete = {deleteTask} onToggle ={toggleReminder} addTask ={addTask}/> : 'No task to show'}
     {showTask ? 
            <Button backgroundColor = "blue" text ="Add >>" onClick ={showAddTask} />
            :
            <Button backgroundColor = "red" text ="<< Close the Form" onClick ={showAddTask} />
            } 
      {console.log(tasks)}
      {!showTask ? <AddTask onAdd = {addTask}/> : ''}
    </div>

  );
}

export default App;
