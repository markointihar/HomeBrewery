import React from 'react';
import '../css/Profile.css';
import Sidebar from '../components/Sidebar';
import '../css/Container.css';
import RightSidebar from '../components/RightSidebar';

const Profile: React.FC = () => {
    return (
        <div className="containerr">
           <Sidebar />
            <main className="contentt">
                <section className="profile">
                    <div className="profile-header">
                        <img src="profile-pic.jpg" alt="Profile Picture" className="profile-pic" />
                        <div className="profile-info">
                            <h2>Piwko</h2>
                            <p>Joined: January 1, 2023</p>
                            <p>Posts: 42</p>
                            <p>Upvotes: 420</p>
                        </div>
                    </div>
                    <div className="profile-posts">
                        <h3>Recent Posts</h3>
                        <div className="post">
                            <div className="vote">
                                <button className="upvote">▲</button>
                                <span className="score">50</span>
                                <button className="downvote">▼</button>
                            </div>
                            <div className="post-content">
                                <h4><a href="#">Moj recept za IPA</a></h4>
                                <p>Objavljeno 26.5.2024</p>
                                <p className="comments"><a href="#">15 komentarjev</a></p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="vote">
                                <button className="upvote">▲</button>
                                <span className="score">30</span>
                                <button className="downvote">▼</button>
                            </div>
                            <div className="post-content">
                                <h4><a href="#">Najboljši načini za fermentacijo</a></h4>
                                <p>Objavljeno 20.5.2024</p>
                                <p className="comments"><a href="#">8 komentarjev</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <RightSidebar />
        </div>
    );
};

export default Profile;
