import Header from './Compenents/Header'
import PostAndSignIn from './Compenents/PostAndSignIn'
import { Routes, Route } from 'react-router-dom'
import Topics from './Compenents/Topics'
import NavBar from './Compenents/NavBar'
import Home from './Compenents/Home'
import ArticlePage from './Compenents/ArticlePage'
import { useContext } from 'react'
import { CurrentArticleContext } from './Contexts/CurrentArticleContext'

function App() {

const { currentArticle } = useContext(CurrentArticleContext)


  return (
    <>
    <div className='top-bar'>
      <Header />
      <PostAndSignIn />
    </div>
    <div className="navBar">
    <NavBar />
    </div>
    
    <div className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path={`/article/${currentArticle.article_id}`} element={<ArticlePage article={currentArticle} />}/>
    </Routes>
    </div>
    </>
  )
}

export default App
