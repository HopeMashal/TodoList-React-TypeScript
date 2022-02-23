import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './models/models';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {};

  return (
    <div className="App">
      <div className='Heading'>
        <img src="./logo.png" alt="Logo" className='Logo'/>
        <span className="Header">Hope ToDo List</span>
      </div>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
