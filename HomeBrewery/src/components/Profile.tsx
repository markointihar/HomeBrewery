import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Profile.css';
import Sidebar from '../components/Sidebar';
import '../css/Container.css';
import RightSidebar from '../components/RightSidebar';

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    score: number;
    commentsCount: number;
}

const Profile: React.FC = () => {
    const [userData, setUserData] = useState({
        name: '',
        joinedDate: '',
        posts: 0,
        upvotes: 0,
        profilePicture: ''
    });
    const [latestPosts, setLatestPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://home-brewery-server.vercel.app/get-user', {
                    params: {
                        google_id: sessionStorage.getItem('authToken')
                    }
                });

                const user = response.data;

                setUserData({
                    name: user.name,
                    joinedDate: user.created_at,
                    posts: user.posts,
                    upvotes: user.upvotes,
                    profilePicture: user.profile_picture
                });
            } catch (error) {
                console.error(error);
            }
        };

        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://home-brewery-server.vercel.app/api/posts');
                const postsWithScore = response.data.map((post: any) => ({
                    ...post,
                    score: post.upvotes - post.downvotes
                }));
                setLatestPosts(postsWithScore.slice(0, 3)); // Get the latest 3 posts
            } catch (error) {
                console.error('There was an error fetching the posts!', error);
            }
        };

        fetchUserData();
        fetchPosts();
    }, []);

    return (
        <div className="containerr">
            <Sidebar />
            <main className="contentt">
                <section className="profile">
                    <div className="profile-header">
                        <img src={userData.profilePicture || 'default-pic.jpg'} alt="Profile Picture" className="profile-pic" />
                        <div className="profile-info">
                            <h2>{userData.name}</h2>
                            <p>Joined: {userData.joinedDate}</p>
                            <p>Posts: {userData.posts}</p>
                            <p>Upvotes: {userData.upvotes}</p>
                        </div>
                    </div>
                </section>
            </main>
            <RightSidebar latestPosts={latestPosts} />
        </div>
    );
};

export default Profile;
