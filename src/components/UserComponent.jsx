import { useState } from 'react'
import UserSearch from './UserSearch'

function UserComponent() {
  const [userId, setUserId] = useState(1)
  const [counter, setCounter] = useState(0)
  return (
    <div className="flex flex-col gap-2">
      <h1>Пример загрузки данных пользователя</h1>
      <label>
        Введите ID пользователя:
        <input
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
      </label>
      <UserSearch userId={userId} />
      <button onClick={() => setCounter(counter + 1)}>
        Увеличить счетчик: {counter}
      </button>
    </div>
  )
}

export default UserComponent
