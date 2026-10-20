import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseStateExample from './hooks/UseStateHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UseStateExample/>
  </StrictMode>,
)
