import React from 'react';
import { Link } from 'react-router-dom';
import '../css/RightSidebar.css';
import '../css/globalDark.css';

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    score: number;
    commentsCount: number;
}

interface RightSidebarProps {
    latestPosts: Post[];
}

const RightSidebar: React.FC<RightSidebarProps> = ({ latestPosts }) => {
    const handleNewTopicClick = () => {
        window.location.href = '/newPost';
    };

    return (
        <aside className="right-sidebar">
            <button className="add-topic-btn" onClick={handleNewTopicClick}>Start a New Topic</button>
            <h2>Latest Posts</h2>
            <ul>
                {latestPosts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`} className="post-title">{post.title}</Link>
                        <p>{new Date(post.created_at).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default RightSidebar;
