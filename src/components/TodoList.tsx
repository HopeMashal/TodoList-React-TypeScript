import React from 'react'
import './styles.css'

import { Todo } from '../models/models';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, setTodos, completedTodos, setCompletedTodos} : Props) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodoList'>
        {
          (provided, snapshot)=>(
            <div className={`todos ${snapshot.isDraggingOver?'dragactive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
              <span className='TodosHeading'>Active Tasks</span>
              {
                todos.map((todo, index)=>(
                  <SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
                ))
              }
              {
                provided.placeholder
              }
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TodoRemove'>
        {
          (provided, snapshot)=>(
            <div className={`todos remove ${snapshot.isDraggingOver?'dragcomplete' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
              <span className='TodosHeading'>Completed Tasks</span>
                {
                  completedTodos.map((todo, index)=>(
                    <SingleTodo index={index} todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos}/>
                  ))
                }
                {
                  provided.placeholder
                }
            </div>
          )}
      </Droppable>
    </div>
  )
}

export default TodoList