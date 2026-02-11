// src/pages/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#cbd5e1",
        padding: "40px 20px 20px",
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
        <div>
          <h3 style={{ color: "white", marginBottom: "16px", fontSize: "1.2rem" }}>PayTech</h3>
          <p style={{ lineHeight: 1.6, fontSize: "0.95rem" }}>
            Powering the next generation of digital payments with security, speed, and simplicity.
          </p>
        </div>

        <div>
          <h4 style={{ color: "white", marginBottom: "12px", fontSize: "1.1rem" }}>Product</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Features", "Pricing", "API Docs", "Changelog"].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.95rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "white", marginBottom: "12px", fontSize: "1.1rem" }}>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["About", "Careers", "Blog", "Contact"].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.95rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "white", marginBottom: "12px", fontSize: "1.1rem" }}>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Privacy", "Terms", "Compliance", "GDPR"].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.95rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ textAlign: "center", paddingTop: "30px", marginTop: "30px", borderTop: "1px solid #334155", color: "#94a3b8", fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} PayTech Inc. All rights reserved. PCI-DSS Level 1 Certified.
      </div>
    </footer>
  );
};

// ✅ HII PIA NI MUHIMU!
export default Footer;
