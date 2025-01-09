import { Link } from "react-router-dom"
import "../CSS/sign-in-button.css"

export default function SignInUserButon() {
  return (
    <Link to="/sign-in">
    <button id="sign-in-button">Sign In</button>
    </Link>
  )
}
