import { useEffect, useState } from "react"
import { getTopics } from "../api"
import TopicsList from "./TopicsList"

export default function Topics() {
  const [topics, setTopics] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return (
      <span className="loader"></span>
    )
  }

  return (
    <section>
      <h2>Topics</h2>
      <div className="topic-list-container">
      <TopicsList topics={topics}/>
      </div>
    </section>
  )
}
