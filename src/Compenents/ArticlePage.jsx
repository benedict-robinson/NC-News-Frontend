import { useContext, useEffect } from "react"
import { fecthArticleById } from "../api"
import { CurrentArticleContext } from "../Contexts/CurrentArticleContext"


export default function ArticlePage({article}) {
    const { currentArticle, setCurrentArticle } = useContext(CurrentArticleContext)

    useEffect(() => {
        fecthArticleById(article.article_id).then((response) => {
            setCurrentArticle(response)
        })
    }, [])

  return (
    <div>
        <h2>{currentArticle.title}</h2>
        <h3>{currentArticle.author}</h3>
        <img src={currentArticle.article_img_url} />
        <p>{currentArticle.body}</p>
    </div>
  )
}
