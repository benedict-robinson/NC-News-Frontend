import axios from "axios";

const api = axios.create({
    baseURL: `https://backend-to-the-future.onrender.com/api`,
  });
  
function fetchArticles(sortQuery) {
    return api.get(`/articles${sortQuery}`)
    .then(({data}) => {
        return data.articles
})
}

function fecthArticleById(id) {
    return api.get(`/articles/${id}`)
    .then(({data}) => {
        return data.article
    })
}

function postArticle(articleObj) {
    articleObj.created_at = Date.now()
    return api.post("/articles", articleObj)
    .then(response => {
        return response.data.article
    })
}

function deleteArticle(id) {
    return api.delete(`/articles/${id}`)
    .then(response => {
        return response
    })
}

function patchArticleVoteCount(id, votesObj) {
    return api.patch(`/articles/${id}`, votesObj)
    .then((response) => {
        return response
    })
}

function fetchComments(id) {
    return api.get(`/articles/${id}/comments`)
    .then(({data}) => {
        return data.comments
    })
}

function fetchCommentsByUsername(username) {
    return api.get(`/users/${username}/comments`)
    .then(({data}) => {
        return data
    })
}

function patchCommentVoteCount(id, votesObj) {
    return api.patch(`/comments/${id}`, votesObj)
    .then((response) => {
        return response
    })
}

function fetchCommentById(id) {
    return api.get(`/comments/${id}`)
    .then(({data}) => {
        return data.comment
    })
}

function postNewComment(id, commentObj) {
    return api.post(`/articles/${id}/comments`, commentObj)
    .then((response) => {
        return response
    })
}

function deleteComment (id) {
    return api.delete(`/comments/${id}`)
    .then((response) => {
        return response
    })
}

function getTopics() {
    return api.get("/topics")
    .then(({data}) => {
        return data.topics
    })
}

function fetchArticlesByTopic(slug, sortQuery) {
    return api.get(`/articles?topic=${slug}${sortQuery}`)
    .then(({data}) => {
        return data.articles
    })
}

function postNewTopic(topicObj) {
    return api.post("/topics",topicObj)
    .then(({data}) => {
        return data.topic
    })
}

function patchUser(userObj, username) {
    return api.patch(`/userz/${username}`, userObj)
    .then((response) => {
        return response
    })
}

function getUsers() {
    return api.get("/users")
    .then(({data}) => {
        return data.users
    })
}

function postUser(userObj) {
    return api.post("/users", userObj)
    .then(({data}) => {
        return data.user
    })
}

export {
    fetchArticles,
    fecthArticleById,
    patchArticleVoteCount,
    fetchComments,
    patchCommentVoteCount,
    fetchCommentById,
    postNewComment,
    deleteComment,
    getTopics,
    fetchArticlesByTopic,
    postNewTopic,
    postArticle,
    deleteArticle,
    fetchCommentsByUsername,
    patchUser,
    getUsers,
    postUser
}