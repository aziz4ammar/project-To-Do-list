import React from 'react'

const Todo = ({task,del,com}) => {
  return (
    <div className={task.isDone?"complete":""}>
        <h1>{task.act}</h1>
        <button onClick={()=>del(task.id)}>Delete</button>
        <button onClick={()=>com(task.id)}>{task.isDone?"undo":"complete"}</button>
    </div>
    
  )
}

export default Todo