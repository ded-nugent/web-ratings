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
      let user = Cookies.get('loggedIn')
      this.setState({user:Cookies.get('loggedIn')})
      console.log(user)
  }

  renderOptions = () => {
    if (this.state.user !== "") {
      this.createLink()
    }
    else {
      this.loginLink()
    }
  }

  loginLink = () => (
    <li className="pure-menu-item"><a href="/login" className="pure-menu-link nav-item">Login</a></li>
    )

  createLink = () => (
    <li className="pure-menu-item"><a href="/create" className="pure-menu-link nav-item">Add Website</a></li>
  )


  render() {
    return (
      <div className="nav-wrapper">
        <div className="pure-menu pure-menu-horizontal navbar">
          <a href="/" className="pure-menu-heading pure-menu-link nav-home">Web Rates</a>
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><a href="/home" className="pure-menu-link nav-item">Home</a></li>
            <div>{this.renderOptions()}</div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;