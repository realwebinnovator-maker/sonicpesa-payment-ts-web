import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="logo">JayTech</div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button className="nav-btn">Get Started</button>
  </nav>
);

const Hero: React.FC = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h1>Build Modern Websites with Confidence</h1>
      <p>
        Tunakusaidia kujenga website za kisasa kwa kutumia React, TypeScript,
        JavaScript na teknolojia za kisasa.
      </p>
      <div className="hero-buttons">
        <button className="primary-btn">Explore</button>
        <button className="secondary-btn">Learn More</button>
      </div>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section className="features" id="features">
    <h2>Our Features</h2>
    <div className="feature-grid">
      <div className="card">
        <h3>Fast Performance</h3>
        <p>Website zako zitakuwa na speed ya juu na optimized vizuri.</p>
      </div>
      <div className="card">
        <h3>Responsive Design</h3>
        <p>Inaonekana vizuri kwenye simu, tablet na desktop.</p>
      </div>
      <div className="card">
        <h3>Secure System</h3>
        <p>Tunatumia best practices za security kulinda data zako.</p>
      </div>
    </div>
  </section>
);

const About: React.FC = () => (
  <section className="about" id="about">
    <div className="about-content">
      <h2>About Us</h2>
      <p>
        Sisi ni team ya developers tunaojishughulisha na kutengeneza web
        applications za kisasa, scalable na secure.
      </p>
    </div>
  </section>
);

const CTA: React.FC = () => (
  <section className="cta" id="contact">
    <h2>Ready to Start Your Project?</h2>
    <button className="primary-btn">Contact Us</button>
  </section>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} JayTech. All rights reserved.</p>
  </footer>
);

export default App;
