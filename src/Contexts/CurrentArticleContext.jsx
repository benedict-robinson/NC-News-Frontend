import { createContext, useEffect, useState } from "react";

const getCurrentArticle = () => {
    const article = sessionStorage.getItem("currentArticle")
    return article ? JSON.parse(article) : {article_id: 0}
}

export const CurrentArticleContext = createContext();

export const CurrentArticleProvider = ({ children }) => {
  const [currentArticle, setCurrentArticle] = useState(getCurrentArticle);
  
  useEffect(() => {
    sessionStorage.setItem("currentArticle", JSON.stringify(currentArticle))
  }, [currentArticle])


  return (
    <CurrentArticleContext.Provider value={{currentArticle, setCurrentArticle}}>
      {children}
    </CurrentArticleContext.Provider>
  );
};