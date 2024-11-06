import { useParams } from "react-router-dom"
import { fetchArticlesByTopic } from "../api"
import { useEffect, useState } from "react"
import ArticlesList from "./ArticlesList"

export default function ArticlesByTopic() {
    const [articlesByTopic, setArticlesByTopic] = useState([])
    const { topic_slug } = useParams()
    const topicTitle = `${topic_slug[0].toUpperCase()}${topic_slug.slice(1)}`

    useEffect(() => {
        fetchArticlesByTopic(topic_slug).then((response) => {
            setArticlesByTopic(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <div>
        <h2>{topicTitle} Articles</h2>
        <ArticlesList articles={articlesByTopic}/>
    </div>
  )
}
