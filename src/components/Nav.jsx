import React from "react";
import { Link } from "@reach/router";

import NCLogo from "./images/NorthcodersLogo.ico";
import LoginMenu from "./LoginMenu";

const Nav = ({ changeUser, currentUser }) => {
  return (
    <div className="navbar">
      <div>
        <Link id="nav-logo-container" to="/">
          <img id="nav-logo" src={NCLogo} alt="Northcoders Logo" />
        </Link>
        <Link to="/">HOME</Link>
        <div className="dropdown">
          <button className="dropbtn">TOPICS</button>
          <div className="dropdown-content">
            <Link to="/topics/coding">Coding</Link>
            <Link to="/topics/cooking">Cooking</Link>
            <Link to="/topics/football">Football</Link>
          </div>
        </div>
      </div>
      <div className="user-dropdown">
        <LoginMenu changeUser={changeUser} currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Nav;
