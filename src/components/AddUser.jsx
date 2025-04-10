import { useState } from 'react'
import useApi from '../hooks/useApi'

const AddUser = () => {
  const [name, setName] = useState('')
  const [hasCar, setHasCar] = useState(false)

  const { loading, error, post } = useApi(
    'https://67b41ad7392f4aa94fa956ee.mockapi.io/api/v1/'
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = {
      name,
      hasCar
    }

    post('users', body)
      .then(() => {
        alert('Пользователь добавлен')
        setName('')
        setHasCar(false)
      })
      .catch(() => {
        alert('Не удалось добавить пользователя. Попробуйте позже')
      })
  }

  return (
    <div className=" flex flex-col">
      <h2>Добавить пользователя</h2>
      <form className=" flex flex-col gap-2.5" onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-1.5">
          <label htmlFor="name">Имя:</label>
          <input
            className=" px-2 py-1 border-1 border-indigo-500"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
            required
          />
        </div>
        <div className=" flex gap-1.5 border-1 border-indigo-500">
          <label htmlFor="hasCar">Наличие машины:</label>
          <input
            className=""
            type="checkbox"
            id="hasCar"
            checked={hasCar}
            onChange={(e) => setHasCar(e.target.checked)}
          />
        </div>
        <button
          className=" px-2 py-1 bg-sky-700 rounded  text-white"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Идет загрузка' : 'Добавить пользователя'}
        </button>
      </form>
      {error && <p>Ошибка: {error.message}</p>}
    </div>
  )
}

export default AddUser
