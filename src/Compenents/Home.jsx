import ArticlesList from "./ArticlesList";


export default function Home({articles, setCurrentArticle}) {
  return (
    <>
    <ArticlesList articles={articles} setCurrentArticle={setCurrentArticle}/>
    </>
  )
}
