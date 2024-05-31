import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import '../css/PostPage.css';

const PostPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const [post, setPost] = useState<any>(null);
    const [comments, setComments] = useState<any[]>([]);
    const [newComment, setNewComment] = useState('');
    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, []);

    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/posts/${postId}`);
            setPost(response.data);
        } catch (error) {
            console.error('There was an error fetching the post!', error);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/posts/${postId}/comments`);
            setComments(response.data);
            setCommentCount(response.data.length);
        } catch (error) {
            console.error('There was an error fetching comments!', error);
        }
    };

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/posts/${postId}/comments`, { content: newComment });
            setNewComment('');
            fetchComments(); // Fetch comments again to update the list and comment count
        } catch (error) {
            console.error('There was an error submitting the comment!', error);
        }
    };

    return (
        <div className="containerPost">
            <Sidebar />
            <main className="contentPost">
                {post && (
                    <div className="post-container">
                        <div className="vote">
                            <button className="upvote">▲</button>
                            <span className="score">{post.score}</span>
                            <button className="downvote">▼</button>
                        </div>
                        <div className="post-content">
                            <h2 className="post-title">{post.title}</h2>
                            <div className="post-meta">
                                <span>Posted by {post.author} on {new Date(post.created_at).toLocaleString()}</span>
                            </div>
                            <div className="post-body">
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="comments-section">
                    <div className="comments-header">
                        <span className="comments-count">{commentCount}</span>
                        <h3>Comments</h3>
                    </div>
                    <div className="comment-list">
                        {comments.map(comment => (
                            <div key={comment.id} className="comment">
                                <p>{comment.content}</p>
                                {/* Add reply functionality here */}
                            </div>
                        ))}
                    </div>
                    <div className="comment-form">
                        <form onSubmit={handleCommentSubmit}>
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add your comment"
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </main>
            <RightSidebar />
        </div>
    );
};

export default PostPage;
