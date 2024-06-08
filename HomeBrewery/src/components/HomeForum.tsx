import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Home.css';
import Sidebar from '../components/Sidebar';
import '../css/Container.css';
import '../css/globalDark.css';
import RightSidebar from '../components/RightSidebar';


interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    score: number;
    commentsCount: number;
}

const HomeForum: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/posts');
            const postsWithScore = response.data.map((post: any) => ({
                ...post,
                score: post.upvotes - post.downvotes
            }));
            setPosts(postsWithScore);
        } catch (error) {
            console.error('There was an error fetching the posts!', error);
        }
    };

    const handleVote = async (postId: number, type: 'upvote' | 'downvote') => {
        try {
            await axios.post(`http://localhost:3000/api/posts/${postId}/${type}`);
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId
                        ? { ...post, score: type === 'upvote' ? post.score + 1 : post.score - 1 }
                        : post
                )
            );
        } catch (error) {
            console.error(`There was an error ${type === 'upvote' ? 'upvoting' : 'downvoting'} the post!`, error);
        }
    };

    const latestPosts = posts.slice(0, 3); // Get the latest 3 posts

    return (
        <div className="containerr">
            <Sidebar />
            <main className="contentt">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="vote">
                            <button className="upvote" onClick={() => handleVote(post.id, 'upvote')}>▲</button>
                            <span className="score">{post.score}</span>
                            <button className="downvote" onClick={() => handleVote(post.id, 'downvote')}>▼</button>
                        </div>
                        <div className="post-content">
                            <Link to={`/posts/${post.id}`} className="post-title">{post.title}</Link> {/* Wrap the title in a Link */}
                            <p>{new Date(post.created_at).toLocaleString()}</p>
                            <p>{post.content}</p>
                   
                        </div>
                    </div>
                ))}
            </main>
            <RightSidebar latestPosts={latestPosts} />
        </div>
    );
};

export default HomeForum;
