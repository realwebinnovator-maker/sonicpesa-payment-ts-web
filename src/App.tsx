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
      {/* Company Name */}
      <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>PayTech</div>

      {/* Right Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", position: "relative" }}>
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
        >
          <span style={{ height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ height: "3px", background: "white", borderRadius: "2px" }}></span>
          <span style={{ height: "3px", background: "white", borderRadius: "2px" }}></span>
        </div>

        {/* User Icon */}
        <div
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => setUserMenuOpen(!userMenuOpen)}
        >
          {/* Circle User Icon */}
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
            }}
          >
            U
          </div>

          {/* Dropdown Menu */}
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
              <button
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px 15px",
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                  textAlign: "left",
                }}
                onClick={() => alert("Login clicked")}
              >
                Login
              </button>
              <button
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px 15px",
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                  textAlign: "left",
                }}
                onClick={() => alert("Register clicked")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default App;
