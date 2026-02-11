// src/App.tsx
import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      
      <main style={{ flex: 1, padding: "60px 20px", textAlign: "center", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "20px" }}>
            Welcome to <span style={{ color: "#0d6efd" }}>PayTech</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#475569", lineHeight: 1.6, marginBottom: "40px" }}>
            The future of seamless, secure, and scalable payment integrations for businesses of all sizes.
          </p>

          <section style={{ textAlign: "left", marginTop: "50px", padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "20px" }}>How PayTech Works</h2>
            <p style={{ color: "#334155", lineHeight: 1.7, marginBottom: "20px" }}>
              PayTech provides a unified API that connects your platform to multiple global payment gateways — including Stripe, PayPal, M-Pesa, Flutterwave, and more — through a single integration.
            </p>
            <ul style={{ textAlign: "left", paddingLeft: "20px", color: "#475569", lineHeight: 1.8 }}>
              <li><strong>Unified Checkout:</strong> One embeddable widget supports cards, mobile money, bank transfers, and digital wallets.</li>
              <li><strong>Real-time Settlements:</strong> Funds are settled instantly or within 24 hours based on your region.</li>
              <li><strong>Fraud Protection:</strong> AI-powered risk scoring and 3D Secure 2.0 compliance.</li>
              <li><strong>Developer-Friendly:</strong> RESTful APIs, webhooks, sandbox testing, and detailed documentation.</li>
              <li><strong>Global Compliance:</strong> PCI-DSS Level 1 certified, GDPR-ready, and supports local tax rules.</li>
            </ul>
            <div style={{ marginTop: "30px", display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                style={{
                  padding: "12px 28px",
                  backgroundColor: "#0d6efd",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0b5ed7")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d6efd")}
              >
                Get Started
              </button>
              <button
                style={{
                  padding: "12px 28px",
                  backgroundColor: "transparent",
                  color: "#0d6efd",
                  border: "2px solid #0d6efd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ecf0ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                View Docs
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
