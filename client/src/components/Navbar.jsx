import React from 'react';
import { Link } from 'react-router-dom';
import "./styling/Navbar.css";
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/lost">Lost Items</Link>
                </li>
                <li>
                    <Link to="/found">Report Found Item</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
