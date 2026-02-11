// src/App.tsx
import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const App: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #e0f7fa, #80deea)", // soft blue gradient
        color: "#1a202c", // dark gray text for contrast
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          padding: "80px 20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.05)", // subtle overlay
          borderRadius: "12px",
          margin: "40px auto",
          maxWidth: "800px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", fontWeight: 700 }}>Welcome to PayTech</h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
          Your seamless payment integration solution.
        </p>
        <button
          style={{
            padding: "12px 30px",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#fff",
            backgroundColor: "#00796b",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#004d40")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#00796b")}
        >
          Get Started
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default App;
