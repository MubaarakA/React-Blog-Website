import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import CreateBlog from './pages/CreateBlog';
import About from './pages/About';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([
    // {
    //   id: 1,
    //   title: 'Example Blog Post',
    //   snippet: 'This is an example blog snippet...',
    //   fullText: 'This is the full content of the example blog post. It contains all the details and information.',
    //   image: 'path-to-your-image.jpg'
    // }
  ]);


//   const addBlogPost = (blog) => {
// setBlogs([...blogs,{...blog,id:blogs.length+1,snippet:blog.fullText.slice(0,100)+" "}])
//   };




  const addBlogPost = (blog) => {
    setBlogs([...blogs, {...blog, id: blogs.length + 1, snippet: blog.fullText.slice(0, 100) + " "}]);

    setBlogs([...blogs,{...blog,id:blogs.length+1,snippet:blog.fullText.slice(0,100)+" "}])
  };
  

  const deleteBlogPost = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));




  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/createblog" element={<CreateBlog addBlogPost={addBlogPost} />} />
            <Route path="/blog/:id" element={<BlogDetail blogs={blogs} deleteBlogPost={deleteBlogPost} />} />
            <Route path="/blog" element={<Blog blogs={blogs} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
