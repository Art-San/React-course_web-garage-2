import { useState } from 'react'
import useApi from '../hooks/useApi'

const UpdateUser = ({ userId = 1 }) => {
  const [hasCar, setHasCar] = useState(false)

  const { loading, error, put } = useApi(
    'https://67b41ad7392f4aa94fa956ee.mockapi.io/api/v1/'
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = {
      hasCar
    }

    put(`users/${userId}`, body)
      .then(() => {
        alert('Данные изменены')
        setHasCar(false)
      })
      .catch(() => {
        alert('Не удалось изменить данные пользователя. Попробуйте позже')
      })
  }

  return (
    <div>
      <h2>Изменить данные пользователя</h2>
      <form className=" flex flex-col gap-2.5" onSubmit={handleSubmit}>
        <div className=" flex gap-1.5">
          <label htmlFor="hasCar">Наличие машины:</label>
          <input
            type="checkbox"
            id="hasCar"
            checked={hasCar}
            onChange={(e) => setHasCar(e.target.checked)}
          />
        </div>
        <button
          className=" px-2 py-1 bg-orange-500 rounded  text-white"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Идет загрузка' : 'Изменить данные пользователя'}
        </button>
      </form>
      {error && <p>Ошибка: {error.message}</p>}
    </div>
  )
}

export default UpdateUser
