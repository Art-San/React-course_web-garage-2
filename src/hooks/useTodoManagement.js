import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage.js'
import { useTodoApi } from './useTodoApi.js'
import { useTodoHelpers } from './useTodoHelpers.js'
import { useTodoActions } from './useTodoActions.js'

export const useTodoManagement = () => {
  const [todos, setTodos] = useState([])
  const [deletingId, setDeletingId] = useState(null)
  const [isDeletingCompleted, setIsDeletingCompleted] = useState(false)
  const { loadFromLocalStorage, saveToLocalStorage } = useLocalStorage()
  const { fetchTodos, createTodo, updateTodo, deleteTodo } = useTodoApi()
  const {
    createNewTodo,
    sortedSavedTodos,
    toggleTodoCompletion,
    updateTodoData
  } = useTodoHelpers()

  useEffect(() => {
    const loadInitialData = async () => {
      const savedTodos = sortedSavedTodos(loadFromLocalStorage())

      setTodos(savedTodos)

      try {
        const serverTodos = await fetchTodos()
        const sortedServerTodos = sortedSavedTodos(serverTodos)
        setTodos(sortedServerTodos)
        saveToLocalStorage(sortedServerTodos)
      } catch (error) {
        console.error('Ошибка загрузки данных:', error)
      }
    }
    loadInitialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const actions = useTodoActions({
    todos,
    setTodos,
    createNewTodo,
    createTodo,
    saveToLocalStorage,
    updateTodo,
    updateTodoData,
    toggleTodoCompletion,
    deleteTodo,
    setIsDeletingCompleted
  })

  return {
    todos,
    setTodos,
    deletingId,
    setDeletingId,
    isDeletingCompleted,
    setIsDeletingCompleted,
    ...actions
  }
}

// import { useState, useEffect } from 'react'
// import { LOCAL_STORAGE_KEY, API_URL } from '../constants/todos'

// export const useTodoManagement = () => {
//   const [todos, setTodos] = useState([])
//   const [deletingId, setDeletingId] = useState(null)
//   const [isDeletingCompleted, setIsDeletingCompleted] = useState(false)

//   useEffect(() => {
//     const loadInitialData = async () => {
//       const savedTodos = JSON.parse(
//         localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'
//       )

//       const sortedSavedTodos = [...savedTodos].sort((a, b) => a.order - b.order)

//       setTodos(sortedSavedTodos)

//       try {
//         const response = await fetch(API_URL)

//         if (response.ok) {
//           const serverTodos = await response.json()
//           const sortedServerTodos = [...serverTodos].sort(
//             (a, b) => a.order - b.order
//           )
//           setTodos(sortedServerTodos)
//           localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(serverTodos))
//         }
//       } catch (error) {
//         console.error('Ошибка загрузки данных:', error)
//       }
//     }
//     loadInitialData()
//   }, [])

//   const onAdd = async (text, deadline) => {
//     const newTodo = {
//       id: `temp_${Date.now()}`,
//       text,
//       completed: false,
//       createdAt: new Date().toISOString(),
//       deadline: deadline || null,
//       order: todos.length + 1
//     }

//     const updatedTodos = [...todos, newTodo]
//     setTodos(updatedTodos)

//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newTodo)
//       })

//       const createdTodo = await response.json()

//       const syncedTodos = updatedTodos.map((todo) =>
//         todo.id === newTodo.id ? createdTodo : todo
//       )

//       setTodos(syncedTodos)
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(syncedTodos))
//     } catch (error) {
//       console.error('Ошибка добавления:', error)
//       setTodos(todos)
//     }
//   }

//   const handleUpdate = async (id, newText, newDeadline) => {
//     const todoToUpdate = todos.find((todo) => todo.id === id)

//     if (!todoToUpdate) return

//     const updatedTodo = {
//       ...todoToUpdate,
//       text: newText,
//       deadline: newDeadline
//     }

//     const updatedTodos = todos.map((todo) =>
//       todo.id === id ? updatedTodo : todo
//     )

//     setTodos(updatedTodos)

//     try {
//       await fetch(`${API_URL}/${id}`, {
//         method: 'PUT',

//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedTodo)
//       })

//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos))
//     } catch (error) {
//       console.error('Ошибка обновления:', error)
//       setTodos(todos)
//     }
//   }

//   const toggleComplete = async (id) => {
//     const todoToUpdate = todos.find((todo) => todo.id === id)

//     if (!todoToUpdate) return

//     const updatedTodo = {
//       ...todoToUpdate,
//       completed: !todoToUpdate.completed
//     }

//     const updatedTodos = todos.map((todo) =>
//       todo.id === id ? updatedTodo : todo
//     )

//     setTodos(updatedTodos)

//     try {
//       await fetch(`${API_URL}/${id}`, {
//         method: 'PUT',

//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedTodo)
//       })

//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos))
//     } catch (error) {
//       console.error('Ошибка обновления:', error)
//       setTodos(todos)
//     }
//   }

//   const handleDelete = async (id) => {
//     const previousTodos = todos
//     const updatedTodos = todos.filter((todo) => todo.id !== id)
//     setTodos(updatedTodos)

//     try {
//       await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos))
//     } catch (error) {
//       console.error('Ошибка удаления:', error)
//       setTodos(previousTodos)
//     }
//   }

//   const hasCompletedTodos = todos.some((todo) => todo.completed)

//   const handleDeleteCompleted = () => {
//     if (!hasCompletedTodos) return
//     setIsDeletingCompleted(true)
//   }

//   const confirmDeleteCompleted = async () => {
//     const originalTodos = [...todos]

//     const completedIds = originalTodos
//       .filter((t) => t.completed)
//       .map((t) => t.id)

//     setTodos(originalTodos.filter((todo) => !todo.completed))

//     const failedIds = []

//     for (const id of completedIds) {
//       try {
//         await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
//       } catch (error) {
//         console.error(`Ошибка удаления задачи ${id}:`, error)
//         failedIds.push(id)
//       }
//     }

//     if (failedIds.length > 0) {
//       setTodos(
//         originalTodos.filter(
//           (todo) => !todo.completed || failedIds.includes(todo.id)
//         )
//       )
//     }

//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
//     setIsDeletingCompleted(false)
//   }

//   const onReorder = async (activeId, overId) => {
//     if (!overId) return

//     try {
//       const activeIndex = todos.findIndex((todo) => todo.id === activeId)
//       const overIndex = todos.findIndex((todo) => todo.id === overId)

//       if (activeIndex === -1 || overIndex === -1 || activeIndex === overIndex)
//         return

//       const newTodos = [...todos]
//       const [movedTodo] = newTodos.splice(activeIndex, 1)
//       console.log([movedTodo])
//       newTodos.splice(overIndex, 0, movedTodo)

//       const updatedTodos = newTodos.map((todo, index) => ({
//         ...todo,
//         order: index + 1
//       }))

//       setTodos(updatedTodos)

//       await Promise.all(
//         updatedTodos.map((todo) =>
//           fetch(`${API_URL}/${todo.id}`, {
//             method: 'PUT',

//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ order: todo.order })
//           })
//         )
//       )
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos))
//     } catch (error) {
//       console.error('Ошибка изменения порядка', error)
//       setTodos(todos)
//     }
//   }
//   return {
//     todos,
//     setTodos,
//     deletingId,
//     setDeletingId,
//     isDeletingCompleted,
//     setIsDeletingCompleted,
//     onAdd,
//     handleUpdate,
//     toggleComplete,
//     handleDelete,
//     handleDeleteCompleted,
//     confirmDeleteCompleted,
//     hasCompletedTodos,
//     onReorder
//   }
// }
