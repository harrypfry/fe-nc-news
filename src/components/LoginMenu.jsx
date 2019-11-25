import React from "react";

import { getUsers } from "../api";

class LoginMenu extends React.Component {
  state = { users: [] };
  componentDidMount = () => {
    getUsers().then(({ data }) => {
      this.setState({ users: data });
    });
  };

  handleClick = event => {
    this.setState({ loggedInUser: event.target.id });
    this.props.changeUser(event.target.id);
  };

  logoutUser = event => {
    this.props.changeUser(event.target.id);
  };

  render() {
    return (
      <>
        <div className="dropbtn">{this.props.currentUser}</div>
        <div className="user-dropdown-content">
          {this.state.users.map(user => {
            return (
              <div
                key={user.username}
                id={user.username}
                className="user-login"
                onClick={this.handleClick}
              >
                {user.username}
              </div>
            );
          })}
          {this.state.loggedInUser !== "LOGIN" && (
            <div
              key="logout-user"
              className="user-logout"
              id="LOGIN"
              onClick={this.handleClick}
            >
              LOGOUT
            </div>
          )}
        </div>
      </>
    );
  }
}

export default LoginMenu;
