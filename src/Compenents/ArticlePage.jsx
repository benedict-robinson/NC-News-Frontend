import { useEffect, useState } from "react"
import { fecthArticleById, patchVoteCount } from "../api"
import CommentList from "./CommentList"
import { useParams } from "react-router-dom"
import Votes from "./Votes"



export default function ArticlePage() {
    const [currentArticle, setCurrentArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        fecthArticleById(article_id).then((response) => {
            setCurrentArticle(response)
        })
        .catch((err) => {
            console.log(err)
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
    
  return (
    <div>
        <h2>{currentArticle.title}</h2>
        <h3>{currentArticle.author}</h3>
        <img src={currentArticle.article_img_url} />
        <p>{currentArticle.body}</p>
        <Votes type="articles" id={currentArticle.article_id} initialVotes={currentArticle.votes}/>  
        <p>Comments</p>
        <CommentList currentArticle={currentArticle}/>
    </div>
  )
}
