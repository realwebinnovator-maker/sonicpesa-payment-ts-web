// src/pages/Header.tsx
import React, { useState, useEffect } from "react";

interface UserMenuProps {
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ onClose }) => {
  const menuItems = [
    { name: "Login", href: "/pages/Login" },
    { name: "Signup", href: "/pages/Signup" },
    { name: "Reset Password", href: "/pages/ResetPassword" },
  ];

  return (
    <>
      {/* Overlay */}
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
        onClick={onClose}
      />

      {/* User Menu */}
      <div
        className="auth-modal"
        style={{
          position: "fixed",
          top: "60px",
          right: "20px",
          width: "220px",
          backgroundColor: "#1e293b",
          color: "#f1f5f9",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          padding: "12px 0",
        }}
      >
        {/* Close Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0 12px 8px 0",
            cursor: "pointer",
            fontWeight: "bold",
            color: "#f87171",
          }}
          onClick={onClose}
        >
          ✕
        </div>

        {/* Menu Items */}
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            style={{
              padding: "10px 16px",
              textDecoration: "none",
              color: "#f1f5f9",
              fontWeight: 600,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(148,163,184,0.15)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/pages/Home" },
    { name: "Features", href: "/pages/Features" },
    { name: "Pricing", href: "/pages/Pricing" },
    { name: "Docs", href: "/pages/Docs" },
    { name: "Support", href: "/pages/Support" },
    { name: "Contact", href: "/pages/Contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-trigger") && !target.closest(".mobile-menu")) {
        setMobileMenuOpen(false);
      }
      if (!target.closest(".user-icon") && !target.closest(".auth-modal")) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        backgroundColor: "#0f172a",
        color: "#e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
      }}
    >
      {/* Hamburger Menu */}
      <div
        className="menu-trigger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          width: "28px",
          height: "22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            style={{
              height: "2px",
              background: "#cbd5e1",
              borderRadius: "2px",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div
        style={{
          fontSize: "1.8rem",
          fontWeight: "800",
          background: "linear-gradient(90deg, #60a5fa, #818cf8, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px",
        }}
      >
        PayTech
      </div>

      {/* User Icon */}
      <div
        className="user-icon"
        onClick={(e) => {
          e.stopPropagation();
          setUserMenuOpen(!userMenuOpen);
        }}
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "rgba(148,163,184,0.15)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          border: "1px solid rgba(148,163,184,0.3)",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(148,163,184,0.25)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(148,163,184,0.15)")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.6)",
              zIndex: 998,
            }}
          />
          <div
            className="mobile-menu"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "280px",
              height: "100vh",
              backgroundColor: "#1e293b",
              color: "#f1f5f9",
              padding: "80px 20px 30px",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              zIndex: 999,
              boxShadow: "4px 0 20px rgba(0,0,0,0.4)",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "600",
                  color: "#e2e8f0",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid #334155",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#818cf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#e2e8f0")}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </>
      )}

      {/* User Menu */}
      {userMenuOpen && <UserMenu onClose={() => setUserMenuOpen(false)} />}
    </header>
  );
};

export default Header;
