import React, { useState } from 'react'

const TodoHeader = ({addTodo}) => {

  const [inputTodo, setInputTodo] = useState("");
  
  const handleSubmit = (e) =>{ 
    e.preventDefault()
    addTodo(inputTodo)
    setInputTodo("")
  }
  const onChange = (e) => {
    setInputTodo(e.target.value)
    console.log(inputTodo)
  }

  return (
    <>
        <header className='py-12'>
            <h1 className='text-center mb-4 text-3xl font-bold'>To Do List</h1>
            <form action="" className='flex justify-center ' onSubmit={handleSubmit}>
                <div>
                    <input onChange={onChange} value={inputTodo} type="text" placeholder='Tambah Todo' className='rounded-l-md w-[300px] px-2 py-2 border border-gray-300 text-slate-900 outline-none' />
                </div>
                <button className='py-2 px-2 bg-blue-500 rounded-r-md  font-semibold text-white ' type='submit'>Add</button>
            </form>
        </header>
    </>
  )
}

export default TodoHeader;