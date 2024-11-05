import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function UserPage() {
    const { user } = useContext(UserContext)
  return (
    <div>
        <h2>{user.username}</h2>
        <p>{user.name}</p>
        <img src={user.avatar_url} />
    </div>
  )
}
