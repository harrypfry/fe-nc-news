import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Topics from "./components/Topics";
import Users from "./components/Users";
import Article from "./components/Article";
import Error from "./components/Error";

class App extends React.Component {
  state = { currentUser: "weegembump" };

  render() {
    return (
      <div>
        <Nav />
        <Router className="App">
          <Homepage path="/" />

          <Topics path="/topics/:topic" />
          <Article currentUser={this.state.currentUser} path="/articles/:id" />
          <Users path="/users" />
          <Error status="404" msg="Not found" default />
        </Router>
      </div>
    );
  }
}

export default App;
