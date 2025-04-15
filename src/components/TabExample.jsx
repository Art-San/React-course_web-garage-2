import { useState, useTransition } from 'react'

export function TabExample() {
  const [tab, setTab] = useState('home')
  const [isPending, startTransition] = useTransition()

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab)
    })
  }

  return (
    <div className=" flex flex-col gap-2">
      <div className="flex gap-7 bg-amber-200 px-1.5 rounded">
        <button onClick={() => selectTab('home')}>Главная</button>
        <button onClick={() => selectTab('about')}>О нас (медленная)</button>
        <button onClick={() => selectTab('contact')}>Контакты</button>
      </div>
      <hr />

      {isPending ? (
        <div>Загрузка вкладки...</div>
      ) : (
        <div className="">
          {tab === 'home' && <HomeTab />}
          {tab === 'about' && <SlowAboutTab />}
          {tab === 'contact' && <ContactTab />}
        </div>
      )}
    </div>
  )
}

function HomeTab() {
  return <h2 className=" font-semibold text-xl">Главная страница</h2>
}

const SlowAboutTab = function SlowAboutTab() {
  console.log('[Медленно] Рендер 500 элементов')

  let items = []
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />)
  }
  return <ul>{items}</ul>
}

function SlowPost({ index }) {
  let startTime = performance.now()
  while (performance.now() - startTime < 2) {
    // Задержка 2ms на элемент
  }
  return <li>Элемент #{index + 1}</li>
}

function ContactTab() {
  return <h2 className=" font-semibold text-xl">Контакты</h2>
}
