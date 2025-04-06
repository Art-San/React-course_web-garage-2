import { useEffect } from 'react'
import { DataFetcher } from './components/DataFetcher'
import { Counter } from './components/Counter'

function App() {
  useEffect
  return (
    <>
      <div className=" px-5 pt-2.5">
        {/* <DataFetcher /> */}
        <Counter />
      </div>
    </>
  )
}

export default App
