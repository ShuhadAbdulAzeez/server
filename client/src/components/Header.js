import React, { Component } from 'react'
import "../app.css";


export default class Header extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div>
            <a href="" className='logo'>Decode Factory</a>
        </div>
        <div className='child'>
            <ul>
                <li><a href="">Login with google</a></li>
            </ul>
        </div>
      </nav>
    )
  }
}
