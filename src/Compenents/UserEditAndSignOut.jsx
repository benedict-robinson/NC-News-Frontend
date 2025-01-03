import { getUsers } from "../api"
import "../CSS/user-page-buttons.css"

export default function UserEditAndSignOut({ isEditing, setIsEditing }) {
  return (
    <div className='edit-sign-out-buttons'>
        <button onClick={() => {setIsEditing(curr => !curr)}}>{isEditing ? "Save" : "Edit"}</button>
        <button>Sign Out</button>
    </div>
  )
}
