import React from 'react'
import './styles.css'

import { Todo } from '../models/models';

interface Props{
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, setTodos} : Props) => {
  return (
    <div className='todos'>
      {todos.map(todo => (
        <li>{todo.todo}</li>
      ))}
    </div>
  )
}

export default TodoList