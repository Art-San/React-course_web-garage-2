import { useEffect } from 'react'

export function ClickComponent({ number, setNumber, count }) {
  useEffect(() => {
    console.log('useEffect', 2)
    setNumber(number + 100)
    console.log('useEffect', 3)
  }, [count])

  return (
    <>
      <button
        className=" bg-green-400 border rounded px-1.5 py-1"
        onClick={() => setNumber(number + 1)}
      >
        Меняем число {number}
      </button>
    </>
  )
}
