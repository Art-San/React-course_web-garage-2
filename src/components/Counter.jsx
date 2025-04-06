import { useEffect, useState } from 'react'
import { ClickComponent } from './ClickComponents'

export function Counter() {
  const [count, setCount] = useState(0)
  const [countEffect, setCountEffect] = useState(0)
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('useEffect', 1)
    setCountEffect(countEffect + 1)
  }, [number])

  return (
    <>
      <p>Счетчик: {count}</p>
      <button
        className=" bg-green-400 border rounded px-1.5 py-1"
        onClick={() => setCount(count + 12)}
      >
        Увеличить
      </button>
      <p>Эффект счетчика с useEffect: {countEffect}</p>
      <ClickComponent number={number} setNumber={setNumber} count={count} />
    </>
  )
}
