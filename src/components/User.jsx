import React from "react";

import ArticleHeader from "./ArticleHeader";
import ArticleList from "./ArticleList";

import { getUserInfo } from "../api";

class User extends React.Component {
  state = { user: {} };

  fetchUserInfo = username => {
    getUserInfo(username).then(({ data: { user } }) => this.setState({ user }));
  };

  componentDidMount = () => {
    this.fetchUserInfo(this.props.username);
  };

  render() {
    return (
      <div>
        <ArticleHeader
          title="Northcoders News"
          subtitle={this.props.username}
        />
        <section className="user-info">
          <div className="user-fullname">&lt;{this.state.user.name}/&gt;</div>
          <img
            className="user-avatar"
            src={this.state.user.avatar_url}
            alt="User Avatar"
          />
        </section>
        <div className="user-page-body">
          <ArticleList author={this.props.username} />
        </div>
      </div>
    );
  }
}

export default User;
