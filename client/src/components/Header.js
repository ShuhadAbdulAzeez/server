import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li className="logout">
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  creditContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <div className="payment-cred">Credits: {this.props.auth.credits}</div>
        );
    }
  }

  paymentContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <div>
            <Payments />
          </div>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav className="navbar">
        <div>
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            href=""
            className="logo"
          >
            Decode Factory
          </Link>
        </div>
        <div className="contents">
          <div>{this.paymentContent()}</div>
          <div>{this.creditContent()}</div>
          <div className="child">
            <ul>{this.renderContent()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
