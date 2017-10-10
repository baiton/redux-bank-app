import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseLayout extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-start">
              <a className="nav-link" href="/">BankShot <span className="sr-only">(current)</span></a>
              <a className="nav-link" href="/">Home</a>
              <a className="nav-link" href="/#/users">Users</a>
        </nav>
        {this.props.children}
        </div>
    );
  }
}

export default BaseLayout;
