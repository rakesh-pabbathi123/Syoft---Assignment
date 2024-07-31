import React, { Component } from "react";
import "./index.css";
import withNavigate from "../withNavigate";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: "",
      error: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = async (e) => {
    e.preventDefault();
    const { user_email, user_password } = this.state;

    if (!user_email || !user_password) {
      this.setState({ error: "Please fill out all fields" });
      return;
    }

    const payload = {
      user_email,
      user_password,
    };

    try {
      const response = await fetch(
        "https://syoft.dev/Api/userlogin/api/userlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log("Login Response Data:", data); // Debugging log

      if (response.ok && data.status) {
        // Assuming the API returns user data in an array
        const user = data.user_data[0]; // Accessing the first user object
        localStorage.setItem("user", JSON.stringify(user));
        this.props.navigate("/dashboard");
      } else {
        this.setState({
          error: data.msg || "Invalid credentials. Please try again.",
        });
      }
    } catch (err) {
      console.error("Login Error:", err); // Debugging log
      this.setState({ error: "Failed to log in. Please try again later." });
    }
  };

  render() {
    const { user_email, user_password, error } = this.state;
    return (
      <div className="login-container">
        <p className="color2">build by :Rakesh pabbathi</p>
        <p className="color2">gmail:john@example.com</p>
        <p className="color2">password:password123</p>
        <h2 className="login">Login</h2>
        {error && <p className="errorMsg">{error}</p>}
        <form onSubmit={this.handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="user_email"
              value={user_email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="user_password"
              value={user_password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default withNavigate(Login);
