import { useUserContext } from '../contexts/UserContext'

function UserDetails() {
  const { user } = useUserContext()

  return (
    <div className=" flex flex-col gap-1.5">
      <h3>Детали пользователя:</h3>
      <div className="">
        <p>Имя: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  )
}

export default UserDetails
