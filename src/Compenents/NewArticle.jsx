import { useEffect, useState, useContext } from "react"
import { getTopics, postArticle } from "../api"
import { UserContext } from "./UserContext"
import ArticlePostedAlert from "./ArticlePostedAlert"

export default function NewArticle() {
    const [topics, setTopics] = useState([])
    const { user } = useContext(UserContext)
    const [newArticle, setNewArticle] = useState({
        author: user.username,
        votes: 0
    })
    const [showAlert, setShowAlert] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [errMsg, setErrMsg] = useState(false)

    useEffect(() => {
        getTopics().then((response) => {
            setTopics(response)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [])

    function handleInput(e) {
        console.log(newArticle)
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
        .then(() => {
            setShowAlert(true)
            console.log("success!")
        })
        .catch((err) => {
            setErrMsg(true)
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
            <ArticlePostedAlert />
        )
    }

    return (
        <section className="new-article-form">
            <h2>New Article</h2>
            <form>
                <select id="topic" onChange={handleInput} required>
                    <option value="">Select a Topic</option>
                    {topics.map((topic) => {
                        return <option value={topic.slug} key={topic.slug}>{topic.slug}</option>
                    })}
                </select>
                <input type="text" id="title" placeholder="Title" onInput={handleInput} required></input>
                <br></br>
                <input type="text" id="body" placeholder="Body" onInput={handleInput} required></input>
                <br></br>
                <label htmlFor="article_img_url">Upload an Image:</label>
                <input type="file" id="article_img_url" accept="image/*" onChange={handleInput}/>
                {newArticle.article_img_url && (
                    <div>
                        <h4>Image Preview:</h4>
                        <img src={newArticle.article_img_url} alt="Preview" style={{ width: '200px' }} />
                    </div>
                )}
                <br />
            </form>
            <button onClick={handleSubmit} disabled={newArticle.title && newArticle.body && newArticle.topic}>Post</button>
        </section>
    )
}
