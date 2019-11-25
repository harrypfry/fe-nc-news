import React from "react";

import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import ArticleUserInfo from "./ArticleUserInfo";
import Error from "./Error";
import loadingGif from "./images/loading.gif";

import { getArticle } from "../api";

class Article extends React.Component {
  state = { article: {}, isLoading: true, errorData: { isError: false } };

  fetchArticle = id => {
    this.setState({ isLoading: true });
    getArticle(id)
      .then(({ data: { article } }) =>
        this.setState({ article, isLoading: false })
      )
      .catch(err => {
        const { status, msg } = err.response.data;
        this.setState({
          isLoading: false,
          errorData: {
            isError: true,
            status,
            msg
          }
        });
      });
  };

  componentDidMount = () => {
    const { id } = this.props;
    this.fetchArticle(id);
  };

  render() {
    const { body, topic, title, article_id, author } = this.state.article;

    if (this.state.errorData.isError) {
      return (
        <Error
          status={this.state.errorData.status}
          msg={this.state.errorData.msg}
        />
      );
    }

    return (
      <div className="article-page">
        {this.state.isLoading ? (
          <div className="item2">
            <div className="loading-img-wrapper">
              <img className="loading-img" src={loadingGif} alt="Loading..." />
            </div>
          </div>
        ) : (
          <>
            <ArticleHeader title={topic} subtitle={title} />
            <ArticleBody
              author={author}
              currentUser={this.props.currentUser}
              body={body}
              articleId={article_id}
            />
            {window.innerWidth > 1250 && <ArticleUserInfo author={author} />}
          </>
        )}
      </div>
    );
  }
}

export default Article;
