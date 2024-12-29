import { useContext, useState, useEffect } from "react"
import { UserContext } from "../Contexts/UserContext"
import { fetchArticles, fetchCommentsByUsername } from "../api"

export default function UserPage() {
  const { user } = useContext(UserContext)
  const [userComments, setUserComments] = useState([])
  const [userArticles, setUserArticles] = useState([])
  const [articleVotes, setArticleVotes] = useState(0)
  const [commentVotes, setCommentVotes] = useState(0)

  useEffect(() => {
    fetchCommentsByUsername(user.username)
      .then(({ comments }) => {
        setUserComments(comments)
      })
    fetchArticles("")
      .then((articles) => {
        setUserArticles(articles.filter(article => article.author === user.username))
      })
  }, [])

  useEffect(() => {
    const totalArticleVotes = userArticles.reduce((total, article) => total + article.votes, 0)
    const totalCommentVotes = userComments.reduce((total, comment) => total + comment.votes, 0)

    setArticleVotes(totalArticleVotes)
    setCommentVotes(totalCommentVotes)
  }, [userArticles, userComments])

  return (
    <div>
      <h2>{user.username}</h2>
      <p>{user.name}</p>
      <img src={user.avatar_url} />
      <p>Articles: &nbsp; {userArticles.length}</p>
      <p>Votes on Articles: &nbsp; {articleVotes}</p>
      <p>Comments: &nbsp; {userComments.length}</p>
      <p>Votes on Comments: &nbsp; {commentVotes}</p>
      <p>Total Votes: &nbsp; {commentVotes + articleVotes}</p>
    </div>
  )
}
