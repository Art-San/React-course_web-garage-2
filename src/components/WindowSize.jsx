import { useState, useEffect } from 'react'

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

    // Функция очистки
  }, []) // Пустой массив зависимостей, чтобы подписаться только один раз

  return (
    <div>
      <h1>Размер окна:</h1>
      <p>Ширина: {windowSize.width}px</p>
      <p>Высота: {windowSize.height}px</p>
    </div>
  )
}

export default WindowSize
