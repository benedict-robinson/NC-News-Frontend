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
    <div className="right-column">
        <h3 id="comment-title">Comments ({comments.length})</h3>
        <PostNewComment setComments={setComments} id={currentArticle.article_id}/>
        <ul>
            {comments.map((comment) => {
                return <CommentCard comment={comment} key={comment.comment_id} comments={comments} setComments={setComments}/>
            })}
        </ul>
    </div>
  )
}
