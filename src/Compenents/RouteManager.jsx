import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ArticlePage from './ArticlePage'
import Topics from './Topics'
import SignInUserPage from './SignInUserPage';
import UserPage from './UserPage';
import ArticlesList from './ArticlesList';
import ArticlesByTopic from './ArticlesByTopic';

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
        <Route path="/:topic_slug/articles" element={<ArticlesByTopic />}/>
    </Routes>
    </div>
  )
}