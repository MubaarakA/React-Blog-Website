import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import aboutImage from '../Assets/aboutimage.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to [Kings Blog], a sanctuary where curiosity meets depth! Dive into a world rich in insights as we explore diverse topics ranging from the hidden intricacies of technology to the expansive wonders of nature. Whether you're a casual reader seeking to kill time or a serious scholar yearning for substantial material, our blog promises to provide thought-provoking content tailored to satisfy minds of all types.
            <br /><br />
            Join us as we delve into discussions that inspire, educate, and sometimes, simply amaze. Subscribe today and never miss a beat in our continuous journey of learning and discovery! Venture beyond the everyday with articles that push the boundaries of ordinary understanding.
            <br /><br />
            Our dedicated team scours the globe for unique perspectives and brings you stories that challenge conventional thought. Each post is crafted with care, ensuring that you not only gain information but also derive inspiration. From detailed how-tos and guides to enlightening essays and reviews, immerse yourself in content that enriches your knowledge and feeds your curiosity.
          </p>
<Link to="/contact" className="subscribe-button" >subscribe</Link>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default About;
