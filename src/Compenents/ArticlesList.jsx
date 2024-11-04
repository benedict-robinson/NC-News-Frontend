
import ArticleCard from "./ArticleCard"

export default function ArticlesList({articles, setCurrentArticle}) {

  return (
    <div className="articles-list">
        <ul>
            {articles.map(article => {
                return <ArticleCard article={article} setCurrentArticle={setCurrentArticle} key={article.article_id}/>
            })}
        </ul>
    </div>
  )
}