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
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      <div
        className="auth-modal"
        style={{
          backgroundColor: "#1e293b", // slate-800
          color: "#f1f5f9",
          borderRadius: "16px",
          width: "90%",
          maxWidth: "420px",
          padding: "32px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
          position: "relative",
          border: "1px solid #334155",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(148, 163, 184, 0.1)",
            border: "none",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            color: "#cbd5e1",
            fontSize: "1.2rem",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(148, 163, 184, 0.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(148, 163, 184, 0.1)")}
        >
          &times;
        </button>

        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <h2 style={{ margin: 0, fontSize: "1.8rem", fontWeight: "700", color: "#f1f5f9" }}>
            Welcome back
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "6px" }}>Sign in to your PayTech dashboard</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login successful!");
            onClose();
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#e2e8f0" }}>
              Email Address
            </label>
            <input
              type="email"
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "rgba(15, 23, 42, 0.6)", // slate-900/60
                border: "1px solid #334155",
                borderRadius: "10px",
                fontSize: "1rem",
                color: "#f1f5f9",
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #60a5fa")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #334155")}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <label style={{ fontWeight: "600", color: "#e2e8f0" }}>Password</label>
              <a
                href="#"
                style={{ color: "#818cf8", fontSize: "0.9rem", textDecoration: "none" }}
                onClick={(e) => {
                  e.preventDefault();
                  alert("Password reset instructions sent.");
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
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid #334155",
                borderRadius: "10px",
                fontSize: "1rem",
                color: "#f1f5f9",
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #60a5fa")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #334155")}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              background: "linear-gradient(90deg, #4f46e5, #60a5fa)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "1.05rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Sign In
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "24px", color: "#94a3b8", fontSize: "0.95rem" }}>
          Don’t have an account?{" "}
          <span
            style={{
              color: "#818cf8",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => alert("Registration flow would open here.")}
          >
            Create one
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
