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
    console.log(value)
  }

  return (
    <>
      <h1>Test</h1>
      <div>
        <Input ref={inputRef} />
        <button onClick={handleFocus}>Фокус на input</button>
        <button onClick={handleGetValue}>Получить значение</button>
      </div>
      <p>---------------------</p>
      <Page />
      <p>---------------------</p>
      <ParentComponent />
    </>
  )
}

export default App
