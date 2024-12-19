import { Link } from "react-router-dom"

export default function ArticlePostedAlert({setShowAlert, id}) {
  return (
    <div>
        <h2>Article Posted</h2>
        <Link to={`/articles/${id}`}>
        <button>Go To Article</button>
        </Link>
        <button onClick={() => {setShowAlert(false)}}>Write Another</button>
    </div>
  )
}
