import React, { useState } from "react";

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1>Welcome to PayTech</h1>
        <p>Your seamless payment integration solution.</p>
      </main>
    </div>
  );
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#0d6efd",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      {/* Left: Menu icon + Company Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Menu Icon */}
        <div
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={{ height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ height: "3px", background: "white", borderRadius: "2px" }}></span>
        </div>

        {/* Company Name */}
        <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>PayTech</div>

        {/* Menu Dropdown */}
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "10px",
              backgroundColor: "white",
              color: "#0d6efd",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              borderRadius: "8px",
              overflow: "hidden",
              minWidth: "160px",
            }}
          >
            {[
              { label: "Home", href: "#home" },
              { label: "Features", href: "#features" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
              { label: "Login", href: "/login" },
              { label: "Register", href: "/register" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: "#0d6efd",
                  backgroundColor: "white",
                  borderBottom: "1px solid #ddd",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Right: User Icon */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#0d6efd",
            fontWeight: "bold",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
          onClick={() => setUserMenuOpen(!userMenuOpen)}
        >
          U
        </div>

        {userMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "45px",
              right: 0,
              backgroundColor: "white",
              color: "#0d6efd",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              borderRadius: "8px",
              overflow: "hidden",
              minWidth: "120px",
            }}
          >
            <a
              href="/login"
              style={{
                display: "block",
                padding: "10px 15px",
                textDecoration: "none",
                color: "#0d6efd",
              }}
            >
              Login
            </a>
            <a
              href="/register"
              style={{
                display: "block",
                padding: "10px 15px",
                textDecoration: "none",
                color: "#0d6efd",
              }}
            >
              Register
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default App;
