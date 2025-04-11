import { LoginForm } from './components/LoginForm'
import { ProfileForm } from './components/ProfileForm'
import { RegisterForm } from './components/RegisterForm'
import useForm from './hooks/useForm'

const App = () => {
  const loginData = useForm({})
  const registerData = useForm({})
  const profileData = useForm({})

  const handleSubmit = (e, formType) => {
    e.preventDefault()
    if (formType === 'login') {
      console.log('Данные авторизации', loginData.formData)
    } else if (formType === 'password') {
      console.log('Данные регистрации', loginData.formData)
    } else formType === ''
    {
      console.log('Иные данные', profileData.formData)
    }
  }

  return (
    <div className=" flex flex-col gap-2 items-center justify-center">
      <h1 className="text-2xl font-bold">Авторизация</h1>
      <LoginForm
        {...loginData}
        handleSubmit={(e) => handleSubmit(e, 'login')}
      />
      <h1 className="text-2xl font-bold">Регистрация</h1>
      <RegisterForm
        {...registerData}
        handleSubmit={(e) => handleSubmit(e, 'password')}
      />
      <p>---------------</p>
      <ProfileForm {...profileData} handleSubmit={(e) => handleSubmit(e, '')} />
    </div>
  )
}

export default App
