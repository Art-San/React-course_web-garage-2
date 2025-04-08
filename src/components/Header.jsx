import { useUserContext } from '../contexts/UserContext'
import UserInfo from './UserInfo'

function Header() {
  const { user, updateUser } = useUserContext()
  return (
    <div className=" flex items-center justify-center w-full h-30 bg-blue-200 gap-4">
      <h1>Добро пожаловать, {user.name}!</h1>
      <button
        onClick={() => updateUser({ name: 'Вася', email: 'vasya@example.com' })}
      >
        Сменить пользователя
      </button>
      <UserInfo />
    </div>
  )
}

export default Header
