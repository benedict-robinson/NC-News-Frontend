import ArticlesList from "./ArticlesList";
import "../CSS/loader.css"


export default function Home({articles, setCurrentArticle, isLoading}) {

  if (isLoading) {
    return (
      <span className="loader"></span>
    )
  }

  return (
    <>
    <ArticlesList articles={articles} setCurrentArticle={setCurrentArticle}/>
    </>
  )
}
