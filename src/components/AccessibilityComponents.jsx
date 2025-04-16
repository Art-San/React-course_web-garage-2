import { useId } from 'react'

function AccessibilityComponent() {
  const nameId = useId()
  const emailId = useId()
  const errorId = useId()
  return (
    <>
      <form className=" flex flex-col gap-2">
        <div className=" flex gap-1">
          <label htmlFor={nameId}>Имя:</label>
          <input
            className=" border border-cyan-300 focus:outline-sky-600"
            id={nameId}
            aria-describedby={errorId}
            type="text"
          />
        </div>

        <div className=" flex gap-1">
          <label htmlFor={emailId}>Email:</label>
          <input
            className=" border border-cyan-300 focus:outline-sky-600"
            id={emailId}
            aria-describedby={errorId}
            type="email"
          />
        </div>

        <p id={errorId} role="alert">
          Пожалуйста, заполните все поля
        </p>
      </form>
    </>
  )
}

export default AccessibilityComponent
