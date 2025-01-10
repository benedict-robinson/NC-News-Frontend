import ArticlesList from "./ArticlesList";
import "../CSS/loader.css"
import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const sortByQuery = searchParams.get("sort_by") ? `sort_by=${searchParams.get("sort_by")}` : ""
  const orderQuery = searchParams.get("order") ? `order=${searchParams.get("order")}` : ""
  const searchTerm = searchParams.get("search")
  const searchQuery = searchTerm ? `search=${searchTerm}` : ""
  const query = queryMaker(searchQuery, sortByQuery, orderQuery)
  
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    console.log(searchTerm)
          fetchArticles(query).then((response) => {
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
        <SortBy searchTerm={searchTerm}/>
      </div>
    <ArticlesList articles={articles} searchTerm={searchTerm}/>
    </section>
  )
}


function queryMaker(a = "", b = "", c ="") {
  const query = `?${a}${a ? "&" : ""}${b}${b ? "&" : ""}${c}`
  if (query === "?") return ""
  if (query[query.length - 1] === "&") {
    return query.slice(0, -1)
  }
  return query
}
