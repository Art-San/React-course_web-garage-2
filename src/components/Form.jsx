import { useId, useState } from 'react'

function Form() {
  const formId = useId()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Отправлено: ${name}`)
  }

  return (
    <div className=" flex flex-col gap-5 items-center mt-[50px]">
      <button
        className=" px-2 py-1 bg-sky-400 rounded text-white"
        type="submit"
        form={formId}
      >
        Отправить форму
      </button>
      {/*Много другого кода*/}
      <form
        className=" flex flex-col gap-5"
        id={formId}
        onSubmit={handleSubmit}
      >
        <h3>Простая форма</h3>
        <input
          className=" px-2 py-1 border border-indigo-300 focus:outline-indigo-400"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя"
        />
      </form>
    </div>
  )
}

export default Form
