import ArticlesList from "./ArticlesList";
import "../CSS/loader.css"


export default function Home({articles, setCurrentArticle, isLoading}) {

  if (isLoading) {
    return (
      <span class="loader"></span>
    )
  }

  return (
    <>
    <ArticlesList articles={articles} setCurrentArticle={setCurrentArticle}/>
    </>
  )
}
