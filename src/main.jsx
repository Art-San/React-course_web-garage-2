import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cleanup from './components/Cleanup.jsx'
import { DataFetcher } from './components/DataFetcher.jsx'
import WindowSize from './components/WindowSize.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* <DataFetcher /> */}
      {/* <App /> */}
      {/* <Cleanup /> */}
      <WindowSize />
    </>
  </StrictMode>
)
