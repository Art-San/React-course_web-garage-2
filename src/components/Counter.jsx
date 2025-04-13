import { useReducer, useState } from 'react'
import { initialState, counterReducer } from '../reducers/counterReducer'

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  const [inputValue, setInputValue] = useState('')
  // console.log(12, state)

  const handleSetValue = (e) => {
    e.preventDefault()
    const num = parseInt(inputValue)
    if (!isNaN(num)) {
      dispatch({ type: 'SET_VALUE', payload: num })
    }
    setInputValue('')
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const handleReset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <div>
      <h2 className=" text-2xl font-semibold">Счётчик: {state.count}</h2>
      <div className=" flex gap-1">
        <button
          className=" bg-orange-700 text-white px-4 py-1 rounded-xl text-2xl"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className=" bg-green-700 text-white px-3.5 py-1 rounded-xl text-2xl"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        className=" bg-sky-700 text-white px-3.5 py-1 rounded-xl text-xl mt-1.5"
        onClick={handleReset}
      >
        Сбросить
      </button>
      <form className=" mt-2.5 flex  gap-1.5" onSubmit={handleSetValue}>
        <input
          className=" p-1 border rounded"
          type="number"
          placeholder="Установить значение"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className=" bg-sky-500 text-white px-3.5 py-1 rounded-xl text-xl mt-1.5"
          type="submit"
        >
          Применить
        </button>
      </form>
    </div>
  )
}

export default Counter
