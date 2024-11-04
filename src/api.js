import axios from "axios";

const api = axios.create({
    baseURL: `https://backend-to-the-future.onrender.com/api`,
  });
  
function fetchArticles() {
return api.get(`/articles`).then((response) => {
    return response.data.articles
})
.catch((err) => {
    console.log(err)
});
}

function fecthArticleById(id) {
    return api.get(`/articles/${id}`).then((response) => {
        return response.data.article
    })
}

export {
    fetchArticles,
    fecthArticleById
}