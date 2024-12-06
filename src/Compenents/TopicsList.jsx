import TopicCard from "./TopicCard"

export default function TopicsList({topics}) {

  return (
    <ul className="topics-list">
        {topics.map((topic, index) => {
            return <TopicCard key={index} topic={topic}/>
        })}
    </ul>
  )
}
