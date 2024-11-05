import { useEffect, useState } from "react"
import { fecthArticleById, patchVoteCount } from "../api"
import CommentList from "./CommentList"
import { useParams } from "react-router-dom"
import Votes from "./Votes"
import { format } from "date-fns"



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

    const formattedDate = format(currentArticle.created_at, 'HH:mm dd/MM/yyyy')
    
  return (
    <div>
        <h2>{currentArticle.title}</h2>
        <h3>{currentArticle.author}</h3>
        <p>{formattedDate}</p>
        <img src={currentArticle.article_img_url} />
        <p>{currentArticle.body}</p>
        <p>Total votes: </p>
        <Votes type="articles" id={currentArticle.article_id} initialVotes={currentArticle.votes}/> 
        <CommentList currentArticle={currentArticle}/>
    </div>
  )
}
