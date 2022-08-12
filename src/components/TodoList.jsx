import React from 'react'
import Todo from './Todo'

const TodoList = ({tasks}) => {
  console.log(tasks)
  return (
    <div>
      {
        tasks.map((el,i)=><Todo task={el} key={i} />)
      }
    </div>
  )
}

export default TodoList