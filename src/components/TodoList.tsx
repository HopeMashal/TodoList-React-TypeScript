import React from 'react'
import './styles.css'

import { Todo } from '../models/models';
import SingleTodo from './SingleTodo';

interface Props{
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, setTodos} : Props) => {
  return (
    <div className='container'>
      <div className='todos'>
        <span className='TodosHeading'>Active Tasks</span>
        {
          todos.map((todo)=>(
            <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
          ))
        }
      </div>
      <div className='todos remove'>
        <span className='TodosHeading'>Completed Tasks</span>
          {
            todos.map((todo)=>(
              <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
            ))
          }
      </div>
    </div>
  )
}

export default TodoList