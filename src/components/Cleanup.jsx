import { useEffect, useState } from 'react'

export default function Cleanup() {
  const [message, setMessage] = useState('Hello, World!')

  useEffect(() => {
    console.log(message)
  }, [message])

  useEffect(() => {
    const id = setInterval(() => {
      console.log(message)
    }, 2000)

    return () => {
      clearInterval(id)
    }
  }, [message])

  return (
    <div className=" flex flex-col m-5 gap-2.5">
      <h3 className=" text-xl">Напечатайте, чтобы вывести в консоль</h3>
      <input
        className="  p-1 border w-45"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div>В консоль выводится {message}</div>
    </div>
  )
}
