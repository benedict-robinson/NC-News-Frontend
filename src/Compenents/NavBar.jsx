import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticlesByTopic, getTopics } from "../api";
import NavList from "./NavList";


export default function NavBar() {
  

  return (
    <NavList />
  )
}
