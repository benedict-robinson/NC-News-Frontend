import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticlesByTopic, getTopics } from "../api";
import NavList from "./NavList";


export default function NavBar() {
  const [allTopics, setAllTopics] = useState([])

  useEffect(() => {
    getTopics().then((topics) => {
      topics.map(({slug}) => {
        return fetchArticlesByTopic(slug, "").then((response) => {
          if (response.length > 0) {
          setAllTopics((currAllTopics) => {
            return [...currAllTopics, {topicSlug: response[0].topic, amount: response.length}]
          })
        }
        })
        })
    })
  }, [])
  

  return (
    <NavList allTopics={allTopics}/>
  )
}
