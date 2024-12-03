import { Link } from "react-router-dom"

export default function NavBarCard({topic}) {

    const topicTitle = `${topic[0].toUpperCase()}${topic.slice(1)}`
    
  return (
    <Link to={`/${topic}/articles`}>
    <li>{topicTitle}</li>
    </Link>
  )
}
