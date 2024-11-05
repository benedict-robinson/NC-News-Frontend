import { useEffect, useState } from "react"
import { fetchCommentById, patchCommentsVoteCount } from "../api"
import Votes from "./Votes"

export default function CommentCard({comment}) {
    
  return (
    <div>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
        <Votes type="comments" id={comment.comment_id} initialVotes={comment.votes}/>
    </div>
  )
}
