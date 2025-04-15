import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import SearchItemWithTransition from './components/SearchItemWithTransition'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SearchItemWithTransition /> */}
  </StrictMode>
)
