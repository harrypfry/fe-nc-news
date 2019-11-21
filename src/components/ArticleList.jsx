import React, { Component } from "react";

import ArticleCard from "./ArticleCard";

import { getArticles } from "../api";

class ArticleList extends Component {
  state = { articles: [], isLoading: true };

  fetchArticles(props) {
    getArticles(props).then(({ data }) => {
      this.setState(data);
    });
  }

  componentDidMount = () => {
    this.fetchArticles(this.props);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles(this.props);
    }
  };

  render() {
    return (
      <table className="article-table">
        <tbody>
          {this.state.articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default ArticleList;
