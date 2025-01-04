import { useEffect, useState } from "react"
import { getUsers, patchUser } from "../api"
import "../CSS/user-page-buttons.css"

export default function UserEditAndSignOut({ isEditing, setIsEditing, user, setUser }) {
  const [oldUser, setOldUser] = useState({})

  useEffect(() => {
    setOldUser({...user})
  }, [user.username])

  function submitEdits() {
    if (isEditing) {
      setOldUser(user)
      patchUser(user, user.username)
      .catch((err) => {
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
    console.log("working - signOut")
  }

  return (
    <div className='edit-sign-out-buttons'>
        <button onClick={submitEdits}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={isEditing ? exit : signOut}>{isEditing ? "Exit" : "Sign Out"}</button>
    </div>
  )
}
