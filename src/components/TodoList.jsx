import React from 'react'
import Todo from './Todo'

const TodoList = ({tasks , del}) => {
  console.log(tasks)
  return (
    <div>
      {
        tasks.map((el,i)=><Todo task={el} key={i} del={del}/>)
      }
    </div>
  )
}

export default TodoList