import React from 'react'
import './style.css'

interface props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<props> = ({todo, setTodo}) => {
  return (
    <form className='input'>
        <input type='input' placeholder='Enter a task' className='input__box' />
        <button type='submit' className='input__submit'>Go</button>
    </form>
  )
}

export default InputField