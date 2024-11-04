import { useContext, useEffect, useState } from "react"
import { fecthArticleById, patchVoteCount } from "../api"
import { CurrentArticleContext } from "../Contexts/CurrentArticleContext"


export default function ArticlePage({article}) {
    const { currentArticle, setCurrentArticle } = useContext(CurrentArticleContext)
    const [updateVotes, setUpdateVotes] = useState(false)

    useEffect(() => {
        fecthArticleById(article.article_id).then((response) => {
            setCurrentArticle(response)
            setUpdateVotes(false)
        })
    }, [updateVotes])

    function changeVotes(id, num) {
        const voteChange = { inc_vote: num }
        patchVoteCount(id, voteChange)
        setUpdateVotes(true)
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
                    changeVotes(currentArticle.article_id, 1)
                }}>⬆️</button>
                <button onClick={() => {
                    changeVotes(currentArticle.article_id, -1)
                }}>⬇️</button>  
            </div>
    </div>
  )
}
