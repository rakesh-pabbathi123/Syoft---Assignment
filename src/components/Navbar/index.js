import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Navbar extends Component {
  handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/dashboard">Logo</Link>
        </div>
        <div className="navbar-links">
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
