import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div>
            <nav className="footer">
                <hr></hr>
                <ul className="footerlinks">
                    <li className="footerItem"><NavLink to="/">Theraply</NavLink></li>
                    <li className="footerItem"><NavLink to="/process">Berlin TechLabs</NavLink></li>
                    <li className="footerItem"><NavLink to="/search">Contact</NavLink></li>
                    <li className="footerItem"><NavLink to="/tests">About Us</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

// Routes still need to be adjusted!!

export default Footer;