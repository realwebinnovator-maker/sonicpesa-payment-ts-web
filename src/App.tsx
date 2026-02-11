import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const features = [
  {
    title: "Instant Payments",
    desc: "Send and receive money instantly with zero hassle.",
    icon: "💸",
  },
  {
    title: "Secure Transactions",
    desc: "Bank-level security ensures your data and funds are safe.",
    icon: "🔒",
  },
  {
    title: "Multi-currency Support",
    desc: "Handle multiple currencies and seamless cross-border payments.",
    icon: "🌍",
  },
  {
    title: "Analytics Dashboard",
    desc: "Track your transactions and revenue in real-time.",
    icon: "📊",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    comment:
      "PayTech simplified our payment processing. Super fast and secure!",
  },
  {
    name: "John Smith",
    comment: "Integration was a breeze. Love the analytics dashboard.",
  },
];

const App: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9fafb",
      }}
    >
      <Header />

      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
          color: "#fff",
          padding: "100px 20px 60px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "20px" }}>
          Welcome to PayTech
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Your seamless payment integration solution.
        </p>
        <button
          style={{
            padding: "12px 30px",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#fff",
            backgroundColor: "#2563eb",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "40px" }}>
          Why Choose PayTech
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {features.map((f, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "10px" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#64748b" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "#1e293b", color: "#f1f5f9", padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "40px" }}>
          What Our Clients Say
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#334155",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              }}
            >
              <p style={{ fontStyle: "italic", marginBottom: "15px" }}>"{t.comment}"</p>
              <p style={{ fontWeight: 600, textAlign: "right" }}>- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-action Banner */}
      <section
        style={{
          padding: "60px 20px",
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Ready to start?
        </h2>
        <button
          style={{
            padding: "12px 30px",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#fff",
            backgroundColor: "#2563eb",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        >
          Sign Up Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default App;
