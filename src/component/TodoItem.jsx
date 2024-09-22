import React from 'react'

const TodoItem = ({todo, editTodo, deleteTodo}) => {
  const hanldeEdit = () => {
    editTodo(todo)
  }
  const handleDelete = () => {
    deleteTodo(todo.id)
  }
  return (
    <>
        <li className={`todo-item ${todo.completed ? 'checked' : ''}`}>
          <div className='todo-text' onClick={hanldeEdit}>{todo.title}</div>
          <div className='delete' onClick={handleDelete}>X</div>
        </li>
    </>
  )
}

export default TodoItem