import React, { useReducer, useState } from 'react'
import { todoReducer, initialState } from '../reducers/todoReducer'

function Todo() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text })
      setText('')
    }
  }

  return (
    <div className=" flex flex-col gap-5">
      <h1 className=" text-2xl font-semibold">Список задач</h1>

      <form className=" flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          className=" p-1 border rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите задачу"
        />
        <button
          className=" bg-sky-500 hover:bg-sky-400 text-white px-3.5 py-1 rounded-xl text-xl mt-1.5"
          type="submit"
        >
          Добавить
        </button>
      </form>

      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
