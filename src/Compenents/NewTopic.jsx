import { useContext, useState } from "react"
import { postNewTopic } from "../api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext"
import "../CSS/new-topic-button.css"

export default function NewTopic() {
    const [topicObj, setTopicObj] = useState({})
    const [errMsg, setErrMsg] = useState("")
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    function handleChange({ target }) {
        const key = target.id
        setTopicObj({ ...topicObj, [key]: target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postNewTopic(topicObj).then((response) => {
            response.created_by = user.username
            navigate(`/${topicObj.slug}/articles`)
        })
            .catch((err) => {
                setErrMsg("Error - Failed to create topic. Please refresh to try again")
                console.log(err)
            })
    };

    return (
        <div className="new-topic-page">
            <h2>What do you want to talk about?</h2>
            <form>
                <div className="topic-input">
                    <label htmlFor="slug">
                        Topic Title: &nbsp;
                    </label>
                    <input type="text" id="slug" onChange={handleChange} required></input>
                </div>
                <br></br>
                <div className="topic-input">
                    <label htmlFor="description">
                        Description: &nbsp;
                    </label>
                    <input type="text" id="description" onChange={handleChange}></input>
                </div>
                <br></br>
                <button id="new-topic-button" onClick={handleSubmit} disabled={!topicObj.slug}>Create</button>
            </form>
            <p>{errMsg}</p>
        </div>
    )
}
