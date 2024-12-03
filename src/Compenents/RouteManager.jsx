import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ArticlePage from './ArticlePage'
import Topics from './Topics'
import SignInUserPage from './SignInUserPage';
import UserPage from './UserPage';
import ArticlesByTopic from './ArticlesByTopic';
import { useState } from 'react';
import NewTopic from './NewTopic';
import ErrorHandle from './ErrorHandle';

export default function StateManager() {
  
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path={`/articles/:article_id`} element={<ArticlePage />}/>
        <Route path="/sign-in" element={<SignInUserPage />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/newtopic" element={<NewTopic />}/>
        <Route path="/:topic_slug/articles" element={<ArticlesByTopic />}/>
        <Route path="*" element={<ErrorHandle error={"Invalid Route"}/>} />
    </Routes>
    </div>
  )
}
