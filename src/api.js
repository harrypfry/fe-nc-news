import axios from "axios";

const baseURL = "https://nc-news-hf.herokuapp.com/api";

export const getArticles = query => {
  return axios.get(`${baseURL}/articles`, {
    params: query
  });
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

export const updateVote = ({ articleId, commentId, inc_votes }) => {
  if (articleId) {
    return axios.patch(`${baseURL}/articles/${articleId}`, { inc_votes });
  } else if (commentId) {
    return axios.patch(`${baseURL}/comments/${commentId}`, { inc_votes });
  }
};

export const deleteComment = commentId => {
  return axios.delete(`${baseURL}/comments/${commentId}`);
};
