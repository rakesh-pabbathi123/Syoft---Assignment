import React, { Component } from "react";
import "./index.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: "",
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.setState({ user });
    } else {
      this.setState({ error: "No user data found. Please log in." });
    }
  }

  render() {
    const { user, error } = this.state;
    return (
      <div className="dashboard-container">
        <h2 className="dashboard">Dashboard</h2>
        {error && <p className="errorMsg">{error}</p>}
        {user ? (
          <div>
            <h2 className="welcome">
              Welcome, <span className="span-user">{user.user_firstname}</span>
            </h2>
            <p>
              Email: <span className="span-user">{user.user_email}</span>
            </p>
            <p>
              Phone: <span className="span-user">{user.user_phone}</span>
            </p>
            <p className="span-user">Last Name: {user.user_lastname}</p>
            <p className="span-user">City: {user.user_city}</p>
            <p className="span-user">Zipcode: {user.user_zipcode}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Dashboard;
