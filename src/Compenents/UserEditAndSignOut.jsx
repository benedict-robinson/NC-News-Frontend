import { useEffect, useState } from "react"
import { patchUser } from "../api"
import "../CSS/user-page-buttons.css"
import { useNavigate } from "react-router-dom"

export default function UserEditAndSignOut({ isEditing, setIsEditing, user, setUser, setErrMsg }) {
  const [oldUser, setOldUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    setOldUser({...user})
  }, [user.username])

  function submitEdits() {
    if (isEditing) {
      setOldUser(user)
      patchUser(user, user.username)
      .catch((err) => {
        setErrMsg("Error - Failed to update user. Please refresh to try again.")
        console.log(err)
      })
    }
    setIsEditing(curr => !curr)
  }

  function exit() {
    setUser(oldUser)
    setIsEditing(curr => !curr)
  }

  function signOut() {
    setUser({username: "not-a-username"})
    navigate("/sign-in")
  }

  return (
    <div className='edit-sign-out-buttons'>
        <button onClick={submitEdits}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={isEditing ? exit : signOut}>{isEditing ? "Exit" : "Sign Out"}</button>
    </div>
  )
}
