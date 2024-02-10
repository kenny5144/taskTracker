import React, { useState } from "react";

const AddTasks = ({setTask}) => {
    const [newTask,setNewTask]=useState()
    const handleChange=(e)=>{
        console.log(e.target.value)
        setNewTask(e.target.value)
        
    }
    const handlebtn=()=>{
        setTask(
           prevTask=>[...prevTask,newTask]
        )
    }
  return (
    <div>
      <input onChange={handleChange}  type="text" />
      {console.log(newTask)}
      <button onClick={handlebtn}> Add Task</button>
    </div>
  );
};

export default AddTasks;
