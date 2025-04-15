import { useDeferredValue, useEffect, useState } from 'react'
import { SearchList } from './components/SearchList'

function App() {
  const [query, setQuery] = useState('')
  console.log('**************')
  console.log('Текст в поле input:', query)
  const deferredQuery = useDeferredValue(query)

  useEffect(() => {
    console.log('App useEffect query:', query)
  }, [query])

  useEffect(() => {
    console.log('App useEffect deferredQuery:', deferredQuery)
  }, [deferredQuery])

  return (
    <>
      <div className="m-10 flex flex-col">
        <input
          className=" border w-60 border-sky-300 focus:border-inl focus:outline-sky-500"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        {query !== deferredQuery ? (
          <span>Обновляем...</span>
        ) : (
          <SearchList query={deferredQuery} />
        )}
      </div>
    </>
  )
}

export default App
