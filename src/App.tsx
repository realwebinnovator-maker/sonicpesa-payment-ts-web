import React from "react";

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", lineHeight: 1.6 }}>
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
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      backgroundColor: "#0d6efd",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}
  >
    <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>PayTech</div>
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        gap: "25px",
        margin: 0,
        padding: 0,
      }}
    >
      <li><a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
      <li><a href="#features" style={{ color: "white", textDecoration: "none" }}>Features</a></li>
      <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
      <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
    </ul>
    <button
      style={{
        backgroundColor: "white",
        color: "#0d6efd",
        border: "none",
        padding: "8px 16px",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Get Started
    </button>
  </nav>
);

const Hero: React.FC = () => (
  <section
    id="home"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "80px 20px",
      backgroundColor: "#f8f9fa",
    }}
  >
    <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
      Seamless Payment Integrations
    </h1>
    <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "30px" }}>
      Connect your platform with multiple payment gateways easily, securely, and quickly.
    </p>
    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
      <button
        style={{
          padding: "12px 25px",
          backgroundColor: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Explore
      </button>
      <button
        style={{
          padding: "12px 25px",
          backgroundColor: "transparent",
          border: "2px solid #0d6efd",
          color: "#0d6efd",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Learn More
      </button>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section
    id="features"
    style={{
      padding: "80px 20px",
      backgroundColor: "white",
      textAlign: "center",
    }}
  >
    <h2 style={{ fontSize: "2.5rem", marginBottom: "50px" }}>Our Features</h2>
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flex: "1 1 250px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Fast Integration</h3>
        <p>Integrate multiple payment gateways in minutes, not days.</p>
      </div>
      <div
        style={{
          flex: "1 1 250px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Secure Transactions</h3>
        <p>All payments are encrypted and PCI-compliant for full security.</p>
      </div>
      <div
        style={{
          flex: "1 1 250px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Responsive Design</h3>
        <p>Works seamlessly on mobile, tablet, and desktop devices.</p>
      </div>
    </div>
  </section>
);

const About: React.FC = () => (
  <section
    id="about"
    style={{
      padding: "80px 20px",
      backgroundColor: "#f8f9fa",
      textAlign: "center",
    }}
  >
    <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>About Us</h2>
    <p style={{ maxWidth: "600px", margin: "0 auto" }}>
      We are a team of developers passionate about building modern, secure, and scalable payment solutions for your business.
    </p>
  </section>
);

const CTA: React.FC = () => (
  <section
    id="contact"
    style={{
      padding: "80px 20px",
      backgroundColor: "#0d6efd",
      color: "white",
      textAlign: "center",
    }}
  >
    <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>Ready to Integrate Payments?</h2>
    <button
      style={{
        padding: "15px 30px",
        backgroundColor: "white",
        color: "#0d6efd",
        border: "none",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Contact Us
    </button>
  </section>
);

const Footer: React.FC = () => (
  <footer
    style={{
      padding: "30px 20px",
      textAlign: "center",
      backgroundColor: "#212529",
      color: "white",
    }}
  >
    <p>© {new Date().getFullYear()} PayTech. All rights reserved.</p>
  </footer>
);

export default App;
