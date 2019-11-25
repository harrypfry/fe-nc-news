import React from "react";
import { navigate } from "@reach/router";

import ArticleCard from "./ArticleCard";
import loadingGif from "./images/loading.gif";

import { getArticles } from "../api";

class ArticleList extends React.Component {
  state = { articles: [], isLoading: true };

  fetchArticles(params) {
    this.setState({ isLoading: true });
    getArticles(params)
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => navigate("/404/"));
  }

  componentDidMount = () => {
    this.fetchArticles(this.props);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.topic !== this.props.topic) {
      const { topic } = this.props;
      this.fetchArticles({ topic });
    }
  };

  sortArticles = event => {
    const { topic } = this.props;

    let params = { topic };

    switch (event.target.id) {
      case "latest-button":
        params.sort_by = "created_at";
        params.order = "desc";
        break;
      case "oldest-button":
        params.sort_by = "created_at";
        params.order = "asc";
        break;
      case "most-comments-button":
        params.sort_by = "comment_count";
        params.order = "desc";
        break;
      case "votes-button":
        params.sort_by = "votes";
        params.order = "desc";
        break;
      default:
    }
    this.fetchArticles(params);
  };

  render() {
    return (
      <section className="article-list-main">
        <section className="sort-section">
          <div className="bold">Sort by:&nbsp;</div>{" "}
          <button
            className="sort-button"
            id="latest-button"
            onClick={this.sortArticles}
          >
            latest
          </button>
          &nbsp;|&nbsp;
          <button
            className="sort-button"
            id="oldest-button"
            onClick={this.sortArticles}
          >
            oldest
          </button>
          &nbsp;|&nbsp;
          <button
            className="sort-button"
            id="most-comments-button"
            onClick={this.sortArticles}
          >
            most comments
          </button>
          &nbsp;|&nbsp;
          <button
            className="sort-button"
            id="votes-button"
            onClick={this.sortArticles}
          >
            votes
          </button>
        </section>

        {this.state.isLoading ? (
          <div className="loading-img-wrapper">
            <img className="loading-img" src={loadingGif} alt="Loading..." />
          </div>
        ) : (
          <table className="article-table">
            <tbody>
              {this.state.articles.map(article => {
                return (
                  <ArticleCard key={article.article_id} article={article} />
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}

export default ArticleList;
