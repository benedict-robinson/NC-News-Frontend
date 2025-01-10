import { useState, useEffect, useContext } from "react"
import { getUsers } from "../api"
import "../CSS/loader.css"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext.jsx";
import "../CSS/users-sign-in.css"

export default function SignInUserPage() {
  const [users, setUsers] = useState([])
  const [isErr, setIsErr] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response)
      })
      .catch((err) => {
        setIsErr(true)
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  function handleSignIn(userObj) {
    setUser(userObj)
    navigate("/")
  }

  if (isLoading) {
    return (
      <span className="loader"></span>
    )
  }

  if (isErr) {
    return (
      <>
      <h2>Could not load users. Please refresh to try again or create a new account</h2>
      <Link to="/sign-in-form">
      <button>Create New User</button>
      </Link>
      </>
    )
  }

  return (
    <div className="sign-in-container">
      <h2>Users</h2>
    <div className="users-container">
      {users.map((user, index) => {
        return (
          <div className="user-card" key={index} onClick={() => handleSignIn(user)}>
            <img src={user.avatar_url}/>
            <h3>{user.username}</h3>
          </div>
        )
      })}
      </div>
      <Link to="/sign-in-form">
      <button id="create-user-button">Create New User</button>
      </Link>
    </div>
  )
}
