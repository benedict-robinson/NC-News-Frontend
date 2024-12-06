import { useEffect, useState } from "react"
import { getTopics } from "../api"
import TopicsList from "./TopicsList"

export default function Topics() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <section>
      <h2>Topics</h2>
      <div className="topic-list-container">
      <TopicsList topics={topics}/>
      </div>
    </section>
  )
}
