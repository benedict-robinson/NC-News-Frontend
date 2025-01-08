import ArticlesList from "./ArticlesList";
import "../CSS/loader.css"
import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const sortByQuery = searchParams.get("sort_by")
  const orderQuery = searchParams.get("order")
  const query = `?${sortByQuery ? `sort_by=${sortByQuery}` : `order=${orderQuery}`}${sortByQuery && orderQuery ? `&order=${orderQuery}` : ""}`
  
  const [articles, setArticles] = useState([]);
  useEffect(() => {
          fetchArticles(sortByQuery || orderQuery ? query : "").then((response) => {
              setArticles(response)
          })
          .catch((err) => {
              console.log(err)
          })
          .finally(() => {
              setIsLoading(false)
          })
      }, [searchParams])

  if (isLoading) {
    return (
      <span className="loader"></span>
    )
  }

  return (
    <section>
      <div className="sticky-bar">
        <SortBy />
      </div>
    <ArticlesList articles={articles}/>
    </section>
  )
}
