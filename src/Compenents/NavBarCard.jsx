import { Link } from "react-router-dom"

export default function NavBarCard({topic}) {

    const topicTitle = `${topic.topicSlug[0].toUpperCase()}${topic.topicSlug.slice(1)}`
    
  return (
    <Link to={`/${topic.topicSlug}/articles`}>
    <li>{topicTitle}</li>
    </Link>
  )
}
