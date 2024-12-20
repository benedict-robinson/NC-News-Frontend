import { useEffect, useState } from "react"
import { deleteArticle } from "../api"



export default function ArticleDelete({ article_id }) {
    const errorMsg = "Couldn't Delete Comment - Please Try Again"
    const [isErr, setIsErr] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    function showAlertFunction() {
        setShowAlert(true)
    }   

    function handleDelete(id) {
        deleteArticle(id)
        .catch((err) => {
            setIsErr(true)
        })
    }

    return (
        <>
            <button id="vote-delete-buttons" onClick={() => {
                showAlertFunction()
            }}>❌</button>
            {showAlert ? <div><p>Are you sure you want to delete this article?</p><button id="vote-delete-buttons" onClick={() => {handleDelete(article_id)}}>Yes</button><button id="vote-delete-buttons" onClick={() => {setShowAlert(false)}}>No</button></div> : <></>}
            {isErr ? <p>{errorMsg}</p> : <p></p>}
        </>
    )
}
