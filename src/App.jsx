import Setting from './components/Setting'
import { useLocalStorage } from './hooks/useLocalStorage'

const App = () => {
  const [name, handleSetName, handleRemoveName] = useLocalStorage(
    'name',
    'Гость'
  )

  return (
    <div className=" flex flex-col h-screen items-center justify-center gap-3">
      <h1 className=" text-4xl">Привет, {name}!</h1>
      <input
        className="border-1 border-sky-300 rounded-lg p-2 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
        type="text"
        value={name}
        onChange={(e) => handleSetName(e.target.value)}
        placeholder="Введите ваше имя"
      />
      <button
        className=" bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        onClick={handleRemoveName}
      >
        Очистить имя
      </button>
      <Setting />
    </div>
  )
}

export default App
