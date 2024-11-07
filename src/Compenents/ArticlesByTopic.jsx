import { useParams, useSearchParams } from "react-router-dom"
import { fetchArticlesByTopic } from "../api"
import { useEffect, useState } from "react"
import ArticlesList from "./ArticlesList"

export default function ArticlesByTopic() {
    const [articlesByTopic, setArticlesByTopic] = useState([])
    const { topic_slug } = useParams()
    const [searchParams] = useSearchParams()
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")

    const query = `&${sortByQuery ? `sort_by=${sortByQuery}` : `order=${orderQuery}`}${sortByQuery && orderQuery ? `&order=${orderQuery}` : ""}`

    const topicTitle = `${topic_slug[0].toUpperCase()}${topic_slug.slice(1)}`
    const secondaryQueries = sortByQuery || orderQuery ? query : ""
    useEffect(() => {
        fetchArticlesByTopic(topic_slug, secondaryQueries).then((response) => {
            setArticlesByTopic(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [searchParams])

  return (
    <div>
        <h2>{topicTitle} Articles</h2>
        <ArticlesList articles={articlesByTopic}/>
    </div>
  )
}
