import React from 'react';

function Navbar() {
    return (
        <div>
        <nav className="nav">
        <ul className="navlinks">
          <li className="navItem"><a href="placeholderlocation" className="navlink">Page 1</a></li>
          <li className="navItem"><a href="placeholderlocation" className="navlink" target="_blank" >Page 2</a></li>
          <li className="navItem"><a href="placeholderlocation" className="navlink" target="_blank">Page 3</a></li>
          <li className="navItem"><a href="placeholderlocation" className="navlink" target="_blank">Page 4</a></li>
        </ul>
      </nav>
        </div>
    )
}

export default Navbar;