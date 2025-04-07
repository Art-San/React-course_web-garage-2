import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RefComponents } from './components/RefComponent.jsx'
import { RefComponentEffect } from './components/RefComponentEffect.jsx'
import NumberTracker from './components/NumberTracker.jsx'
import UserComponent from './components/UserComponent.jsx'
import CustomVideoPlayer from './components/CustomVideoPlayer.jsx'
import AdvancedAudioPlayer from './components/AdvancedAudioPlayer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div className=" flex items-center justify-center h-screen">
        {/* <App /> */}
        {/* <RefComponents /> */}
        {/* <RefComponentEffect /> */}
        {/* <NumberTracker /> */}
        {/* <UserComponent /> */}
        {/* <CustomVideoPlayer /> */}
        <AdvancedAudioPlayer />
      </div>
    </>
  </StrictMode>
)
