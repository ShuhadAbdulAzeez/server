import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

class User extends Component {
  state = { isAuthenticated: false, username: "" };

  componentDidMount() {
    axios.get("/user/getDetails").then((res) => {
      const { isAuthenticated, username } = res.data;
      this.setState({ isAuthenticated, username });
      console.log(`isAuthenticated: ${isAuthenticated}, username: ${username}`);
    });
  }

  render() {
    const { isAuthenticated, username } = this.state;
    return (
      <div>
        <Header isAuthenticated={isAuthenticated} username={username} />
      </div>
    );
  }
}


export default User;
