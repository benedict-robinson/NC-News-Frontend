import { getUsers, patchUser } from "../api"
import "../CSS/user-page-buttons.css"

export default function UserEditAndSignOut({ isEditing, setIsEditing, user, setUser, oldUser, setOldUser }) {

  function submitEdits() {
    if (isEditing) {
      setOldUser(user)
      patchUser(user, user.username)
      .then((response) => {
        console.log(response)
      })
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
