import React from "react";

import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

import { getArticle } from "../api";
import ArticleUserInfo from "./ArticleUserInfo";

import Error from "./Error";

class Article extends React.Component {
  state = { article: {}, isLoading: true, errorData: { isError: false } };

  fetchArticle = id => {
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
    // .catch(
    //   // ({
    //   //   response: {
    //   //     data: { msg, status }
    //   //   }
    //   // }) => {
    //   //   console.log(msg, status);
    //   //   return <Error code={status} msg={msg} />;
    //   // }

    //   this.setState({ isLoading: false, isError: true })
    // );
  };

  componentDidMount = () => {
    const { id } = this.props;
    this.fetchArticle(id);
  };

  render() {
    const { body, topic, title, article_id, author } = this.state.article;
    return (
      <div className="article-page">
        {this.state.isLoading ? (
          <div className="item2">Loading...</div>
        ) : this.state.errorData.isError ? (
          <Error
            status={this.state.errorData.status}
            msg={this.state.errorData.msg}
          />
        ) : (
          <>
            <ArticleHeader title={topic} subtitle={title} />
            <ArticleBody
              currentUser={this.props.currentUser}
              body={body}
              articleId={article_id}
            />
            <ArticleUserInfo author={author} />
          </>
        )}
      </div>
    );
  }
}

export default Article;
