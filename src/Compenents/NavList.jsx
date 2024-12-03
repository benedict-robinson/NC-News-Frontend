import { Link } from "react-router-dom";
import NavBarCard from "./NavBarCard";

export default function NavList() {
  const navTopics = ["football", "cooking", "coding"]
    
  return (
    <div>
        <ul>
          <Link to="/topics">
            <li>All Topics</li>
          </Link>
            {navTopics.map((navTopic) => {
                return <NavBarCard topic={navTopic} key={navTopic}/>
            })}
            <Link to="/newtopic">
            <li>Create New Topic +</li>
            </Link>
        </ul>
    </div>
  )
}
