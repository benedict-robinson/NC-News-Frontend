import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './Compenents/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <App className="container"/>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
