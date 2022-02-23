import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='Heading'>
        <img src="./logo.png" alt="Logo" className='Logo'/>
        <span className="Header">Hope ToDo List</span>
      </div>
      <InputField/>
    </div>
  );
}

export default App;
