import React from 'react'

const Todo = ({task}) => {
  return (
    <div>
        <h1>{task.act}</h1>
        <button>Delete</button>
        <button>{task.isDone?"undo":"complete"}</button>
    </div>
    
  )
}

export default Todo