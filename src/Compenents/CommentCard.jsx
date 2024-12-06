import { useEffect, useState } from "react"
import CommentVotes from "./CommentVotes"
import {format} from "date-fns"
import CommentDelete from "./CommentDelete"

export default function CommentCard({comment, comments, setComments}) {
  
  const formattedDate = format(comment.created_at, 'HH:mm dd/MM/yy')

  return (
    <li className="comment-card">
        <p id="comment-author">{comment.author}</p>
        <p>{comment.body}</p>
        <div className="date-votes">
        <p>{formattedDate}</p>
          <div className="votes-delete">
          <CommentVotes id={comment.comment_id} initialVotes={comment.votes}/>
          <CommentDelete comment={comment} comments={comments} setComments={setComments}/>
          </div>
        </div>
    </li>
  )
}
