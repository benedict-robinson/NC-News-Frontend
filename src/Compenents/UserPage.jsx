import { useContext, useState, useEffect } from "react"
import { UserContext } from "../Contexts/UserContext"
import { fetchArticles, fetchCommentsByUsername, getUsers, patchUser } from "../api"
import ArticleCard from "./ArticleCard"
import "../CSS/loader.css"
import UserEditAndSignOut from "./UserEditAndSignOut"
import "../CSS/user-page.css"
import Stats from "./Stats"

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
  const [editImg, setEditImg] = useState(false)
  const [newName, setNewName] = useState("")
  const [newImg, setNewImg] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [articlesErr, setArticlesErr] = useState(false)
  const [commentsErr, setCommentsErr] = useState(false)

  useEffect(() => {
    fetchCommentsByUsername(user.username)
      .then(({ comments }) => {
        setUserComments(comments)
        setCommentsErr(false)
      })
      .catch((err) => {
        setCommentsErr(true)
        console.log(err)
      })
    fetchArticles("")
      .then((articles) => {
        setUserArticles(articles.filter(article => article.author === user.username))
        setArticlesErr(false)
      })
      .catch((err) => {
        setArticlesErr(true)
        console.log(err)
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
    if (editImg) {
      setUser(curr => {
        const newObj = {...curr}
        newObj.avatar_url = newImg
        return newObj
      })
    }
    setEditImg(curr => !curr)
  }
  function updateImg(e) {
    const file = e.target.files[0]
    const imageUrl = URL.createObjectURL(file)
    setNewImg(imageUrl)
  }

  if (isLoading) {
    return (
      <span className="loader"></span>
    )
  }

  if (errMsg) {
    return (
      <p>{errMsg}</p>
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
          {!articlesErr && !commentsErr ? <Stats userArticles={userArticles} articleVotes={articleVotes} userComments={userComments} commentVotes={commentVotes}/> : <p>Error - Failed to Load Stats</p>}
        </div>
        <div className="profile-right">
          <UserEditAndSignOut className="user-controls" isEditing={isEditing} setIsEditing={setIsEditing} user={user} setUser={setUser} setErrMsg={setErrMsg}/>
          <img src={!editImg ? user.avatar_url : newImg} alt={user.username} />
          {isEditing ? <button id="edit-button" onClick={handleImgEdit}>{!editImg ? "✏️" : "Save"}</button> : <></>}
          {!editImg ? <></> : <input type="file" id="article_img_url" accept="image/*" onChange={updateImg}/>}
          <div className="most-popular-article">
            <h3>Most Popular Article</h3>
            {mostPopularArticle ? <ArticleCard article={mostPopularArticle} key={mostPopularArticle.article_id} id="user-page-article" /> : <p>No Articles Yet</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
