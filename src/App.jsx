import AddUser from './components/AddUser'
import DeleteUser from './components/DeleteUser'
import UpdateUser from './components/UpdateUser'
import UserList from './components/UserList'

const App = () => {
  return (
    <div className=" flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col w-[300px] gap-4">
        <h1 className=" text-4xl">Привет!</h1>
        {/* <UserList /> */}
        <AddUser />
        <UpdateUser />
        <DeleteUser />
      </div>
    </div>
  )
}

export default App
