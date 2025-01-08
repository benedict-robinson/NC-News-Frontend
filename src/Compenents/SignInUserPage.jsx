import SignInForm from "./SignInForm";
import { useState, useEffect } from "react"
import { getUsers } from "../api"
import "../CSS/loader.css"
import { Link } from "react-router-dom";

export default function SignInUserPage() {
  const [users, setUsers] = useState([])
  const [isErr, setIsErr] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <span className="loader"></span>
    )
  }

  return (
    <div>
      <h2>Users</h2>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <img src={user.avatar_url}/>
            <h3>{user.username}</h3>
          </div>
        )
      })}
      <Link to="/sign-in-form">
      <button>Create New User</button>
      </Link>
    </div>
  )
}
