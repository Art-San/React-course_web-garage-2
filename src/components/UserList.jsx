import { useEffect } from 'react'
import useApi from '../hooks/useApi'

const UserList = () => {
  const { data, loading, error, get } = useApi(
    'https://jsonplaceholder.typicode.com/'
  )

  useEffect(() => {
    get('users')
  }, [])

  if (loading) {
    return <p>Загрузка...</p>
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>
  }

  return (
    <>
      <div className=" flex flex-col gap-2">
        <h2>Лист пользователей</h2>
        <ul className=" flex flex-col text-sky-600">
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </>
  )
}

export default UserList
