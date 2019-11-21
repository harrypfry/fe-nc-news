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

export const getUser = username => {
  return axios.get(`${baseURL}/users/${username}`);
};
