import { Link } from "react-router-dom"


export default function ArticleCard({article}) {

  return (
    <li>
        <img src={article.article_img_url} />
        <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
        </Link>
        <h3>{article.author}</h3>
    </li>
  )
}
