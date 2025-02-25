import { useParams, useSearchParams } from "react-router-dom"
import { fetchArticlesByTopic, getTopics } from "../api"
import { useEffect, useState } from "react"
import ArticlesList from "./ArticlesList"
import ErrorHandle from "./ErrorHandle"
import "../CSS/loader.css"
import SortBy from "./SortBy"
import WriteNewArticleButton from "./WriteNewArticleButton"

export default function ArticlesByTopic() {
    const [articlesByTopic, setArticlesByTopic] = useState([])
    const { topic_slug } = useParams()
    const [searchParams] = useSearchParams()
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")
    const [slugs, setSlugs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currTopic, setCurrTopic] = useState([])
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1400);
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1100);
            setIsTablet(window.innerWidth <=900)
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const query = `&${sortByQuery ? `sort_by=${sortByQuery}` : `order=${orderQuery}`}${sortByQuery && orderQuery ? `&order=${orderQuery}` : ""}`

    const topicTitle = `${topic_slug[0].toUpperCase()}${topic_slug.slice(1)}`
    const secondaryQueries = sortByQuery || orderQuery ? query : ""

    useEffect(() => {
        setIsLoading(true)
        getTopics().then((response) => {
            const current = response.filter(topic => topic.slug === topic_slug)
            setCurrTopic(current)
            const topicSlugs = response.map(topic => {
                return topic.slug
            })
            setSlugs(topicSlugs)
        })
            .then(() => {
                fetchArticlesByTopic(topic_slug, secondaryQueries).then((response) => {
                    setArticlesByTopic(response)
                })
                    .then(() => {
                        setIsLoading(false)
                    })
            })
            .catch((err) => {
                setIsLoading(false)
                console.log(err)
            })
    }, [searchParams, topic_slug])


    if (isLoading) {
        return (
            <span className="loader"></span>
        )
    }

    if (!slugs.includes(topic_slug)) {
        return (
            <ErrorHandle error={"Non-Existent Topic"} />
        )
    }

    if (articlesByTopic.length === 0) {
        return (
            <div>
                <h2>{topicTitle} Articles</h2>
                <p>Seems a little quiet over here. Go to &nbsp;
                    <WriteNewArticleButton topic={topic_slug} />
                    &nbsp; to get this topic started</p>
            </div>
        )
    }

    return (
        <section>
            <div className="topic-titles">
                {!isTablet ? <h2 id="topic-title" >{topicTitle} Articles</h2> : ""}
                {isDesktop ? <p id="topic-desc" >{currTopic[0].description}</p> : <></>}
            </div>
            <div className="sticky-bar">
                <SortBy />
            </div>
            <ArticlesList articles={articlesByTopic} topic={topicTitle} isTablet={isTablet}/>
        </section>
    )
}
