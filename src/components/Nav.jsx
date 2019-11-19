import React from "react";
import { Link } from "@reach/router";
import NCLogo from "./images/NorthcodersLogo.png";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div>
        <Link to="/">
          <img id="nav-logo" src={NCLogo} alt="Northcoders Logo" />
        </Link>
        <Link className="nav-text" to="/">
          HOME
        </Link>
        <Link className="nav-text" to="/topics/">
          TOPICS
        </Link>
        <Link className="nav-text" to="/users">
          USERS
        </Link>
      </div>
      <div>
        <Link className="nav-text" to="/login">
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
