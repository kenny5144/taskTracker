import { useState } from 'react'
import './App.css'
import AddTasks from './components/AddTasks'
import DisplayTask from './components/DisplayTask'
import Footer from './components/Footer'

function App() {
const [task,setTask]=useState([])
console.log(task)
  return (
    <>
   <AddTasks setTask={setTask}/>
   <DisplayTask task={task}/>
    <Footer/>
    </>
  )
}

export default App
