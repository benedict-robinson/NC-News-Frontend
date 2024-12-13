import { useContext } from "react";
import SignInUserButon from "./SignInUserButon";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import "../CSS/new-article-button.css"
import ThemeToggle from "./ThemeToggle";

export default function PostAndSignIn() {
  const {user} = useContext(UserContext)
  if (!user) {
  return (
    <div className="post-sign-buttons">
        <button>Write New Article</button>
        <SignInUserButon />
    </div>
  )
  }
  return (
    <div className="post-sign-buttons">
        <button id="new-article-button">Write New Article</button>
        <Link to="/user">
        <img src={user.avatar_url} id="user-image"/>
        </Link>
        <ThemeToggle />
    </div>
  )
}
