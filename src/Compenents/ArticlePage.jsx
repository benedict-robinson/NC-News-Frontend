import { useContext, useEffect, useState } from "react"
import { fecthArticleById } from "../api"
import CommentList from "./CommentList"
import { useParams } from "react-router-dom"
import ArticleVotes from "./ArticleVotes"
import { format } from "date-fns"
import ErrorHandle from "./ErrorHandle"
import { UserContext } from "./UserContext"
import ArticleDelete from "./ArticleDelete"



export default function ArticlePage() {
    const [currentArticle, setCurrentArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams()
    const { user } = useContext(UserContext)
    const [isErr, setIsErr] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        fecthArticleById(article_id).then((response) => {
            setCurrentArticle(response)
        })
        .catch((err) => {
            setIsErr(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
          <span className="loader"></span>  
        )
    }
    if (!isErr) {
    const formattedDate = format(currentArticle.created_at, 'HH:mm dd/MM/yyyy')
    
  return (
    <section className="article-page">
        <div className="article-page-container">
            <div className="left-column">
        <h2 id="article-title">{currentArticle.title}</h2>
        <h3 id="article-subtitle">{currentArticle.author}</h3>
        <p id="article-date">{formattedDate}</p>
            <img src={currentArticle.article_img_url} />
            <p>{currentArticle.body}</p>
            <ArticleVotes id={currentArticle.article_id} initialVotes={currentArticle.votes}/>
            {currentArticle.author === user.username ? <span><ArticleDelete article_id={currentArticle.article_id} /><br></br></span> : <br></br>}
            <br></br> 
            </div>
            <CommentList currentArticle={currentArticle}/>
        </div>
    </section>
  )
    }
    if (isErr) {
        return (
            <ErrorHandle error={"Non-Existent Article"}/>
        )
    }
}
