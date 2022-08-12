import React from 'react'
import Todo from './Todo'

const TodoList = ({tasks , del , com}) => {
  console.log(tasks)
  return (
    <div>
      {
        tasks.map((el,i)=><Todo task={el} key={i} del={del} com={com}/>)
      }
    </div>
  )
}

export default TodoList