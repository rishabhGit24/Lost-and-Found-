import React from "react";
import "./styling/Home.css";

const Home = () => (
  <div className="home-container">
    {/* Hero Section */}
    <header className="hero-section">
      <div className="hero-content">
        <h1 className="main-title">Lost and Found</h1>
        <p className="subtitle">Helping you find your lost items or report found items effortlessly.</p>
        <a href="#get-started" className="btn-primary">Get Started</a>
      </div>
    </header>

    {/* Goals Section */}
    <section className="goals-section">
      <div className="goals-content">
        <h2 className="section-title">Our Goal</h2>
        <p>Our mission is to create a trustworthy community where people can easily recover their lost belongings.</p>
      </div>
    </section>

    {/* Featured Items Section */}
    <section className="featured-section">
      <h2 className="section-title">Featured Items</h2>
      <div className="item-list">
        <div className="item-card">
          <h3 className="item-title">Lost: Wallet</h3>
          <p className="item-description">Black leather wallet lost in the cafeteria.</p>
        </div>
        <div className="item-card">
          <h3 className="item-title">Found: Keys</h3>
          <p className="item-description">Silver keychain with a car key found near the library.</p>
        </div>
        {/* Add more item-cards as needed */}
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <p>Email: <a href="mailto:support@lostandfound.com">support@lostandfound.com</a></p>
      <p>Phone: +123 456 7890</p>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  </div>
);

export default Home;
