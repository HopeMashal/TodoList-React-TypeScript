import React, { useState , useRef} from 'react'
import './styles.css'
import { Todo } from '../models/models'
import {AiFillEdit , AiFillDelete} from "react-icons/ai";
import {MdDone} from "react-icons/md"

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos} : Props) => {

  const [edit, setEdit]= useState<boolean>(false);
  const [editTodo, setEditTodo]= useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit =(e: React.FormEvent, id: number)=>{
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  }

  const handleDelete =(id:number)=>{
    setTodos(
      todos.filter((todo)=>
        todo.id!==id))
  }

  const handleDone =(id:number)=>{
    setTodos(
      todos.map((todo)=>
        todo.id===id?{...todo,isDone:!todo.isDone}:todo))
  }

  return (
    <form className='TodoSingle' onSubmit={(e)=>handleEdit(e,todo.id)}>
      {
        edit ? (
          <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="TodoSingleText"
              ref={inputRef}
            />
        ) :
      todo.isDone ? (
        <s className="TodoSingleText">{todo.todo}</s>
      ) : (
        <span className="TodoSingleText">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={()=>{
            if(!edit && !todo.isDone){
              setEdit(!edit)
            }
          }
        }>
          <AiFillEdit/>
        </span>
        <span className="icon" onClick={()=> handleDelete(todo.id)}>
          <AiFillDelete/>
        </span>
        <span className="icon" onClick={()=> handleDone(todo.id)}>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo