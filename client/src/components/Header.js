import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "../app.css";


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'still processing';
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render() {
    console.log(this.props)
    return (
      <nav className='navbar'>
        <div>
            <Link to={ this.props.auth ? '/survays' : '/'} href="" className='logo'>Decode Factory</Link>
        </div>
        <div className='child'>
            <ul>
                { this.renderContent() }
            </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);