import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../app.css";


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'still processing';
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return <li>Logout</li>;
    }
  }

  render() {
    console.log(this.props)
    return (
      <nav className='navbar'>
        <div>
            <a href="" className='logo'>Decode Factory</a>
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