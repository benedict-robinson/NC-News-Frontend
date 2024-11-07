import { useEffect, useState } from "react"
import { fetchComments } from "../api"
import CommentCard from "./CommentCard"
import PostNewComment from "./PostNewComment"

export default function CommentList({currentArticle}) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetchComments(currentArticle.article_id).then((response) => {
            setComments(response)
        })
    }, [])
    
  return (
    <div>
        <PostNewComment setComments={setComments} id={currentArticle.article_id}/>
        <h3>Comments ({comments.length})</h3>
        <ul>
            {comments.map((comment) => {
                return <CommentCard comment={comment} key={comment.comment_id} comments={comments} setComments={setComments}/>
            })}
        </ul>
    </div>
  )
}
