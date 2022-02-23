import React from 'react'
import './styles.css'

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo} : Props) => {
  return (
    <form className='InputField'>
      <input type="input" placeholder='Enter a new task' value={todo} onChange={(e)=> setTodo(e.target.value)} className='Input'/>
      <button className='SubmitBtn' type='submit'>Add</button>
    </form>
  )
}

export default InputField