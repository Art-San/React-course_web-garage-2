import { useRef, useImperativeHandle } from 'react'

const Input = ({ ref }) => {
  const inputRef2 = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        fn1: () => {
          inputRef2.current.focus()
        },
        fn2: () => inputRef2.current.value
      }
    },
    []
  )

  return (
    <input
      className=" border rounded border-gray-400 p-1"
      ref={inputRef2}
      type="text"
      placeholder="Введите текст"
    />
  )
}

export default Input
