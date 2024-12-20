import { Link } from "react-router-dom"
import "../CSS/article-posted-buttons.css"

export default function ArticlePostedAlert({setShowAlert, id}) {
  return (
    <div className="article-posted-page">
        <h2>Article Posted</h2>
        <div>
        <Link to={`/articles/${id}`}>
        <button>Go To Article</button>
        </Link>
        <button onClick={() => {setShowAlert(false)}}>Write Another</button>
        </div>
    </div>
  )
}
