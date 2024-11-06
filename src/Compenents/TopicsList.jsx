import TopicCard from "./TopicCard"

export default function TopicsList({topics}) {

  return (
    <ul>
        {topics.map((topic, index) => {
            return <TopicCard key={index} topic={topic}/>
        })}
    </ul>
  )
}
