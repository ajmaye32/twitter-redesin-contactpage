import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/HelpCenter">
                    <li>Help Center</li>
                </Link>
                <li>HelpTopics</li>
                <li>Guides</li>
                <li>Contact us</li>
            </ul>
        </nav >
    );
}
export default Nav;
