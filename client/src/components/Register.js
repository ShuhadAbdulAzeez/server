import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
    success: false,
    error: false,
  };

  onSignup = (e) => {
    e.preventDefault();

    const { email, password, username, confirmPassword } = this.state;

    axios({
      url: "/auth/register",
      method: "POST",
      data: { email, password, username, confirmPassword },
    })
      .then((res) => {
        window.localStorage.setItem("isAuthenticated", true);
        if (res.status === 200) {
          this.setState({ success: true, error: false });
          this.props.history.push("/login");
        }
      })
      .catch(({ response }) => {
        this.setState({ error: response.data.message, success: false });
      });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: false,
      success: false,
    });
  };

  render() {
    const { error, success } = this.state;
    return (
      <div className="login-form">
        <form onSubmit={this.onSignup}>
          {success && "You've registered in successfully"}
          {error}
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.onChange}
            required
          />

          <label>Email</label>
          <input type="email" name="email" onChange={this.onChange} required />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={this.onChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
