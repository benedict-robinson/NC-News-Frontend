import { createContext, useEffect, useState } from "react";
import { fetchArticles } from "../api";

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
        fetchArticles().then((response) => {
            setArticles(response)
        })
    }, [])

  return (
    <ArticlesContext.Provider value={{articles, setArticles}}>
      {children}
    </ArticlesContext.Provider>
  );
};