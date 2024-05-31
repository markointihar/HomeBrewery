import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <Link to="/" className="logo">HomeBrewery Forum</Link>
            <div className="search-bar">
                <input type="text" placeholder="Išči po temi..." />
            </div>
            <div className="login-logout">
                <Link to="/login">Login</Link>
            </div>
        </header>
    );
};

export default Header;
