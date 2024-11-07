
import ArticleCard from "./ArticleCard"
import SortBy from "./SortBy"

export default function ArticlesList({articles}) {

  return (
    <div>
      <SortBy />
        <ul className="articles-list">
            {articles.map(article => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
    </div>
  )
}