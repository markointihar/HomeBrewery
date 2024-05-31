import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
    
            <ul>
                <li><Link to="/forum">Domov</Link></li>
                <li><Link to="/popularPosts">Popularno</Link></li>
                <li><Link to="/forumProfile">Profil</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
