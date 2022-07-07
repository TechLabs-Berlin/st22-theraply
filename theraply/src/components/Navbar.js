import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <ul className="navlinks">
          <li className="navItem"><NavLink to="/">Home</NavLink></li>
          <li className="navItem"><NavLink to="/process">Process</NavLink></li>
          <li className="navItem"><NavLink to="/search">Search</NavLink></li>
          <li className="navItem"><NavLink to="/tests">Tests</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;