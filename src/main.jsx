import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './Compenents/UserContext.jsx'
import "./CSS/index-light.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <App className="container"/>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
