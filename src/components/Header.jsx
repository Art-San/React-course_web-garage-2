import { useUserContext } from '../contexts/UserContext'
import UserInfo from './UserInfo'

function Header() {
  const user = useUserContext()
  return (
    <div className=" flex items-center justify-center w-full h-30 bg-blue-200 gap-4">
      <h1 className=" text-xl">Добро пожаловать, {user.name}!</h1>
      <UserInfo />
    </div>
  )
}

export default Header
