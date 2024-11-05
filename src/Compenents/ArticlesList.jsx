
import ArticleCard from "./ArticleCard"

export default function ArticlesList({articles}) {

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