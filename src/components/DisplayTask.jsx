import React from 'react'

const DisplayTask = ({task}) => {
    console.log(task)
  return (
    <div>
      {task.map((tasks,id)=>{
        return  <h1 className='disTask' key={id}>{tasks}</h1>
      })}
    </div>
  )
}

export default DisplayTask