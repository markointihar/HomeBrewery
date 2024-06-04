// Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeProvider'; 
import '../css/Header.css';
import '../css/globalDark.css';
import pfp from "../assets/profile.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();

    const handleLogin = () => {
        window.location.href = "http://localhost:3000/login";
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleToggleDarkMode = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation(); // Stop event propagation to prevent closing the dropdown
        toggleDarkMode(); // Toggle dark mode
    };

    return (
        <header>
            <Link to="/" className="logo">HomeBrewery Forum</Link>
            <div className="search-bar">
                <input type="text" placeholder="Search topics..." />
            </div>
            {
                sessionStorage.getItem("authToken") === null && (
                    <div className="login-logout" onClick={handleLogin}>
                        Login
                    </div>
                )
            }
            {
                sessionStorage.getItem("authToken") !== null && (
                    <div className="profile-section" onClick={toggleDropdown}>
                        <img src={pfp} alt="Profile" className="profile-icon" />
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <div className="profile-banner">
                                    <img src={pfp} alt="Profile" />
                                    <div className="profile-info">
                                        <div className="name">John Doe</div>
                                        <div className="date-joined">Joined: Jan 1, 2020</div>
                                    </div>
                                </div>
                                <Link to="/profile">Profile</Link>
                                <div className="dark-mode-toggle">
                                    <label className="switch">
                                        <input type="checkbox" checked={darkMode} readOnly />
                                        <span className="slider round" onClick={handleToggleDarkMode}></span>
                                        <span className="dark-mode-text">Dark Mode</span>
                                        
                                    </label>
                                </div>

                                <div onClick={() => {
                                    sessionStorage.removeItem("authToken");
                                    window.location.href = "/";
                                }}>Logout</div>
                            </div>
                        )}
                    </div>
                )
            }
        </header>
    );
};

export default Header;
