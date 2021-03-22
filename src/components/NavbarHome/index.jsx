import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class NavBarHome extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to="/signin"
                  activeClassName="active"
                >
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to="/"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to="/hoc"
                  activeClassName="active"
                >
                  HOC
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to="/hooks"
                  activeClassName="active"
                >
                  Hooks
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
