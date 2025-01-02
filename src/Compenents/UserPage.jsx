import { useContext, useState, useEffect } from "react"
import { UserContext } from "../Contexts/UserContext"
import { fetchArticles, fetchCommentsByUsername } from "../api"
import ArticleCard from "./ArticleCard"
import "../CSS/loader.css"
import UserEditAndSignOut from "./UserEditAndSignOut"
import "../CSS/user-page.css"

export default function UserPage() {
  const { user } = useContext(UserContext)
  const [userComments, setUserComments] = useState([])
  const [userArticles, setUserArticles] = useState([])
  const [articleVotes, setArticleVotes] = useState(0)
  const [commentVotes, setCommentVotes] = useState(0)
  const [mostPopularArticle, setMostPopularArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)

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
    const highestVotedArticle = [...userArticles].sort((a, b) => b.votes - a.votes).slice(0, 1)[0]

    setArticleVotes(totalArticleVotes)
    setCommentVotes(totalCommentVotes)
    setMostPopularArticle(highestVotedArticle || null)
    setIsLoading(false)
  }, [userArticles, userComments])

  if (isLoading) {
    return (
      <span className="loader"></span>
    )
  }

  return (
    <section className="profile-page">
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-names">
            <h2>{user.username}<span>{isEditing ? <button id="edit-button">✏️</button> : <></>}</span></h2>
            <p>{user.name}<span>{isEditing ? <button id="edit-button">✏️</button> : <></>}</span></p>
          </div>
          <div className="stats">
            <h3>Stats</h3>
            <p id="stat-name">Articles &nbsp; <span id="stat-value">{userArticles.length}</span></p>
            <p id="stat-name">Votes on Articles &nbsp; <span id="stat-value">{articleVotes}</span></p>
            <p id="stat-name">Comments &nbsp; <span id="stat-value">{userComments.length}</span></p>
            <p id="stat-name">Votes on Comments &nbsp; <span id="stat-value">{commentVotes}</span></p>
            <p id="stat-name">Total Votes &nbsp; <span id="stat-value">{commentVotes + articleVotes}</span></p>
          </div>
        </div>
        <div className="profile-right">
          <UserEditAndSignOut className="user-controls" isEditing={isEditing} setIsEditing={setIsEditing}/>
          <img src={user.avatar_url} alt={user.username} />
          {isEditing ? <button id="edit-button">✏️</button> : <></>}
          <div className="most-popular-article">
            <h3>Most Popular Article</h3>
            {mostPopularArticle ? <ArticleCard article={mostPopularArticle} key={mostPopularArticle.article_id} id="user-page-article" /> : <p>No Articles Yet</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
