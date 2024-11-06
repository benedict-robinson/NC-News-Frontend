import { useEffect, useState } from "react"
import { patchArticleVoteCount } from "../api"

export default function ArticleVotes({id, initialVotes}) {
    const [voteCount, setVoteCount] = useState(0)
    const [isPressedUp, setIsPressedUp] = useState(false)
    const [isPressedDown, setIsPressedDown] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
        setVoteCount(initialVotes)
    }, [])

    function upVote(id) {
        let num = 1
        if (isPressedDown) num = 2
        if (isPressedUp) {
            setVoteCount((currVoteCount) => currVoteCount - 1)
            setIsPressedUp(false)
            patchArticleVoteCount(id, {inc_vote: -1}).catch((err) => {
                setVoteCount((currVoteCount) => currVoteCount + 1)
                setError("Vote Failed - Please Try Again")
                setIsPressedUp(true)
            })
        }
        else {
            setVoteCount((currVoteCount) => currVoteCount + num)
            setIsPressedUp(true)
            setIsPressedDown(false)
            patchArticleVoteCount(id, {inc_vote: num}).catch((err) => {
                setVoteCount((currVoteCount) => currVoteCount - num)
                setError("Vote Failed - Please Try Again")
                setIsPressedUp(false)
            })
        }
    }

    function downVote(id) {
        let num = 1
        if (isPressedUp) num = 2
        if (isPressedDown) {
            setVoteCount((currVoteCount) => currVoteCount + 1)
            setIsPressedDown(false)
            patchArticleVoteCount(id, {inc_vote: 1}).catch((err) => {
                setVoteCount((currVoteCount) => currVoteCount - 1)
                setError("Vote Failed - Please Try Again")
                setIsPressedDown(true)
            })
        }
        else {
            setVoteCount((currVoteCount) => currVoteCount - num)
            setIsPressedDown(true)
            setIsPressedUp(false)
            patchArticleVoteCount(id, {inc_vote: -num}).catch((err) => {
                setVoteCount((currVoteCount) => currVoteCount + num)
                setError("Vote Failed - Please Try Again")
                setIsPressedDown(false)
            })
        }
    }

  return (
    <div>
        <label>Total Votes: {voteCount} &nbsp; </label>
        <button onClick={() => {
            upVote(id)
        }} className={isPressedUp ? "button-pressed" : ""}>⬆️</button>
        <button onClick={() => {
            downVote(id)
        }} className={isPressedDown ? "button-pressed" : ""}>⬇️</button>
        <p>{error}</p>  
    </div>
  )
}
