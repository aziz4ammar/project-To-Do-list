import React from 'react'

const Todo = ({task,del}) => {
  return (
    <div>
        <h1>{task.act}</h1>
        <button onClick={()=>del(task.id)}>Delete</button>
        <button>{task.isDone?"undo":"complete"}</button>
    </div>
    
  )
}

export default Todo