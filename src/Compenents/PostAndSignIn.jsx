import { useContext } from "react";
import SignInUserButon from "./SignInUserButon";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import "../CSS/new-article-button.css"
import ThemeToggle from "./ThemeToggle";

export default function PostAndSignIn() {
  const { user } = useContext(UserContext)
  if (!user) {
    return (
      <div className="post-sign-buttons">
        <Link to="/newArticle" >
        <button>Write New Article</button>
        </Link>
        <SignInUserButon />
      </div>
    )
  }
  return (
    <div className="post-sign-buttons">
      <Link to="/newArticle" >
        <button id="new-article-button">Write New Article</button>
      </Link>
      <Link to="/user">
        <img src={user.avatar_url} id="user-image" />
      </Link>
      <ThemeToggle />
    </div>
  )
}
