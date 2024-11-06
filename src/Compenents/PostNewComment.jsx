import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { postNewComment } from "../api"

export default function PostNewComment({id, setComments}) {
    const [commentInProgress, setCommentInProgress] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const { user } = useContext(UserContext)

    function handleChange(event) {
        setCommentInProgress(event.target.value)
    } 
    
    function handleSubmit() {
        const newComment = {
            body: commentInProgress,
            author: user.username,
            votes: 0,
            created_at: Date.now()
        }
        

        setCommentInProgress("")
        
        postNewComment(id, newComment).then(() => {
            setComments((currComments) => {
                return [newComment, ...currComments]
            })
        }).catch((err) => {
            setErrorMsg("Couldn't Post Comment - Please Try Again")
            setCommentInProgress(newComment.body)
            setComments((currComments) => {
                return currComments.slice(1)
            })
        })
    }
   
  return (
    <div>
        <input id="new-comment-box" type="text" value={commentInProgress} placeholder="Have Your Say On This Article..." onChange={handleChange} onKeyDown={(event) => {
            if (event.key === "Enter") {
                handleSubmit()
            }
        }}></input>
        <button onClick={handleSubmit}>Post</button>
        <br></br>
        <p>{errorMsg}</p>
    </div>
  )
}
