import { useEffect } from 'react'

function MyComponents() {
  useEffect(() => {
    // Код, который выполняется после рендеринга

    return () => {
      // Код для очистки (опционально)
    }
  }, [])
  return <>{/*Компонент */}</>
}

export default MyComponents
