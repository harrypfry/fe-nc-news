import React from "react";

import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

import { getArticle } from "../api";
import ArticleUserInfo from "./ArticleUserInfo";

class Article extends React.Component {
  state = { article: {}, isLoading: true };

  fetchArticle = id => {
    getArticle(id).then(({ data: { article } }) =>
      this.setState({ article, isLoading: false })
    );
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
