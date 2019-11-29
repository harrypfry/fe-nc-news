import React from "react";

import { getUsers } from "../api";

import { Link } from "@reach/router";

import loadingGif from "./images/loading.gif";

class TopUsers extends React.Component {
  state = {
    topUsers: [],
    isLoading: true
  };

  fetchTopUsers = () => {
    getUsers(3).then(({ data }) => {
      this.setState({ topUsers: data, isLoading: false });
    });
  };

  componentDidMount = () => {
    this.fetchTopUsers();
  };

  render() {
    return this.state.isLoading ? (
      <div className="loading-img-wrapper">
        <img className="loading-img" src={loadingGif} alt="Loading..." />
      </div>
    ) : (
      <section className="sidebar-section">
        <div className="sidebar-title">&lt;Top Users&gt;</div>
        <ol className="sidebar-body">
          {this.state.topUsers.map((user, index) => {
            return (
              <li className="sidebar-card" key={index}>
                <Link to={`/users/${user.username}`}>
                  {`${user.username} <${user.total_score}>`}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    );
  }
}

export default TopUsers;
