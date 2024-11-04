import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ArticlesProvider } from './Contexts/ArticlesContext.jsx'
import { CurrentArticleProvider } from './Contexts/CurrentArticleContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ArticlesProvider>
    <CurrentArticleProvider>
      <App className="container"/>
    </CurrentArticleProvider>
    </ArticlesProvider>
    </BrowserRouter>
  </StrictMode>,
)
