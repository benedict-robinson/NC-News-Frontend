import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ArticlePage from './ArticlePage'
import Topics from './Topics'
import SignInUserPage from './SignInUserPage';
import UserPage from './UserPage';
import ArticlesByTopic from './ArticlesByTopic';
import { useState } from 'react';

export default function StateManager() {
const [sortQuery, setSortQuery] = useState("")
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home sortQuery={sortQuery} setSortQuery={setSortQuery}/>} />
        <Route path="/articles" element={<Home sortQuery={sortQuery} setSortQuery={setSortQuery}/>} />
        <Route path="/topics" element={<Topics />} />
        <Route path={`/articles/:article_id`} element={<ArticlePage />}/>
        <Route path="/sign-in" element={<SignInUserPage />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/:topic_slug/articles" element={<ArticlesByTopic sortQuery={sortQuery}/>}/>
    </Routes>
    </div>
  )
}
