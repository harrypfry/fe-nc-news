import axios from "axios";

const baseURL = "https://nc-news-hf.herokuapp.com/api";

export const getArticles = query => {
  return axios.get(`${baseURL}/articles`, { params: query });
};

export const getArticle = articleId => {
  return axios.get(`${baseURL}/articles/${articleId}`);
};

export const getCommentsByArticleId = articleId => {
  return axios.get(`${baseURL}/articles/${articleId}/comments`);
};

export const getUserInfo = username => {
  return axios.get(`${baseURL}/users/${username}`);
};

export const postComment = (articleId, username, body) => {
  return axios.post(`${baseURL}/articles/${articleId}/comments`, {
    username,
    body
  });
};

export const deleteComment = commentId => {
  return axios.delete(`${baseURL}/comments/${commentId}`);
};
