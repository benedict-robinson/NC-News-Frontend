import { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserContext"
import { deleteComment } from "../api"


export default function CommentDelete({comment, comments, setComments}) {
    const errorMsg = "Couldn't Delete Comment - Please Try Again"
    const [isErr, setIsErr] = useState(false)
    const { user } = useContext(UserContext)

    function handleDelete(id) {
        const preDeleteComments = comments
        // is this ^ method ok? Should they have the same reference in memory? It works so I'm assuming it's good for now
        deleteComment(id).then(() => {
        setComments((currComments) => {
            return currComments.filter((currComment) => {
                return currComment !== comment
            })
        })
        }).catch((err) => {
            setIsErr(true)
            setComments(preDeleteComments)
        })
    }   
       
    if (user.username === comment.author) {
        return (
            <>
            <button onClick={() => {
                handleDelete(comment.comment_id)
            }}>❌</button>
            {isErr ? <p>{errorMsg}</p> : <p></p>}
            </>
        )
    }
}
