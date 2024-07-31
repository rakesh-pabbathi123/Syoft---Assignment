import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div className="home-container">
      <p className="white-color">created by: Rakesh Pabbathi</p>
      <h2 className="white-color">Welcome to the User SignUp And Login App</h2>
      <div className="home-links">
        <Link to="/signup" className="home-link p-2 white-color">
          Sign Up
        </Link>
        <Link to="/login" className="home-link white-color">
          Login
        </Link>
        <Link to="/dashboard" className="home-link white-color">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Home;
