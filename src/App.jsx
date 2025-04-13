import Counter from './components/Counter'
import Todo from './components/Todo'

const App = () => {
  return (
    <>
      <div className="flex  flex-col items-center mt-7 gap-10">
        <Counter />
        <Todo />
      </div>
    </>
  )
}

export default App
