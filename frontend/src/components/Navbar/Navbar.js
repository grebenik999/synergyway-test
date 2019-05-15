import React from "react";
import { Link } from "react-router-dom";

export const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/groups/">
                Groups
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
