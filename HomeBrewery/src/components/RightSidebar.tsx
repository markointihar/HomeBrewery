import React from 'react';
import '../css/RightSidebar.css';
import '../css/globalDark.css';

const RightSidebar: React.FC = () => {
    const handleNewTopicClick = () => {
        window.location.href = '/newPost';
    };

    return (
        <aside className="right-sidebar">
            <button className="add-topic-btn" onClick={handleNewTopicClick}>Start a New Topic</button>
            <h2>Top Users</h2>
            <ul>
                <li>Himanshu</li>
                <li>Rohan</li>
                <li>Ritika</li>
                <li>Karan</li>
                <li>Parth</li>
                <li>Vedant</li>
                <li>Kartik</li>
            </ul>
        </aside>
    );
};

export default RightSidebar;
