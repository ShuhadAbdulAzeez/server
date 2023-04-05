import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import googleImage from "../images/google.png";
import "../App.css";

export default class Login extends Component {
  state = { username: "", success: false, error: false };

  onLogin = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    axios({
      url: "/auth/login",
      method: "POST",
      data: { email, password },
    })
      .then((res) => {
        window.localStorage.setItem("isAuthenticated", true);
        if (res.status === 200) {
          this.setState({ success: true, error: false });
          this.props.history.push("/");
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
        <form onSubmit={this.onLogin}>
          {success && "You've logged in successfully"}
          {error}
          <label>Email</label>
          <input type="email" name="email" onChange={this.onChange} required />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            required
          />
          <button type="submit">Login</button>
          <div className="or-part">
            <div>
              <span>OR</span>
            </div>
            <div className="google-btn">
              <div>
                <img src={googleImage} />
              </div>
              <a
                href="/auth/google"
                style={{ textDecoration: "none", color: "black" }}
              >
                Login with Google
              </a>
            </div>
            <div>
              <p>
                Don’t have an account? Sign up?{" "}
                <Link to={"/register"}>Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
