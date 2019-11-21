import React from "react";

import { getUserInfo } from "../api";

class ArticleUserInfo extends React.Component {
  state = {};

  fetchUserInfo = author => {
    getUserInfo(author).then(({ data: { user } }) => {
      this.setState(user);
    });
  };

  componentDidMount = () => {
    const { author } = this.props;
    this.fetchUserInfo(author);
  };

  render() {
    return (
      <section className="sidebar-user-info">
        <div className="sidebar-author-title">&lt;AUTHOR&gt;</div>
        <div className="sidebar-author-name">&lt;{this.props.author}&gt;</div>
        <div className="sidebar-author-photo">
          <img
            className="avatar-img"
            src={this.state.avatar_url}
            alt="User Avatar"
          ></img>
        </div>
      </section>
    );
  }
}

export default ArticleUserInfo;
