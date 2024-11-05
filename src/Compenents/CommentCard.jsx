import { useEffect, useState } from "react"
import { fetchCommentById, patchCommentsVoteCount } from "../api"
import Votes from "./Votes"
import {format} from "date-fns"

export default function CommentCard({comment}) {
    const formattedDate = format(comment.created_at, 'HH:mm dd/MM/yy')
    
  return (
    <div>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
        <p>{formattedDate}</p>
        <Votes type="comments" id={comment.comment_id} initialVotes={comment.votes}/>
    </div>
  )
}
