import React from "react";
import { ArrowLeft } from "lucide-react";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Back Button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "25px",
          left: "25px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#cbd5e1",
          transition: "0.3s ease",
        }}
      >
        <ArrowLeft size={20} />
      </button>

      {/* Login Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "40px 30px",
          borderRadius: "16px",
          backdropFilter: "blur(20px)",
          background: "rgba(30, 41, 59, 0.75)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
          color: "#f1f5f9",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontWeight: 700,
            fontSize: "1.8rem",
          }}
        >
          Welcome Back
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login successful!");
            onClose();
          }}
        >
          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(15,23,42,0.8)",
                color: "#fff",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "25px" }}>
            <input
              type="password"
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(15,23,42,0.8)",
                color: "#fff",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "15px",
              transition: "0.3s ease",
            }}
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "13px",
            color: "#94a3b8",
          }}
        >
          Don't have an account? Sign up
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
