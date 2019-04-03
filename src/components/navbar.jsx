import React from "react";

// Stateless Functional Component

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                Counters <span className="badge badge-secondary badge-pill">{props.totalCounters}</span>
            </a>
        </nav>
    );

};



export default NavBar;
