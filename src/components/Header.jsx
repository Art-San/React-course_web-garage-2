import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { PlayerContext } from '../contexts/PlayerContext'
import UserInfo from './UserInfo'

function Header() {
  const { user, updateUser } = useContext(UserContext)
  const player = useContext(PlayerContext)
  console.log(player)

  return (
    <div className=" flex flex-col gap-6 items-center">
      <div className="">
        <h1>Добро пожаловать, {user.name}!</h1>
        <div className=" flex gap-2.5">
          <button className="border  px-2" onClick={player.togglePlay}>
            {player.isPlaying ? 'Пауза' : 'Играть'}
          </button>
          <button
            className="border  px-2"
            onClick={() =>
              updateUser({ name: 'Вася', email: 'vasya@example.com' })
            }
          >
            Сменить пользователя
          </button>
        </div>
      </div>
      <UserInfo />
    </div>
  )
}

export default Header
