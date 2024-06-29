import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Blogdetail.css';

function BlogDetail({ blogs, deleteBlogPost }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(blog => blog.id === parseInt(id, 10));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Splitting the fullText into paragraphs based on double newlines
  const paragraphs = blog.fullText.split('\n\n');

  const handleDelete = () => {
    deleteBlogPost(blog.id);
    navigate('/blog');
  };

  return (
    <div className="blog-detail">
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <h2 className="blog-detail-title">{blog.title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="blog-detail-content">{paragraph}</p>
      ))}
      <button className="delete-button" onClick={handleDelete}>Delete Blog</button>
    </div>
  );
}

export default BlogDetail;
