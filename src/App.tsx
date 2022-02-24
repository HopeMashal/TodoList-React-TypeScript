import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './models/models';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos)

  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id : Date.now(), todo, isDone:false}])
      setTodo("");
    }
  };

  return (
    <div className="App">
      <div className='Heading'>
        <img src="./logo.png" alt="Logo" className='Logo'/>
        <span className="Header">Hope ToDo List</span>
      </div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
