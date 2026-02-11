// src/App.tsx
import React from "react";
import Header from "./pages/Header";   // ← Default import
import Footer from "./pages/Footer";  // ← Default import

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1, padding: "60px 20px", textAlign: "center", backgroundColor: "#f9fafb" }}>
        <h1>Welcome to PayTech</h1>
        <p>Your seamless payment integration solution.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;

