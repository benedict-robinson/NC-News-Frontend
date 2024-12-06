import { useParams, useSearchParams } from "react-router-dom"
import { fetchArticlesByTopic, getTopics } from "../api"
import { useEffect, useState } from "react"
import ArticlesList from "./ArticlesList"
import ErrorHandle from "./ErrorHandle"
import "../CSS/loader.css"
import SortBy from "./SortBy"

export default function ArticlesByTopic() {
    const [articlesByTopic, setArticlesByTopic] = useState([])
    const { topic_slug } = useParams()
    const [searchParams] = useSearchParams()
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")
    const [slugs, setSlugs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const query = `&${sortByQuery ? `sort_by=${sortByQuery}` : `order=${orderQuery}`}${sortByQuery && orderQuery ? `&order=${orderQuery}` : ""}`

    const topicTitle = `${topic_slug[0].toUpperCase()}${topic_slug.slice(1)}`
    const secondaryQueries = sortByQuery || orderQuery ? query : ""
    
    useEffect(() => {
        getTopics().then((response) => {
            const topicSlugs = response.map(topic => {
                return topic.slug
            })
            setSlugs(topicSlugs)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [searchParams])

    useEffect(() => {
        fetchArticlesByTopic(topic_slug, secondaryQueries).then((response) => {
            setArticlesByTopic(response)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
        })
    }, [searchParams, topic_slug])

    if (isLoading) {
    return (
        <span className="loader"></span>
    )
    }

  if (!slugs.includes(topic_slug)) {
    return (
        <ErrorHandle error={"Non-Existent Topic"}/>
    )
  }
    
  if (articlesByTopic.length === 0) {
    return (
        <div>
            <h2>{topicTitle} Articles</h2>
            <p>Seems a little quiet over here. Go to 'Write New Article' to get this topic started</p>
        </div>
      )
  }

  return (
    <section>
        <h2 id="topic-title" >{topicTitle} Articles</h2>
        <SortBy />
        <ArticlesList articles={articlesByTopic}/>
    </section>
  )
}
