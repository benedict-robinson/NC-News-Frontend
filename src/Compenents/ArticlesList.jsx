
import ArticleCard from "./ArticleCard"


export default function ArticlesList({articles}) {

  return (
    <div>
        <ul className="articles-list">
            {articles.map(article => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
    </div>
  )
}