import { Link } from "react-router-dom";
import NavBarCard from "./NavBarCard";

export default function NavList({allTopics}) {
    const midPoint = allTopics.length / 2
    const hotTopics = allTopics.slice(0, midPoint).sort((a, b) => b.amount - a.amount).slice(0, 3)
    
  return (
    <div>
        <ul>
          <Link to="/topics">
            <li>All Topics</li>
          </Link>
            {hotTopics.map((hotTopic) => {
                return <NavBarCard topic={hotTopic} key={hotTopic.topicSlug}/>
            })}
            <li>Create New Topic +</li>
        </ul>
    </div>
  )
}
