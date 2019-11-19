import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Topics from "./components/Topics";
import Users from "./components/Users";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Router className="App">
          <Homepage path="/" />
          <Topics path="/topics/*" />
          <Users path="/users" />
        </Router>
      </div>
    );
  }
}

export default App;
