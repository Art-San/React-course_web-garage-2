import { useState, useCallback } from 'react'
import axios from 'axios'

const useApi = (baseUrl) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const request = useCallback(
    async (method, endpoint, body = null) => {
      setLoading(true)
      try {
        const response = await api[method](endpoint, body)
        setData(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    [api]
  )

  const get = useCallback(
    async (endpoint) => request('get', endpoint),
    [request]
  )

  const post = useCallback(
    async (endpoint, body) => request('post', endpoint, body),
    [request]
  )

  const put = useCallback(
    async (endpoint, body) => request('put', endpoint, body),
    [request]
  )

  const patch = useCallback(
    async (endpoint, body) => request('patch', endpoint, body),
    [request]
  )

  const remove = useCallback(
    async (endpoint) => request('delete', endpoint),
    [request]
  )

  return { data, loading, error, get, post, put, patch, remove }
}

export default useApi

// import { useCallback, useState } from 'react'

// const useApi = (baseUrl) => {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const get = useCallback(
//     async (endpoint) => {
//       setLoading(true)
//       try {
//         const response = await fetch(`${baseUrl}${endpoint}`)
//         if (!response.ok) {
//           throw new Error(
//             `Ошибка HTTP-запроса! статус ошибка ${response.status}`
//           )
//         }

//         const result = await response.json()
//         setData(result)
//       } catch (error) {
//         setError(error)
//       } finally {
//         setLoading(false)
//       }
//     },
//     [baseUrl]
//   )

//   const post = useCallback(
//     async (endpoint, body) => {
//       setLoading(true)
//       try {
//         const response = await fetch(`${baseUrl}${endpoint}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(body)
//         })
//         if (!response.ok) {
//           throw new Error(
//             `Ошибка HTTP-запроса! статус ошибка ${response.status}`
//           )
//         }

//         const result = await response.json()
//         setData(result)
//       } catch (error) {
//         setError(error)
//       } finally {
//         setLoading(false)
//       }
//     },
//     [baseUrl]
//   )
//   const put = useCallback(
//     async (endpoint, body) => {
//       setLoading(true)
//       try {
//         const response = await fetch(`${baseUrl}${endpoint}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(body)
//         })

//         if (!response.ok) {
//           throw new Error(
//             `Ошибка HTTP-запроса! статус ошибка ${response.status}`
//           )
//         }

//         const result = await response.json()
//         setData(result)
//       } catch (error) {
//         setError(error)
//       } finally {
//         setLoading(false)
//       }
//     },
//     [baseUrl]
//   )
//   const remove = useCallback(
//     async (endpoint) => {
//       setLoading(true)
//       try {
//         const response = await fetch(`${baseUrl}${endpoint}`, {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         })

//         if (!response.ok) {
//           throw new Error(
//             `Ошибка HTTP-запроса! статус ошибка ${response.status}`
//           )
//         }

//         const result = await response.json()
//         console.log(676, response.body)
//         setData(result)
//       } catch (error) {
//         setError(error)
//       } finally {
//         setLoading(false)
//       }
//     },
//     [baseUrl]
//   )

//   return { data, loading, error, get, post, put, remove }
// }

// export default useApi
