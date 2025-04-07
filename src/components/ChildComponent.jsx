import { useState } from 'react'

function ChildComponent() {
  const [elementText, setElementText] = useState('')

  const handleClick = () => {
    const element = document.getElementById('myElement')
    setElementText(element.textContent)
  }

  return (
    <div>
      <div id="myElement">Это другой элемент с таким же ID</div>
      <button className=" border bg-green-700 px-3 py-1" onClick={handleClick}>
        Получить текст элемента
      </button>
      <p>Текст элемента: {elementText}</p>
    </div>
  )
}

export default ChildComponent
