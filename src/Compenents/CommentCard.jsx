import { useEffect, useState } from "react"
import CommentVotes from "./CommentVotes"
import {format} from "date-fns"
import CommentDelete from "./CommentDelete"

export default function CommentCard({comment, comments, setComments}) {
  
  const formattedDate = format(comment.created_at, 'HH:mm dd/MM/yy')

  return (
    <li>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
        <p>{formattedDate}</p>
        <CommentVotes id={comment.comment_id} initialVotes={comment.votes}/>
        <CommentDelete comment={comment} comments={comments} setComments={setComments}/>
    </li>
  )
}
