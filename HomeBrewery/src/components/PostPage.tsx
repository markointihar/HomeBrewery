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
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, []);

    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/posts/${postId}`);
            console.log(response)
            setPost(response.data);

            const score = response.data.upvotes - response.data.downvotes;

            setScore(score);

            // const postsWithScore = response.data.map((post: any) => ({
            //     ...post,
            //     score: post.upvotes - post.downvotes
            // }));
            // setPost(postsWithScore);
        } catch (error) {
            console.error('There was an error fetching the post!', error);
        }
    };
    const handleVote = async (postId: number, type: 'upvote' | 'downvote') => {
        try {
            await axios.post(`http://localhost:3000/api/posts/${postId}/${type}`)
            const response = await axios.get(`http://localhost:3000/api/posts/${postId}`);
            console.log(response)
            // setPost(response.data);

            const score = response.data.upvotes - response.data.downvotes;

            setScore(score);
           
            // setPost((prevPosts) =>
            //     prevPosts.map((post) =>
            //         post.id === postId
            //             ? { ...post, score: type === 'upvote' ? post.score + 1 : post.score - 1 }
            //             : post
            //     )
            // );
        } catch (error) {
            console.error(`There was an error ${type === 'upvote' ? 'upvoting' : 'downvoting'} the post!`, error);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/posts/${postId}/comments`);
            setComments(response.data);
            setCommentCount(response.data.length);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error fetching comments!', error);
        }
    };

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const google_id = sessionStorage.getItem("authToken");
        const userResponse = await axios.get("http://localhost:3000/get-user-id", {
        params: {
            google_id: google_id,
        },
    });
    const user_id = userResponse.data.id;

        try {
            await axios.post(`http://localhost:3000/api/posts/${postId}/comments`, { content: newComment, user_id: user_id, postId: postId});
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
                            <button className="upvote" onClick={() => handleVote(post.id, 'upvote')}>▲</button>
                            <span className="score">{score}</span>
                            <button className="downvote" onClick={() => handleVote(post.id, 'downvote')}>▼</button>
                        </div>
                        <div className="post-content">
                            <h2 className="post-title">{post.title}</h2>
                            <div className="post-meta">
                                <span>Posted by {post.name} on {new Date(post.created_at).toLocaleString()}</span>
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
                        <h2>Comments</h2>
                    </div>
                    <div className="comment-list">
                        {comments.map(comment => (
                            <div key={comment.id} className="comment">
                                <div className='comment-user'>
                                    <img src={comment.profile_picture} alt="User profile" />
                                    <span>{comment.name}</span>
                                </div>
                                <div className='comment-content'>
                                    <p>{comment.content}</p>
                                </div>
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
