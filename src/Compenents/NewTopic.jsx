import { useContext, useState } from "react"
import { postNewTopic } from "../api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "../CSS/new-topic-button.css"

export default function NewTopic() {
    const [topicObj, setTopicObj] = useState({})
    const [isDisabled, setIsDisabled] = useState(true)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    function handleChange({target}) {
        const key = target.id
        setTopicObj({ ...topicObj, [key]: target.value })
        if (topicObj.slug && isDisabled) {
            setIsDisabled(false)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postNewTopic(topicObj).then((response) => {
            response.created_by = user.username
            navigate(`/${topicObj.slug}/articles`)
        })
        .catch((err) => {
            console.log(err)
        })
      };
    
  return (
    <div className="new-topic-page">
        <h2>What do you want to talk about?</h2>
        <form>
            <div className="topic-input">
            <label>
                Topic Title: &nbsp;
            </label>
            <input type="text" id="slug" onChange={handleChange}></input>
            </div>
            <br></br>
            <div className="topic-input">
            <label>
                Description: &nbsp;
            </label>
            <input type="text" id="description" onChange={handleChange}></input>
            </div>
            <br></br>
            <button id="new-topic-button" onClick={handleSubmit} disabled={isDisabled}>Create</button>
        </form>
    </div>
  )
}
