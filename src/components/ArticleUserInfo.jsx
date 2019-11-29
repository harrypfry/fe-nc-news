import React from "react";

import loadingGif from "./images/loading.gif";

import { getUserInfo } from "../api";
import { Link } from "@reach/router";

class ArticleUserInfo extends React.Component {
  state = { isLoading: true };

  fetchUserInfo = author => {
    this.setState({ isLoading: true });

    getUserInfo(author).then(({ data: { user } }) => {
      this.setState({ user, isLoading: false });
    });
  };

  componentDidMount = () => {
    const { author } = this.props;
    this.fetchUserInfo(author);
  };

  render() {
    return (
      <section className="sidebar-user-info">
        {this.state.isLoading ? (
          <div className="loading-img-wrapper">
            <img className="loading-img" src={loadingGif} alt="Loading..." />
          </div>
        ) : (
          <>
            <div className="sidebar-author-title">&lt;AUTHOR&gt;</div>
            <div className="sidebar-author-name">
              <Link to={`/users/${this.props.author}`}>
                &lt;{this.props.author}&gt;
              </Link>
            </div>
            <div className="sidebar-author-photo">
              <img
                className="avatar-img"
                src={this.state.user.avatar_url}
                alt="User Avatar"
              ></img>
            </div>
            <div className="sidebar-author-score">
              {`Article Score: ${this.state.user.article_score}`}
            </div>
            <br />
            <div className="sidebar-author-score">
              {`Comment Score: ${this.state.user.comment_score}`}
            </div>
          </>
        )}
      </section>
    );
  }
}

export default ArticleUserInfo;
