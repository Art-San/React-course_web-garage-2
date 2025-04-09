import useForm from './hooks/useForm'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { ProfileForm } from './ProfileForm'

const App = () => {
  const loginData = useForm({})
  const registerData = useForm({})
  const profileData = useForm({})

  const handleSubmit = (e, formType) => {
    e.preventDefault()
    if (formType === 'login') {
      console.log('Данные авторизации', loginData.formData)
    } else if (formType === 'password') {
      console.log('Данные регистрации', registerData.formData)
    } else {
      console.log(123, 'Иные данные', profileData.formData)
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <div className="flex gap-9">
        <div>
          <h1 className=" text-center">Авторизация</h1>
          <LoginForm
            formData={loginData.formData}
            handleChange={loginData.handleChange}
            handleSubmit={(e) => handleSubmit(e, 'login')}
          />
        </div>
        <div className="">
          <h1 className=" text-center">Регистрация</h1>
          <RegisterForm
            {...registerData}
            handleSubmit={(e) => handleSubmit(e, 'password')}
          />
        </div>
      </div>
      <div className="">
        <p>---------------</p>
        <ProfileForm
          {...profileData}
          // handleSubmit={(e) => handleSubmit(e, '')}
        />
      </div>
    </div>
  )
}

export default App
