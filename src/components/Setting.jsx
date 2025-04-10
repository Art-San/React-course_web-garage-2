import { useLocalStorage } from '../hooks/useLocalStorage'

function Setting() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const [language, setLanguage] = useLocalStorage('language', 'ru')

  return (
    <div className=" flex flex-col gap-3 ">
      <h1>Настроки</h1>
      <div className=" flex justify-between">
        <h2>Тема:</h2>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Светлая</option>
          <option value="dark">Темная</option>
        </select>
      </div>
      <div className=" flex justify-between">
        <h2>Язык:</h2>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="ru">Русский</option>
          <option value="en">Английский</option>
        </select>
      </div>

      <p className=" bg-amber-200 p-1">Текущая тема: {theme}</p>
      <p className=" bg-amber-200 p-1">Текущий язык: {language}</p>
    </div>
  )
}

export default Setting
