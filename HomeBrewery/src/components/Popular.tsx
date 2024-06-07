import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Home.css';
import Sidebar from '../components/Sidebar';
import '../css/Container.css';
import '../css/globalDark.css';
import RightSidebar from '../components/RightSidebar';
import { useDarkMode } from '../components/DarkModeProvider.tsx'; // Import useDarkMode hook

// Define the Post interface
interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    upvotes: number;
    downvotes: number;
    comments_count: number;
    score: number;
}

const HomeForum: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get<Post[]>('http://localhost:3000/api/posts');
            const postsWithScore = response.data.map((post) => ({
                ...post,
                score: post.upvotes - post.downvotes
            }));

            // Sort posts by score in descending order
            const sortedPosts = postsWithScore.sort((a, b) => b.score - a.score);
            setPosts(sortedPosts);
        } catch (error) {
            console.error('There was an error fetching the posts!', error);
        }
    };

    const handleVote = async (postId: number, type: 'upvote' | 'downvote') => {
        try {
            await axios.post(`http://localhost:3000/api/posts/${postId}/${type}`);
            fetchPosts(); // Refetch posts to update the list and scores
        } catch (error) {
            console.error(`There was an error ${type === 'upvote' ? 'upvoting' : 'downvoting'} the post!`, error);
        }
    };

    return (
        <div className="containerr">
            <Sidebar />
            <main className="contentt">
                <h2>Trenutno popularno</h2>
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
            {/* <RightSidebar latestPosts={[]} /> */}
        </div>
    );
};

export default HomeForum;