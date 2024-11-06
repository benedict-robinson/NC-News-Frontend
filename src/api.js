import axios from "axios";

const api = axios.create({
    baseURL: `https://backend-to-the-future.onrender.com/api`,
  });
  
function fetchArticles() {
return api.get(`/articles`)
.then((response) => {
    return response.data.articles
})
}

function fecthArticleById(id) {
    return api.get(`/articles/${id}`)
    .then((response) => {
        return response.data.article
    })
}

function patchVoteCount(type, id, votesObj) {
    return api.patch(`/${type}/${id}`, votesObj)
    .then((response) => {
        return response
    })
}

function fetchComments(id) {
    return api.get(`/articles/${id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}

function patchCommentsVoteCount(id, votesObj) {
    return api.patch(`/comments/${id}`, votesObj)
    .then((response) => {
        return response
    })
}

function fetchCommentById(id) {
    return api.get(`/comments/${id}`)
    .then((response) => {
        return response.data.comment
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

export {
    fetchArticles,
    fecthArticleById,
    patchVoteCount,
    fetchComments,
    patchCommentsVoteCount,
    fetchCommentById,
    postNewComment,
    deleteComment
}