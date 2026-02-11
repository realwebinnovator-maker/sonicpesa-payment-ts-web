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
      }}
    >
      <div
        className="auth-modal"
        style={{
          backgroundColor: "#1e293b",
          color: "#f1f5f9",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "400px",
          padding: "28px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          position: "relative",
          border: "1px solid #334155",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "none",
            border: "none",
            color: "#94a3b8",
            fontSize: "1.4rem",
            cursor: "pointer",
          }}
        >
          &times;
        </button>

        <h2 style={{ margin: "0 0 20px", textAlign: "center", fontWeight: "700" }}>Sign In</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login successful!");
            onClose();
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <input
              type="email"
              placeholder="Email"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "rgba(15,23,42,0.7)",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#f1f5f9",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Password"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "rgba(15,23,42,0.7)",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#f1f5f9",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
