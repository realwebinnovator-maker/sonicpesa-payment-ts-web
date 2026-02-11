// src/pages/Header.tsx
import React, { useState, useEffect } from "react";
import LoginModal from "../components/LoginModal"; // Tutaunda hii

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Funga modal ikiwa bofya nje
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-trigger')) {
        setMobileMenuOpen(false);
      }
      if (!target.closest('.auth-modal')) {
        setLoginModalOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 24px",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.06)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* Kushoto: Menu Icon (Mobile/Desktop) */}
      <div
        className="menu-trigger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          width: "28px",
          height: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          padding: "4px",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            style={{
              height: "2px",
              width: "100%",
              background: "#1e293b",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: mobileMenuOpen && i === 1 ? "rotate(45deg) translate(4px, 4px)" : undefined,
              opacity: mobileMenuOpen && i === 1 ? 0 : 1,
              transformOrigin: "left center",
            }}
          />
        ))}
      </div>

      {/* Katikati: Logo */}
      <div
        style={{
          fontSize: "1.85rem",
          fontWeight: "800",
          background: "linear-gradient(90deg, #0d6efd, #4f46e5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px",
        }}
      >
        PayTech
      </div>

      {/* Kulia: User Icon */}
      <div
        onClick={() => setLoginModalOpen(true)}
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #e0f2fe, #dbeafe)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          border: "2px solid #bae6fd",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0d6efd"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>

      {/* Mobile Menu (Sidebar) */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "280px",
            height: "100vh",
            backgroundColor: "white",
            boxShadow: "4px 0 20px rgba(0,0,0,0.1)",
            zIndex: 999,
            padding: "80px 20px 30px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            animation: "slideIn 0.3s ease",
          }}
        >
          {["Home", "Features", "Pricing", "Docs", "Support", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#1e293b",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid #f1f5f9",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 998,
          }}
        />
      )}

      {/* Login Modal */}
      {loginModalOpen && <LoginModal onClose={() => setLoginModalOpen(false)} />}

      {/* Animation for mobile menu */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;
