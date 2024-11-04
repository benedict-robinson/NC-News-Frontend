import { useContext } from "react"
import { Link } from "react-router-dom"
import { CurrentArticleContext } from "../Contexts/CurrentArticleContext"

export default function ArticleCard({article}) {
    const { setCurrentArticle } = useContext(CurrentArticleContext)

  return (
    <li>
        <img src={article.article_img_url} />
        <Link onClick={() => {
            setCurrentArticle(article)
            }} to={`/article/${article.article_id}`}>
        <h2>{article.title}</h2>
        </Link>
        <h3>{article.author}</h3>
    </li>
  )
}
