import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ArticlePage from './ArticlePage'
import Topics from './Topics'
import SignInUserPage from './SignInUserPage';
import UserPage from './UserPage';

export default function StateManager() {

    // const getCurrentArticle = () => {
    //     const article = sessionStorage.getItem("currentArticle")
    //     return article ? JSON.parse(article) : {article_id: 0}
    // }
    
    // const [currentArticle, setCurrentArticle] = useState(getCurrentArticle);
    // useEffect(() => {
    //     sessionStorage.setItem("currentArticle", JSON.stringify(currentArticle))
    // }, [currentArticle])


  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path={`/articles/:article_id`} element={<ArticlePage />}/>
        <Route path="/sign-in" element={<SignInUserPage />}/>
        <Route path="/user" element={<UserPage />}/>
    </Routes>
    </div>
  )
}
