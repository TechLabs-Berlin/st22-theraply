import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div>
          <nav className="nav">
           <ul className="navlinks">
              <li className="navItem"><a href="placeholderlocation" className="navlink">PAGE 1</a></li>
              <li className="navItem"><a href="placeholderlocation" className="navlink" target="_blank" >PAGE 2</a></li>
              <li className="navItem"><a href="placeholderlocation" className="navlink" target="_blank">PAGE 3</a></li>
              <li className="navItem"><a href="placeholderlocation" className="navlink" target="_blank">PAGE 4</a></li>
           </ul>
          </nav>
          {/* <hr></hr> */}
        </div>
    )
}

export default Navbar;