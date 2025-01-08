
import ArticleCard from "./ArticleCard"


export default function ArticlesList({articles, searchTerm}) {

  return (
    <div>
      <h2>{searchTerm ? `Showing results for '${searchTerm}'` : ""}</h2>
        <ul className="articles-list">
            {articles.map(article => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
    </div>
  )
}