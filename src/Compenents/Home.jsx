import ArticlesList from "./ArticlesList";
import "../CSS/loader.css"
import { useEffect, useState } from "react";
import { fetchArticles } from "../api";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const [articles, setArticles] = useState([]);
  useEffect(() => {
          fetchArticles().then((response) => {
              setArticles(response)
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
    <ArticlesList articles={articles}/>
  )
}
