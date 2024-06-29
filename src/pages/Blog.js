import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

function Blog({ blogs }) {
  const navigate = useNavigate();

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-post">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <h2 className="title">{blog.title}</h2>
          <p className="snippet">{blog.snippet}</p>
          <button className="read-more" onClick={() => navigate(`/blog/${blog.id}`)}>
            READ MORE →
          </button>
        </div>
      ))}
    </div>
  );
}

export default Blog;
