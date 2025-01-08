import { useContext, useState } from "react"
import { postUser } from "../api.js"
import { UserContext } from "../Contexts/UserContext.jsx"
import { useNavigate } from "react-router-dom"

export default function SignInForm() {
  const [newUser, setNewUser] = useState({})
  const { setUser } = useContext(UserContext)
  const [usernameErr, setUsernameErr] = useState("")
  const [isErr, setIsErr] = useState(false)
  const navigate = useNavigate()

  function handleInput(e) {
    const key = e.target.id
    const value = e.target.value
    setNewUser({ ...newUser, [key]: value })
    if (key === "avatar_url") {
      const file = e.target.files[0]
      const imageUrl = URL.createObjectURL(file)
      setNewUser({ ...newUser, [key]: imageUrl })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const regexUsername = /[^a-z0-9_-]/gi
    if (regexUsername.test(newUser.username)) {
      setUsernameErr("Username contains invalid characters. Must only contain letters, numbers, '_' or '-'")
    }
    else {
      postUser(newUser)
        .then((response) => {
          setUser(response)
          navigate("/")
        })
        .catch((err) => {
          console.log(err)
          setIsErr(true)
        })
    }
  }

  if (isErr) {
    return (
      <h2>Could not create user. Please refresh to try again</h2>
    )
  }

  return (
    <div>
      <form>
        <label>Create New User</label>
        <input type="text" id="username" placeholder="Username..." onChange={handleInput}></input><span>{usernameErr}</span>
        <input type="text" id="name" placeholder="Name..." onChange={handleInput}></input>
        <input type="file" id="avatar_url" accept="image/*" onChange={handleInput} />
      </form>
      <button onClick={handleSubmit} disabled={!newUser.username || !newUser.name}>Create User</button>
    </div>
  )
}
