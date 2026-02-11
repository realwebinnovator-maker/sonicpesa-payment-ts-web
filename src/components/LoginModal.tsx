
// src/components/LoginModal.tsx
import React from "react";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <div
        className="auth-modal"
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          width: "90%",
          maxWidth: "420px",
          padding: "32px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
          position: "relative",
          animation: "fadeIn 0.3s ease",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "1.4rem",
            cursor: "pointer",
            color: "#94a3b8",
            width: "32px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          &times;
        </button>

        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <h2 style={{ margin: 0, fontSize: "1.8rem", color: "#0f172a", fontWeight: "700" }}>Welcome back</h2>
          <p style={{ color: "#64748b", marginTop: "6px" }}>Sign in to your PayTech account</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login functionality would go here.");
            onClose();
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#1e293b" }}>
              Email Address
            </label>
            <input
              type="email"
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "1rem",
                transition: "border 0.3s, box-shadow 0.3s",
              }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #0d6efd")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #e2e8f0")}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <label style={{ fontWeight: "600", color: "#1e293b" }}>Password</label>
              <a
                href="#"
                style={{ color: "#0d6efd", fontSize: "0.9rem", textDecoration: "none" }}
                onClick={(e) => {
                  e.preventDefault();
                  alert("Password reset flow would open here.");
                }}
              >
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "1rem",
                transition: "border 0.3s, box-shadow 0.3s",
              }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #0d6efd")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #e2e8f0")}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "1.05rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0b5ed7")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d6efd")}
          >
            Sign In
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "24px", color: "#64748b", fontSize: "0.95rem" }}>
          Don’t have an account?{" "}
          <span
            style={{
              color: "#0d6efd",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => {
              alert("Registration flow would open here.");
            }}
          >
            Create one
          </span>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default LoginModal;
