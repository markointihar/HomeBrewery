// SearchResults.tsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
// import '../css/SearchResults.css';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    score: number;
    commentsCount: number;
}

const SearchResults: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (query) {
                    const response = await axios.get<Post[]>(`http://localhost:3000/api/search?query=${query}`);
                    setPosts(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [query]);

    const latestPosts = posts.slice(0, 3); // Get the latest 3 posts

    return (
        <div className="containerr">
            <Sidebar />
            <main className="contentt">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-content">
                            <Link to={`/posts/${post.id}`} className="post-title">{post.title}</Link> {/* Wrap the title in a Link */}
                            <p>{new Date(post.created_at).toLocaleString()}</p>
                            <p>{post.content}</p>
                            <p className="comments">Comments: {post.commentsCount}</p>
                        </div>
                    </div>
                ))}
            </main>
            <RightSidebar latestPosts={latestPosts} />
        </div>
    );
};

export default SearchResults;
