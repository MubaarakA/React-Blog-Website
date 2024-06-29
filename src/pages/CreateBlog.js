import React, { useState, useRef } from 'react';
import './CreateBlog.css';

function CreateBlog({ addBlogPost }) {
  const [title, setTitle] = useState('');
  const [fullText, setFullText] = useState('');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogPost = { title, fullText, image };
    addBlogPost(blogPost);
    setTitle('');
    setFullText('');
    setImage(null);
    fileInputRef.current.value = ''; 
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="create-blog">
      <h1>Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="asc"
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="asc"
          placeholder="Blog Content"
          rows="8"
          value={fullText}
          onChange={(e) => setFullText(e.target.value)}
          required
        ></textarea>
        <input
          className="asc"
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          ref={fileInputRef} 
          required
        />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default CreateBlog;
