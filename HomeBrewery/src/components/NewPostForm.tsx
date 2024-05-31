// src/components/NewPostForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import '../css/NewPostForm.css';

const NewPostForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:3000/api/posts', {
                title,
                content
            });
            setTitle('');
            setContent('');
            alert('Post created successfully!');
        } catch (error) {
            console.error('There was an error creating the post!', error);
        }
    };

    return (
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
    );
};

export default NewPostForm;
