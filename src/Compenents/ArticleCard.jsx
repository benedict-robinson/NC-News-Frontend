import { Link } from "react-router-dom"


export default function ArticleCard({article}) {

  return (
    <li className="article-card">
        <img src={article.article_img_url} className="article-img"/>
        <Link to={`/articles/${article.article_id}`}>
        <div>
        <h2 id="article-title">{article.title}</h2>
        <h3 id="article-subtitle">{article.author}</h3>
        </div>
        </Link>
    </li>
  )
}
