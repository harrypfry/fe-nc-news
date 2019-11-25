import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Topics from "./components/Topics";
import Article from "./components/Article";
import Error from "./components/Error";
import User from "./components/User";

class App extends React.Component {
  state = { currentUser: "" };

  changeUser = user => {
    localStorage.user = user;
    this.setState({ currentUser: user });
  };

  setUser = user => {
    this.setState({ currentUser: localStorage.user });
  };

  componentDidMount = () => {
    if (localStorage.user) {
      this.setState({ currentUser: localStorage.user });
    } else {
      this.setState({ currentUser: "LOGIN" });
    }
  };

  render() {
    return (
      <div>
        <Nav
          changeUser={this.changeUser}
          currentUser={this.state.currentUser}
        />
        <Router className="App">
          <Homepage path="/" />
          <Topics path="/topics/:topic" />
          <Article currentUser={this.state.currentUser} path="/articles/:id" />
          <User path="/users/:username" />
          <Error status="404" msg="Not found" default />
        </Router>
      </div>
    );
  }
}

export default App;
