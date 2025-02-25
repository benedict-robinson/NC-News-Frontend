import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ArticlePage from './ArticlePage'
import Topics from './Topics'
import SignInUserPage from './SignInUserPage';
import UserPage from './UserPage';
import ArticlesByTopic from './ArticlesByTopic';
import NewTopic from './NewTopic';
import ErrorHandle from './ErrorHandle';
import NewArticle from './NewArticle';
import SignInForm from './SignInForm.jsx';

export default function StateManager() {
  
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path={`/articles/:article_id`} element={<ArticlePage />}/>
        <Route path="/sign-in" element={<SignInUserPage />}/>
        <Route path="/sign-in-form" element={<SignInForm />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/newtopic" element={<NewTopic />}/>
        <Route path="/:topic_slug/articles" element={<ArticlesByTopic />}/>
        <Route path="*" element={<ErrorHandle error={"Invalid Route"}/>} />
        <Route path="/newArticle" element={<NewArticle />} />
    </Routes>
    </div>
  )
}
