import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ArticlePage from './ArticlePage'
import Topics from './Topics'
import { useEffect, useState } from "react";
import { fetchArticles } from '../api';

export default function StateManager() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
            fetchArticles().then((response) => {
                setArticles(response)
            })
        }, [])

    const getCurrentArticle = () => {
        const article = sessionStorage.getItem("currentArticle")
        return article ? JSON.parse(article) : {article_id: 0}
    }
    
    const [currentArticle, setCurrentArticle] = useState(getCurrentArticle);
    useEffect(() => {
        sessionStorage.setItem("currentArticle", JSON.stringify(currentArticle))
    }, [currentArticle])


  return (
    <div>
    <Routes>
        <Route path="/" element={<Home articles={articles} setCurrentArticle={setCurrentArticle}/>} />
        <Route path="/topics" element={<Topics />} />
        <Route path={`/article/${currentArticle.article_id}`} element={<ArticlePage currentArticle={currentArticle} setCurrentArticle={setCurrentArticle}/>}/>
    </Routes>
    </div>
  )
}
