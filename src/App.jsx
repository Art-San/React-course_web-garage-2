import AccessibilityComponent from './components/AccessibilityComponents'
import Form from './components/Form'
import AccessibleForms from './components/AccessibleForms'
import { useId } from 'react'

function App() {
  const id = useId()
  const emailId = `${useId()}-email`
  return (
    <>
      <div className=" flex flex-col m-5 gap-1.5 items-center justify-center">
        <div className=" flex flex-col m-5 gap-1.5 items-center justify-center">
          <label htmlFor={emailId}>Введите email</label>
          <input
            className=" border border-cyan-300 focus:outline-sky-600"
            type="email"
            id={emailId}
          />

          <label className=" flex gap-2">
            <p>Согласен с условиями пользования</p>
            <input type="checkbox" />
          </label>
          <br />
          <label htmlFor={id}>Введите пароль</label>
          {/*Какой-то код */}
          <input
            className=" border border-cyan-300 focus:outline-sky-600"
            type="password"
            id={id}
          />
        </div>
        {/* <AccessibilityComponent /> */}
        <Form />
        <AccessibleForms />
      </div>
    </>
  )
}

export default App

// function App() {
//   const id = useId()
//   const emailId = `${useId()}-email`
//   return (
//     <>
//       <div className=" flex flex-col m-5 gap-1.5 items-center justify-center">
//         <label htmlFor={emailId}>Введите email</label>
//         <input
//           className=" border border-cyan-300 focus:outline-sky-600"
//           type="email"
//           id={emailId}
//         />

//         <label className=" flex gap-2">
//           <p>Согласен с условиями пользования</p>
//           <input type="checkbox" />
//         </label>
//         <br />
//         <label htmlFor={id}>Введите пароль</label>
//         {/*Какой-то код */}
//         <input
//           className=" border border-cyan-300 focus:outline-sky-600"
//           type="password"
//           id={id}
//         />
//       </div>
//       <Form />
//     </>
//   )
// }

// export default App
