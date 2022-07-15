import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import RegisterBtn from './RegisterBtn'
import LoginBtn from './LoginBtn'

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div>
          <div className="logo">Theraply</div>
        </div>
        <div>
          <ul className="navlinks">
            <li className="navItem"><NavLink to="/">Home</NavLink></li>
            <li className="navItem"><NavLink to="/process">Process</NavLink></li>
            <li className="navItem"><NavLink to="/search">Search</NavLink></li>
            <li className="navItem"><NavLink to="/tests">Tests</NavLink></li>
          </ul>
        </div>
        <div className='Btns'>
          <RegisterBtn />
          <LoginBtn />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;