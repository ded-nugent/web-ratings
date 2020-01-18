import React, { Component } from "react";
import Cookies from "js-cookie"
import "./Nav.css";

class Nav extends Component {

  state = {
    user: ""
  };

  componentDidMount = () => {
    this.getUserData()
  }
  
  getUserData = () => {
      this.setState({user:Cookies.get('loggedIn')})
  }

  loginLink = () => {
    if (this.state.user !== undefined) {
    return (
    <li className="pure-menu-item">
      <a href="/" 
      className="pure-menu-link nav-item"
      onClick={this.logout}
      >
        Logout
      </a>
    </li>
    )}
    else {
      return(
    <li className="pure-menu-item"><a href="/login" className="pure-menu-link nav-item">Login</a></li>
      )}
  }

  addWebsite = () => {
    if (this.state.user !== undefined) {
    return (
    <li className="pure-menu-item"><a href="/create" className="pure-menu-link nav-item">Add Website</a></li>
    )}
  }

  logout = () => {
    Cookies.remove('loggedIn');
    window.location.reload();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="pure-menu pure-menu-horizontal navbar">
          <a href="/" className="pure-menu-heading pure-menu-link nav-home">Web Rates</a>
          <ul className="pure-menu-list">
          <li className="pure-menu-item nav-item">{this.state.user}</li>
            <li className="pure-menu-item"><a href="/home" className="pure-menu-link nav-item">Home</a></li>
            {this.addWebsite()}
            {this.loginLink()}
            <li className="pure-menu-item"><a href="/homeview">
          <img id="logo" src="https://png2.cleanpng.com/sh/ba118b0d77fd4e6695adfac1e8e32edd/L0KzQYq3U8E1N5ttf5H0aYP2gLBuTfRifJIyjtt8dXHvecvolPlwdl58geZxLXS2Pbv6TfpifpJ4eARycISwRbSBgck6aWlnfqpuMkexRYm9Usc0PGU2Tac7NUi6QYi9V8g1Pl91htk=/kisspng-data-visualization-with-d3-js-javascript-5c8a99a8bf8e27.5862734415525871767846.png" alt="d3"></img></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;