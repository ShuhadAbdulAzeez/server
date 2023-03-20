import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import "../app.css";


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <li>Still Processing..</li>
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default: 
        return <li className='logout'><a href="/api/logout">Logout</a></li>
    }
  }

  paymentContent() {
    switch (this.props.auth) {
      case false:
        return;
      default:
        return <div><Payments /></div>
    }
  }

  render() {
    console.log(this.props)
    return (
      <nav className='navbar'>
        <div>
            <Link to={ this.props.auth ? '/surveys' : '/'} href="" className='logo'>Decode Factory</Link>
        </div>
        <div className='contents'>
        <div>
              { this.paymentContent() }
            </div>
        <div className='child'>
            <ul>
                { this.renderContent() }
            </ul>
        </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);