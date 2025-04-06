import { useState, useEffect } from 'react'

function LifecycleDemo() {
  const [count, setCount] = useState(0)

  // Эффект с таймером
  useEffect(() => {
    console.log('Компонент смонтирован или обновлен')

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1) // Увеличиваем счетчик каждую секунду
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <p>Счетчик: {count}</p>
    </div>
  )
}

export default LifecycleDemo
