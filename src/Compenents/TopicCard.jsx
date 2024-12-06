import { Link } from "react-router-dom";

export default function TopicCard({topic}) {
  return (
    <Link to={`/${topic.slug}/articles`}>
    <li id="topic-card">
        <h2>{topic.slug}</h2>
        <p>{topic.description}</p>
    </li>
    </Link>
  )
}
