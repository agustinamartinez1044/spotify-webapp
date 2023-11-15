import React from 'react';
import {FaHome, FaRegListAlt, FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="nav-item-container">
                <Link to="/" className="nav-item">
                    <FaHome/>
                    <span>Home</span>
                </Link>
                <div className="nav-item">
                    <FaSearch/>
                    <span>Search</span>
                </div>
                <div className="nav-item">
                    <FaRegListAlt/>
                    <span>Your Library</span>
                </div>
            </div>
        </div>

    );
};

export default NavBar;
