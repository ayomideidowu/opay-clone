"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (password.length < 6) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <main style={{
      maxWidth: 430,
      margin: "0 auto",
      minHeight: "100vh",
      background: "#fff",
      fontFamily: "'Segoe UI', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px 24px 40px",
      position: "relative",
    }}>

      {/* OPAY LOGO */}
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            border: "3px solid #006E33",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: "50%",
              border: "3px solid #006E33",
              borderRightColor: "transparent",
            }} />
          </div>
          <span style={{ fontSize: 32, fontWeight: 900, color: "#1a1a1a", letterSpacing: "-1px" }}>Pay</span>
        </div>
      </div>

      {/* PROFILE AVATAR */}
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: "linear-gradient(135deg, #E8F5E9, #B2DFDB)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16,
        boxShadow: "0 0 0 6px #E8F5E9",
        position: "relative",
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          border: "3px solid #006E33",
          borderRightColor: "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            border: "3px solid #1a1a1a",
            borderRightColor: "transparent",
          }} />
        </div>
      </div>

      {/* USER NAME */}
      <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", margin: "0 0 32px", textAlign: "center" }}>
        Collins(814****995)
      </h2>

      {/* PASSWORD INPUT */}
      <div style={{ width: "100%", marginBottom: 10 }}>
        <input
          type="password"
          placeholder="Enter 6-digit Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxLength={6}
          style={{
            width: "100%",
            padding: "18px 20px",
            borderRadius: 14,
            border: "none",
            background: "#F5F5F5",
            fontSize: 16,
            outline: "none",
            color: "#1a1a1a",
            letterSpacing: password ? 8 : 0,
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* FORGOT PASSWORD */}
      <div style={{ width: "100%", textAlign: "right", marginBottom: 32 }}>
        <span style={{ fontSize: 14, color: "#006E33", fontWeight: 700, cursor: "pointer" }}>
          Forgot Password?
        </span>
      </div>

      {/* LOGIN BUTTON */}
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: 50,
          border: "none",
          background: password.length === 6
            ? "linear-gradient(135deg, #006E33, #00A550)"
            : "#C8E6C9",
          color: "#fff",
          fontSize: 16,
          fontWeight: 800,
          cursor: password.length === 6 ? "pointer" : "not-allowed",
          marginBottom: 40,
          transition: "all 0.2s",
          boxShadow: password.length === 6 ? "0 6px 20px rgba(0,110,51,0.3)" : "none",
        }}>
        {loading ? "Logging in..." : "Log in"}
      </button>

      {/* SPACER */}
      <div style={{ flex: 1 }} />

      {/* SWITCH ACCOUNT */}
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontSize: 15, color: "#006E33", fontWeight: 700, cursor: "pointer" }}
          onClick={() => router.push("/landing")}>
          Switch Account
        </span>
      </div>

      {/* CBN + NDIC BADGE */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "12px 20px",
        borderTop: "1px solid #f0f0f0",
        width: "100%",
      }}>
        <span style={{ fontSize: 20 }}>🏛️</span>
        <p style={{ fontSize: 12, color: "#888", margin: 0 }}>
          Licensed by the <strong style={{ color: "#1a1a1a" }}>CBN</strong> and insured by the{" "}
          <strong style={{ color: "#003087" }}>|NDIC</strong>
        </p>
      </div>

    </main>
  );
}