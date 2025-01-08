import { useContext } from "react";
import SignInUserButon from "./SignInUserButon";
import { UserContext } from "../Contexts/UserContext"
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import WriteNewArticleButton from "./WriteNewArticleButton";

export default function PostAndSignIn() {
  const { user } = useContext(UserContext)
  if (user.username === "not-a-username") {
    return (
      <div className="post-sign-buttons">
        <WriteNewArticleButton />
        <SignInUserButon />
        <ThemeToggle />
      </div>
    )
  }
  return (
    <div className="post-sign-buttons">
      <WriteNewArticleButton />
      <Link to="/user">
        <img src={user.avatar_url} id="user-image" />
      </Link>
      <ThemeToggle />
    </div>
  )
}
