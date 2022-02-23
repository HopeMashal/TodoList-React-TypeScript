import React from 'react'
import './styles.css'

const InputField = () => {
  return (
    <form className='InputField'>
      <input type="input" placeholder='Enter a new task' className='Input'/>
      <button className='SubmitBtn' type='submit'>Add</button>
    </form>
  )
}

export default InputField