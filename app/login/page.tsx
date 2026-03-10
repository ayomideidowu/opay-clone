"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (phone && password) {
      router.push("/dashboard");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "#F5F5F5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 24,
        padding: "40px 36px",
        width: "100%",
        maxWidth: 420,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: "linear-gradient(135deg, #006E33, #34D87A)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: 24,
            margin: "0 auto 12px",
          }}>O</div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#1a1a1a", margin: "0 0 6px" }}>
            Welcome Back
          </h1>
          <p style={{ fontSize: 14, color: "#757575", margin: 0 }}>
            Log in to your OPay account
          </p>
        </div>

        {/* Phone Number */}
        <div style={{ marginBottom: 16 }}>
          <label style={{
            fontSize: 13, fontWeight: 600, color: "#1a1a1a",
            display: "block", marginBottom: 6,
          }}>
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="080XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              width: "100%", padding: "12px 16px",
              borderRadius: 12, border: "1.5px solid #eee",
              fontSize: 15, outline: "none",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: 24 }}>
          <label style={{
            fontSize: 13, fontWeight: 600, color: "#1a1a1a",
            display: "block", marginBottom: 6,
          }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%", padding: "12px 16px",
              borderRadius: 12, border: "1.5px solid #eee",
              fontSize: 15, outline: "none",
            }}
          />
          <div style={{ textAlign: "right", marginTop: 8 }}>
            <a href="#" style={{ fontSize: 13, color: "#006E33", fontWeight: 600 }}>
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%", padding: "14px",
            borderRadius: 50, border: "none",
            background: "linear-gradient(135deg, #006E33, #00A550)",
            color: "#fff", fontSize: 16, fontWeight: 700,
            cursor: "pointer",
          }}>
          Log In
        </button>

        {/* Signup Link */}
        <p style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: "#757575" }}>
          Don&apos;t have an account?{" "}
          <a href="/signup" style={{ color: "#006E33", fontWeight: 700 }}>
            Sign Up
          </a>
        </p>

      </div>
    </main>
  );
}