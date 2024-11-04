import { useContext } from "react"
import { fetchArticles } from "../api"
import { ArticlesContext } from "../Contexts/ArticlesContext"
import ArticleCard from "./ArticleCard"

export default function ArticlesList() {
    const { articles } = useContext(ArticlesContext)

  return (
    <div className="articles-list">
        <ul>
            {articles.map(article => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
    </div>
  )
}