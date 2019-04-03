import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
                Counters <span className="badge badge-secondary badge-pill">{this.props.totalCounters}</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
