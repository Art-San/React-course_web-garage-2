import { useState, useTransition } from 'react'

export function BasicExample() {
  const [isPending, startTransition] = useTransition()
  const [count, setCount] = useState(0)
  console.log(12, isPending)

  function handleClick() {
    startTransition(() => {
      setCount((prev) => prev + 1)
    })
  }

  return (
    <div className=" flex flex-col items-center ">
      <span>{isPending ? 'Загрузка...' : count}</span>
      <button
        className=" px-2 py-1 bg-sky-500 hover:bg-sky-400 rounded text-white"
        onClick={handleClick}
      >
        Увеличить счетчик
      </button>
    </div>
  )
}
