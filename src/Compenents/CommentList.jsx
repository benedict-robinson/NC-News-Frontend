import { useEffect, useState } from "react"
import { fetchComments } from "../api"
import CommentCard from "./CommentCard"

export default function CommentList({currentArticle}) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetchComments(currentArticle.article_id).then((response) => {
            setComments(response)
        })
    }, [])

  return (
    <div>
        <ul>
            {comments.map((comment) => {
                return <CommentCard comment={comment} key={comment.comment_id}/>
            })}
        </ul>
    </div>
  )
}
