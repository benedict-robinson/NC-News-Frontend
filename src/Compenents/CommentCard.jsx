import { useEffect, useState } from "react"
import { fetchCommentById, patchCommentsVoteCount } from "../api"

export default function CommentCard({comment}) {
    const [updateCommentVotes, setUpdateCommentVotes] = useState(false)
    const [commentVoteCount, setCommentVoteCount] = useState(comment.votes)

    useEffect(() => {
        fetchCommentById(comment.comment_id).then((response) => {
            setCommentVoteCount(response.votes)
            setUpdateCommentVotes(false)
        })
    }, [updateCommentVotes])

    function changeVotes(id, num) {
        patchCommentsVoteCount(id, { inc_vote: num })
        setUpdateCommentVotes(true)
    }

  return (
    <div>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
        <div>
                <label>{commentVoteCount} &nbsp; </label>
                <button onClick={() => {
                    changeVotes(comment.comment_id, 1)
                }}>⬆️</button>
                <button onClick={() => {
                    changeVotes(comment.comment_id, -1)
                }}>⬇️</button>  
            </div>
    </div>
  )
}
