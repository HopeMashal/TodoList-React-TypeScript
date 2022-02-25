import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './models/models';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  useEffect(()=>{
    // @ts-ignore
    setTodos(JSON.parse(localStorage.getItem("todos") || ""))
    // @ts-ignore
    setCompletedTodos(JSON.parse(localStorage.getItem("completedtodos") || ""))
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(todos)
    console.log(localStorage.getItem("todos"))
  },[todos])

  useEffect(()=>{
    localStorage.setItem("completedtodos", JSON.stringify(completedTodos))
    console.log(completedTodos)
    console.log(localStorage.getItem("completedtodos"))
  },[completedTodos])

  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id : Date.now(), todo, isDone:false}])
      setTodo("");
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  };

  const onDragEnd =(result:DropResult)=>{
    const {source,destination}=result;
    if(!destination)return;
    if(destination.droppableId===source.droppableId && destination.index===source.index) return;
    let add, active = todos, complete = completedTodos;
    if(source.droppableId === "TodosList"){
      add = active[source.index];
      active.splice(source.index, 1)
    } else {
      add = complete[source.index];
      complete.splice(source.index , 1)
    }
    if(destination.droppableId === "TodosList"){
      active.splice(destination.index, 0 , add)
    } else {
      complete.splice(destination.index , 0 , add)
    }
    setCompletedTodos(complete)
    setTodos(active)
    localStorage.setItem("completedtodos", JSON.stringify(completedTodos))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className='Heading'>
          <img src="./logo.png" alt="Logo" className='Logo'/>
          <span className="Header">Hope ToDo List</span>
        </div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
      </div>
    </DragDropContext>
  );
}

export default App;
