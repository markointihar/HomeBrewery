// Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDarkMode } from './DarkModeProvider'; 
import '../css/Header.css';
import '../css/globalDark.css';
import pfp from "../assets/profile.svg";
import axios from 'axios';
import magn_glass from "../assets/search-512.jpg";


const Header: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [userData, setUserData] = useState({
        userIme: '',
        userEmail: '',
        userPfp: ''
    });
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem('authToken')) {
            axios.get('https://home-brewery-server.vercel.app/get-user', {
                params: {
                    google_id: sessionStorage.getItem('authToken')
                }
            })
            .then(response => {
                const { name, email, profile_picture } = response.data;
                setUserData({
                    userIme: name,
                    userEmail: email,
                    userPfp: profile_picture
                });
            })
            .catch(error => {
                console.error(error);
            });
        }
    }, []);

    const handleLogin = () => {
        window.location.href = "https://home-brewery-server.vercel.app/login";
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleToggleDarkMode = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation(); // Stop event propagation to prevent closing the dropdown
        toggleDarkMode(); // Toggle dark mode
    };

    const handleLogout = () => {
        sessionStorage.removeItem("authToken");
        window.location.href = "/";
    };

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <header>
            <Link to="/" className="logo">HomeBrewery </Link>
            <div className="search-bar">
    <input
        type="text"
        placeholder="Išči po temah..."
        value={searchQuery}
        onChange={handleSearchInputChange}
    />
    <button className="search-button" onClick={handleSearch}>
        <img className ="magn_glass" src={magn_glass} alt="Search" />
    </button> {/* Added button inside the input */}
</div>

            {
                sessionStorage.getItem("authToken") === null && (
                    <div className="login-logout" onClick={handleLogin}>
                        Prijava
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
                                    <img src={userData.userPfp} alt="Profile" />
                                    <div className="profile-info">
                                        <div className="name">{userData.userIme}</div>
                                        <div className="email">{userData.userEmail}</div>
                                    </div>
                                </div>
                                <Link to="/profil">Profil</Link>
                                <div className="dark-mode-toggle">
    <span className="dark-mode-text">Temen način</span>
    <label className="switch">
        <input type="checkbox" checked={darkMode} readOnly />
        <span className="slider round" onClick={handleToggleDarkMode}></span>
    </label>
</div>

                                <div onClick={handleLogout}>Odjava</div>
                            </div>
                        )}
                    </div>
                )
            }
        </header>
    );
};

export default Header;
