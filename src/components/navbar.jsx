import React from "react";

// Stateless Functional Component

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                Counters <span className="badge badge-secondary badge-pill">{totalCounters}</span>
            </a>
        </nav>
    );

};



export default NavBar;
