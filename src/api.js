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

function patchVoteCount(id, votesObj) {
    return api.patch(`/articles/${id}`, votesObj)
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

export {
    fetchArticles,
    fecthArticleById,
    patchVoteCount,
    fetchComments,
    patchCommentsVoteCount,
    fetchCommentById
}