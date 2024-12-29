import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Contexts/UserContext"
import { deleteComment } from "../api"


export default function CommentDelete({comment, comments, setComments}) {
    const errorMsg = "Couldn't Delete Comment - Please Try Again"
    const [isErr, setIsErr] = useState(false)
    const { user } = useContext(UserContext)

    function handleDelete(id) {
        const commentsWithDelete = comments.filter((comment) => {
            return comment.comment_id !== id
        })
        deleteComment(id).then(() => {
        setComments(commentsWithDelete)
        }).catch((err) => {
            setIsErr(true)
        })
    }   
       
    if (user.username === comment.author) {
        return (
            <>
            <button id="vote-delete-buttons" onClick={() => {
                handleDelete(comment.comment_id)
            }}>❌</button>
            {isErr ? <p>{errorMsg}</p> : <p></p>}
            </>
        )
    }
}
