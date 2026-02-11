
// src/pages/Header.tsx
import React, { useState } from "react";

const Header: React.FC = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState<'login' | 'register' | null>(null);

  // Funga menyu zote unapobofya nje
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.user-menu-trigger') && !target.closest('.user-menu')) {
      setUserMenuOpen(false);
    }
    if (!target.closest('.auth-modal')) {
      setAuthModalOpen(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 30px",
        backgroundColor: "white",
        color: "#1e293b",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d6efd" }}>PayTech</div>

      {/* Desktop Navigation */}
      <nav style={{ display: "flex", gap: "28px", fontWeight: "600" }}>
        {["Home", "Features", "Pricing", "Docs", "Support"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "#475569",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0d6efd")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* User Menu Trigger */}
      <div
        className="user-menu-trigger"
        style={{ position: "relative", cursor: "pointer" }}
        onClick={() => setUserMenuOpen(!userMenuOpen)}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#e0f2fe",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#0d6efd",
            fontWeight: "bold",
            fontSize: "1.1rem",
            border: "2px solid #bae6fd",
          }}
        >
          U
        </div>

        {userMenuOpen && (
          <div
            className="user-menu"
            style={{
              position: "absolute",
              top: "50px",
              right: 0,
              backgroundColor: "white",
              boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
              borderRadius: "10px",
              overflow: "hidden",
              minWidth: "140px",
              zIndex: 1001,
            }}
          >
            <div
              style={{
                display: "block",
                padding: "12px 20px",
                color: "#1e293b",
                fontWeight: "500",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setAuthModalOpen('login');
                setUserMenuOpen(false);
              }}
            >
              Login
            </div>
            <div
              style={{
                display: "block",
                padding: "12px 20px",
                color: "#1e293b",
                fontWeight: "500",
                borderTop: "1px solid #e2e8f0",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setAuthModalOpen('register');
                setUserMenuOpen(false);
              }}
            >
              Register
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      {authModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            className="auth-modal"
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "450px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ margin: 0, color: "#1e293b" }}>
                {authModalOpen === 'login' ? 'Sign In' : 'Create Account'}
              </h2>
              <button
                onClick={() => setAuthModalOpen(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#94a3b8",
                }}
              >
                &times;
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`${authModalOpen === 'login' ? 'Logging in...' : 'Registering...'}`);
                // Hapa ungependa kutuma data kwa backend
                setAuthModalOpen(null);
              }}
            >
              {authModalOpen === 'register' && (
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}>Full Name</label>
                  <input
                    type="text"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #cbd5e1",
                      borderRadius: "6px",
                      fontSize: "1rem",
                    }}
                  />
                </div>
              )}

              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}>Email</label>
                <input
                  type="email"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}>Password</label>
                <input
                  type="password"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#0d6efd",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {authModalOpen === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div style={{ textAlign: "center", marginTop: "20px", color: "#64748b" }}>
              {authModalOpen === 'login' ? (
                <p>
                  Don't have an account?{' '}
                  <span
                    onClick={() => setAuthModalOpen('register')}
                    style={{ color: "#0d6efd", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Sign up
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <span
                    onClick={() => setAuthModalOpen('login')}
                    style={{ color: "#0d6efd", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Sign in
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
