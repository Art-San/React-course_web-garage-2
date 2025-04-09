export const RegisterForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form className=" flex flex-col gap-2.5 w-60" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className=" text-xs">Имя:</label>
        <input
          className="border"
          type="text"
          value={formData.username || ''}
          onChange={(e) => handleChange('username', e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className=" text-xs">Email:</label>
        <input
          className="border"
          type="email"
          value={formData.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className=" text-xs">Пароль:</label>
        <input
          className="border"
          type="password"
          value={formData.password || ''}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </div>
      <button
        className="text-white bg-sky-600 px-2 py-1 rounded-sm"
        type="submit"
      >
        Зарегистрироваться
      </button>
    </form>
  )
}
