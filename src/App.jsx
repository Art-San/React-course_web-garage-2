import { useCounter } from './useCounter'

function App() {
  const [count, increment, decrement, reset] = useCounter(10, 5)

  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center h-screen">
        <h1 className=" text-4xl ">Счетчик {count}</h1>
        <div className=" flex gap-1">
          <button
            className=" bg-green-600 border px-2 py-1 rounded"
            onClick={increment}
          >
            Прибавить
          </button>
          <button
            className=" bg-blue-700 border px-2 py-1 rounded"
            onClick={decrement}
          >
            Убавить
          </button>
          <button
            className=" bg-rose-400 border px-2 py-1 rounded"
            onClick={reset}
          >
            Сбросить
          </button>
        </div>
      </div>
    </>
  )
}

export default App
