import React from "react";
import logo from "../images/Logos-03.png";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Why girls?</a>
            <a className="navbar-item">Discover Flama</a>
            <a className="navbar-item">Get involved</a>
            <div className="buttons">
              <a className="button is-light">Donate</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
