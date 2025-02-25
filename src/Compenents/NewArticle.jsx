import { useEffect, useState, useContext } from "react"
import { getTopics, postArticle } from "../api"
import { UserContext } from "../Contexts/UserContext"
import ArticlePostedAlert from "./ArticlePostedAlert"
import { useLocation } from "react-router-dom"
import "../CSS/post-article-button.css"

export default function NewArticle() {
    const location = useLocation()
    const { topic } = location.state || ""
    const [topics, setTopics] = useState([])
    const { user } = useContext(UserContext)
    const [newArticle, setNewArticle] = useState({
        author: user.username,
        votes: 0,
        topic: topic || null
    })
    const [showAlert, setShowAlert] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [errMsg, setErrMsg] = useState("")
    const [newArticleId, setNewArticleId] = useState(null)

    useEffect(() => {
        getTopics().then((response) => {
            setTopics(response)
            setIsLoading(false)
        })
        .catch((err) => {
            setErrMsg("Error - Failed to load topics. Please refresh and try again")
            setIsLoading(false)
            console.log(err)
        })

    }, [])

    function handleInput(e) {
        const key = e.target.id
        const value = e.target.value
        setNewArticle({ ...newArticle, [key]: value })
        if (key === "article_img_url") {
            const file = e.target.files[0]
            const imageUrl = URL.createObjectURL(file)
            setNewArticle({ ...newArticle, [key]: imageUrl })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        postArticle(newArticle)
        .then((response) => {
            setNewArticleId(response.article_id)
            setShowAlert(true)
        })
        .catch((err) => {
            setErrMsg("Error - Failed to post article. Please refresh and try again")
            console.log(err)
        })
    }

    if (isLoading) {
        return (
          <span className="loader"></span>
        )
      }

    if (showAlert) {
        return (
            <ArticlePostedAlert setShowAlert={setShowAlert} id={newArticleId}/>
        )
    }
    if (errMsg) {
        return (
            <section className="new-article-form">
                <p>{errMsg}</p>
            </section>
        )
    }

    return (
        <section className="new-article-form">
            <h2>New Article</h2>
            <form className="article-form">
                {!topic ?
                <select id="topic" onChange={handleInput} required>
                    <option value="">Select a Topic</option>
                    {topics.map((topic) => {
                        return <option value={topic.slug} key={topic.slug}>{topic.slug}</option>
                    })}
                </select> :
                <select id="topic" onChange={handleInput} required>
                    <option value={topic} selected>{topic}</option>
                    {topics.map(t => {
                        if (t.slug !== topic) {
                        return <option value={topic.slug} key={topic.slug}>{topic.slug}</option>
                        }
                    })}
                </select>
                }
                <input type="text" id="title" placeholder="Title" onInput={handleInput} required></input>
                <br></br>
                <textarea type="text" id="body" placeholder="Body" onInput={handleInput} required></textarea>
                <br></br>
                <label id="img-label" htmlFor="article_img_url">Upload an Image:</label>
                <input type="file" id="article_img_url" accept="image/*" onChange={handleInput}/>
                {newArticle.article_img_url && (
                    <div>
                        <h4>Image Preview:</h4>
                        <img src={newArticle.article_img_url} alt="Preview" style={{ width: '200px' }} />
                    </div>
                )}
                <br />
            </form>
            {user.username === "not-a-username" ? <h3>You need to sign in to post an article</h3> : <button id="post-article-button" onClick={handleSubmit} disabled={!newArticle.title || !newArticle.body || !newArticle.topic}>Post</button>}
        </section>
    )
}
