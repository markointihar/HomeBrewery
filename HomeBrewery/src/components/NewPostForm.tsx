import React, { useState } from 'react';
import axios from 'axios';
import '../css/NewPostForm.css';
import Sidebar  from '../components/Sidebar';
import '../css/Home.css';
import '../css/Container.css';
import '../css/globalDark.css';

const NewPostForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [, setUserID] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const google_id = sessionStorage.getItem("authToken");
            const userResponse = await axios.get("http://localhost:3000/get-user-id", {
                params: {
                    google_id: google_id,
                },
            });
            const user_id = userResponse.data.id;
            setUserID(user_id);

            await axios.post('http://localhost:3000/api/posts', {
                title,
                content,
                user_id
            });
            setTitle('');
            setContent('');
            alert('Post created successfully!');
        } catch (error) {
            console.error('There was an error creating the post!', error);
        }
    };

    return (
        <div className="containerr">
            <Sidebar />
            <main className="contentt">
                <div className="new-post-form">
                    <h2>Create a New Post</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea
                                id="content"
                                name="content"
                                rows={5}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">Post</button>
                        </div>
                    </form>
                </div>
            </main>
            {/* <RightSidebar latestPosts={[]} /> */}
        </div>
    );
};

export default NewPostForm;
