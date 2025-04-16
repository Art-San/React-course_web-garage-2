import { useState, lazy, Suspense } from 'react'

const TextComponent = lazy(() => import('./components/TextComponent'))
const TodoComponent = lazy(() => import('./components/TodoComponent'))

function App() {
  const [showText, setShowText] = useState(false)
  const [showTodo, setShowTodo] = useState(false)

  return (
    <div>
      <div className=" m-10  flex flex-col items-center gap-1.5">
        <h2 className=" font-semibold text-2xl">1. Загрузка компонента</h2>
        <button
          className=" bg-sky-500 px-2 py-1 rounded text-white hover:bg-sky-600"
          onClick={() => {
            setShowText(!showText)
          }}
        >
          <Suspense fallback={<div>Компонент загружается</div>}>
            {showText ? 'Скрыть' : 'Показать'} компонент
          </Suspense>
        </button>

        {showText && <TextComponent />}

        <h2 className=" font-semibold text-2xl">
          2. Загрузка компонента списка задач
        </h2>
        <button
          className=" bg-sky-500 px-2 py-1 rounded text-white hover:bg-sky-600"
          onClick={() => {
            setShowTodo(!showTodo)
          }}
        >
          {showTodo ? 'Скрыть' : 'Показать'} список задач
        </button>

        <Suspense fallback={<div>Компонент загружается</div>}>
          {showTodo && <TodoComponent />}
        </Suspense>
      </div>
    </div>
  )
}

export default App
