// src/App.tsx
import React from "react";
import Footer from "./pages/Footer"; // Assuming Footer is a default export

const App: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header with strong dark theme */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          backgroundColor: "#0f172a", // slate-900
          color: "#e2e8f0",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#f1f5f9" }}>
          PayTech
        </div>
        <nav>
          <ul style={{ display: "flex", gap: "24px", listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <a href="#features" style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: "500" }}>
                Features
              </a>
            </li>
            <li>
              <a href="#integration" style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: "500" }}>
                Integration
              </a>
            </li>
            <li>
              <a href="#pricing" style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: "500" }}>
                Pricing
              </a>
            </li>
            <li>
              <button
                style={{
                  backgroundColor: "#334155",
                  color: "#e2e8f0",
                  border: "1px solid #475569",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "60px 20px", backgroundColor: "#f9fafb" }}>
        {/* Hero Section */}
        <section style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "16px", color: "#0f172a" }}>
            Your Seamless Payment Integration Solution
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.6 }}>
            Connect your business to global payment gateways in minutes — secure, scalable, and developer-friendly.
          </p>
        </section>

        {/* Why Use Us Section */}
        <section id="features" style={{ maxWidth: "900px", margin: "0 auto 60px" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "32px", color: "#0f172a" }}>
            Why Use PayTech?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
            {[
              { icon: "⚡", title: "Instant Setup", desc: "Go live in under 10 minutes with our plug-and-play SDKs." },
              { icon: "🔒", title: "Bank-Grade Security", desc: "PCI-DSS compliant with end-to-end encryption." },
              { icon: "🌍", title: "Global Reach", desc: "Support 100+ currencies and 50+ payment methods worldwide." },
              { icon: "📊", title: "Real-Time Analytics", desc: "Track transactions, refunds, and revenue in real time." },
              { icon: "🔄", title: "Auto-Reconciliation", desc: "Automatically match payments to invoices and reduce manual work." },
              { icon: "👨‍💻", title: "Developer First", desc: "Clean APIs, detailed docs, and 24/7 sandbox testing." },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "24px",
                  width: "100%",
                  maxWidth: "260px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "10px", color: "#1e293b" }}>{item.title}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Integration Info */}
        <section id="integration" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "24px", color: "#0f172a" }}>
            Powerful Payment Integration
          </h2>
          <p style={{ lineHeight: 1.7, color: "#334155", marginBottom: "16px" }}>
            PayTech provides unified APIs that connect your platform to Stripe, PayPal, M-Pesa, Flutterwave, Razorpay,
            and more — all through a single integration.
          </p>
          <p style={{ lineHeight: 1.7, color: "#334155", marginBottom: "16px" }}>
            Whether you're building an e-commerce store, SaaS platform, or mobile app, our SDKs for JavaScript, Python,
            Node.js, and React Native ensure smooth implementation.
          </p>
          <p style={{ lineHeight: 1.7, color: "#334155" }}>
            Plus, with webhooks, dispute management, and automated compliance checks, you stay focused on growth — not
            payment headaches.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
