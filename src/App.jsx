import { useRef } from 'react'
import Input from './components/Input'
import Page from './components/Page'
import ParentComponent from './components/ParentComponent'

const App = () => {
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.fn1()
  }

  const handleGetValue = () => {
    const value = inputRef.current.fn2()
    console.log(123, value)
  }

  return (
    <>
      <div className="m-5 flex flex-col items-center gap-2">
        <h1>Test</h1>
        <Input ref={inputRef} />
        <button
          className=" bg-green-500 px-2 py-1 ml-1 rounded"
          onClick={handleFocus}
        >
          Фокус на input
        </button>{' '}
        <button
          className=" bg-sky-500 px-2 py-1 ml-1 rounded "
          onClick={handleGetValue}
        >
          Получить значение
        </button>
        <p>---------------------</p>
        <Page />
        <p>---------------------</p>
        <ParentComponent />
      </div>
    </>
  )
}

export default App
