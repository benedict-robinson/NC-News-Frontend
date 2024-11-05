import { useEffect, useState } from "react"
import { fecthArticleById, patchVoteCount } from "../api"
import CommentList from "./CommentList"



export default function ArticlePage({currentArticle, setCurrentArticle, isLoading, setIsloading}) {
    const [updateArticleVotes, setUpdateArticleVotes] = useState(false)

    useEffect(() => {
        setIsloading(true)
        fecthArticleById(currentArticle.article_id).then((response) => {
            setCurrentArticle(response)
            setUpdateArticleVotes(false)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setIsloading(false)
        })
    }, [updateArticleVotes])

    function changeArticleVotes(id, num) {
        const voteChange = { inc_vote: num }
        if (!(currentArticle.votes < 1 && num < 0)) {
        patchVoteCount(id, voteChange)
        setUpdateArticleVotes(true)
        }
    }

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
            <div>
                <label>Total votes: {currentArticle.votes} &nbsp; </label>
                <button onClick={() => {
                    changeArticleVotes(currentArticle.article_id, 1)
                }}>⬆️</button>
                <button onClick={() => {
                    changeArticleVotes(currentArticle.article_id, -1)
                }}>⬇️</button>  
            </div>
        <p>Comments</p>
        <CommentList currentArticle={currentArticle}/>
    </div>
  )
}
