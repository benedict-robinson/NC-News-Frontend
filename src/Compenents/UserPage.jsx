import { useContext, useState, useEffect } from "react"
import { UserContext } from "../Contexts/UserContext"
import { fetchArticles, fetchCommentsByUsername, getUsers, patchUser } from "../api"
import ArticleCard from "./ArticleCard"
import "../CSS/loader.css"
import UserEditAndSignOut from "./UserEditAndSignOut"
import "../CSS/user-page.css"

export default function UserPage() {
  const { user, setUser } = useContext(UserContext)
  const [userComments, setUserComments] = useState([])
  const [userArticles, setUserArticles] = useState([])
  const [articleVotes, setArticleVotes] = useState(0)
  const [commentVotes, setCommentVotes] = useState(0)
  const [mostPopularArticle, setMostPopularArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState(false)
  const [newName, setNewName] = useState("")

  useEffect(() => {
    fetchCommentsByUsername(user.username)
      .then(({ comments }) => {
        setUserComments(comments)
      })
    fetchArticles("")
      .then((articles) => {
        setUserArticles(articles.filter(article => article.author === user.username))
      })
  }, [user])

  useEffect(() => {
    const totalArticleVotes = userArticles.reduce((total, article) => total + article.votes, 0)
    const totalCommentVotes = userComments.reduce((total, comment) => total + comment.votes, 0)
    const highestVotedArticle = [...userArticles].sort((a, b) => b.votes - a.votes).slice(0, 1)[0]

    setArticleVotes(totalArticleVotes)
    setCommentVotes(totalCommentVotes)
    setMostPopularArticle(highestVotedArticle || null)
    setIsLoading(false)
  }, [user, userArticles, userComments])

  function handleNameEdit() {
    if (editName) {
      setUser(curr => {
        const newObj = {...curr}
        newObj.name = newName
        return newObj
      })
    }
    setEditName(curr => !curr)
  }
  function updateName(e) {
    setNewName(e.target.value)
  }
  function handleImgEdit() {

  }

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
            <h2>{user.username}</h2>
            {!editName ?
              <p>{user.name}<span>{isEditing ? <button id="edit-button" onClick={handleNameEdit}>{!editName ? "✏️" : "Save"}</button> : <></>}</span></p> :
              <>
                <input id="name" type="text" placeholder={`Set Name...`} onChange={updateName}></input><span>{isEditing ? <button id="edit-button" onClick={handleNameEdit}>{!editName ? "✏️" : "Save"}</button> : <></>}</span>
              </>
            }
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
          <UserEditAndSignOut className="user-controls" isEditing={isEditing} setIsEditing={setIsEditing} user={user} setUser={setUser} />
          <img src={user.avatar_url} alt={user.username} />
          {isEditing ? <button id="edit-button" onClick={handleNameEdit}>✏️</button> : <></>}
          <div className="most-popular-article">
            <h3>Most Popular Article</h3>
            {mostPopularArticle ? <ArticleCard article={mostPopularArticle} key={mostPopularArticle.article_id} id="user-page-article" /> : <p>No Articles Yet</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
