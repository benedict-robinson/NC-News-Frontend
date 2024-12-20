import "../CSS/new-article-button.css"
import { Link } from "react-router-dom"

export default function WriteNewArticleButton({topic}) {
    
  return (
        <Link to={"/newArticle"} state={topic ? { topic } : ""} >
        <button id="new-article-button">Write New Article</button>
        </Link>
  )
}
