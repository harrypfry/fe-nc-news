import React from "react";

import { getUserInfo } from "../api";

import loadingGif from "./images/loading.gif";

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
              &lt;{this.props.author}&gt;
            </div>
            <div className="sidebar-author-photo">
              <img
                className="avatar-img"
                src={this.state.avatar_url}
                alt="User Avatar"
              ></img>
            </div>
          </>
        )}
      </section>
    );
  }
}

export default ArticleUserInfo;
