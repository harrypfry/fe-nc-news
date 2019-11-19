import axios from "axios";

export const getArticles = () => {
  return axios.get("https://nc-news-hf.herokuapp.com/api/articles");
};
