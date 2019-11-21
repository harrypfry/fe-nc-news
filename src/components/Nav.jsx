import React from "react";
import { Link } from "@reach/router";
import NCLogo from "./images/NorthcodersLogo.png";

const Nav = () => {
  return (
    <div className="navbar">
      <div>
        <Link id="nav-logo-container" to="/">
          <img id="nav-logo" src={NCLogo} alt="Northcoders Logo" />
        </Link>
        <Link to="/">HOME</Link>
        <Link to="/">USERS</Link>
        <div className="dropdown">
          <button className="dropbtn">TOPICS</button>
          <div className="dropdown-content">
            <Link to="/topics/coding">Coding</Link>
            <Link to="/topics/cooking">Cooking</Link>
            <Link to="/topics/football">Football</Link>
          </div>
        </div>
      </div>
      <Link to="/">LOGIN</Link>
    </div>
  );
};

export default Nav;
