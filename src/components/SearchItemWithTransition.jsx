import { useState, useEffect, useTransition } from 'react'
import { SearchList } from './SearchList'

function SearchItemWithTransition() {
  const [query, setQuery] = useState('')
  const [deferredQuery, setDeferredQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  console.log('------------')
  console.log('App: текст в поле input:', query)

  useEffect(() => {
    console.log('App useEffect query:', query)
  }, [query])

  useEffect(() => {
    console.log('App useEffect deferredQuery:', deferredQuery)
  }, [deferredQuery])

  const handleInputChange = (e) => {
    // Срочное обновление: input должен меняться мгновенно
    const value = e.target.value
    setQuery(value)

    // Отложенное обновление для тяжелого списка
    startTransition(() => {
      setDeferredQuery(value)
    })
  }

  return (
    <>
      <div className="m-10 flex flex-col">
        <input
          className=" border w-60 border-sky-300 focus:border-inl focus:outline-sky-500"
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        {isPending && <div>Обновление списка...</div>}
        <SearchList query={deferredQuery} />
      </div>
    </>
  )
}

export default SearchItemWithTransition
