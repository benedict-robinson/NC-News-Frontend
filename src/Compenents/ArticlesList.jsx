import ArticleCard from "./ArticleCard"

export default function ArticlesList({articles, searchTerm, topic, isTablet}) {


  if (articles.length === 0) {
    return (
      <div>
      <h2>{searchTerm ? `Showing results for '${searchTerm}'` : ""}</h2>
        <p>No Articles Found</p>
    </div>
    )
  }
  return (
    <div>
      {isTablet ? <h2>{topic} Articles</h2> : ""}
      <h2>{searchTerm ? `Showing results for '${searchTerm}'` : ""}</h2>
        <ul className="articles-list">
            {articles.map(article => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
    </div>
  )
}