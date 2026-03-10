"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    if (name && phone && password && confirm) {
      if (password !== confirm) {
        alert("Passwords do not match!");
      } else {
        setLoading(true);
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      }
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #006E33 0%, #00A550 60%, #34D87A 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background circles */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", top: "40%", left: -40, width: 150, height: 150, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

      <div style={{
        background: "#fff",
        borderRadius: 28,
        padding: "36px 28px",
        width: "100%",
        maxWidth: 400,
        boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        position: "relative",
        zIndex: 1,
      }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: "linear-gradient(135deg, #006E33, #34D87A)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: 26,
            margin: "0 auto 14px",
            boxShadow: "0 6px 20px rgba(0,110,51,0.3)",
          }}>O</div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", margin: "0 0 6px" }}>
            Create Account
          </h1>
          <p style={{ fontSize: 13, color: "#757575", margin: 0 }}>
            Join millions of Nigerians on OPay
          </p>
        </div>

        {/* Full Name */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a", display: "block", marginBottom: 6, letterSpacing: "0.3px" }}>
            FULL NAME
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%", padding: "13px 16px",
              borderRadius: 12, border: "1.5px solid #eee",
              fontSize: 14, outline: "none",
              transition: "border 0.2s",
              boxSizing: "border-box",
            }}
            onFocus={(e) => e.target.style.border = "1.5px solid #006E33"}
            onBlur={(e) => e.target.style.border = "1.5px solid #eee"}
          />
        </div>

        {/* Phone Number */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a", display: "block", marginBottom: 6, letterSpacing: "0.3px" }}>
            PHONE NUMBER
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{
              padding: "13px 12px", borderRadius: 12,
              border: "1.5px solid #eee", fontSize: 14,
              color: "#1a1a1a", fontWeight: 600,
              background: "#f9f9f9", whiteSpace: "nowrap",
            }}>
              +234
            </div>
            <input
              type="tel"
              placeholder="080XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                flex: 1, padding: "13px 16px",
                borderRadius: 12, border: "1.5px solid #eee",
                fontSize: 14, outline: "none",
                boxSizing: "border-box",
              }}
              onFocus={(e) => e.target.style.border = "1.5px solid #006E33"}
              onBlur={(e) => e.target.style.border = "1.5px solid #eee"}
            />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a", display: "block", marginBottom: 6, letterSpacing: "0.3px" }}>
            PASSWORD
          </label>
          <input
            type="password"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%", padding: "13px 16px",
              borderRadius: 12, border: "1.5px solid #eee",
              fontSize: 14, outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => e.target.style.border = "1.5px solid #006E33"}
            onBlur={(e) => e.target.style.border = "1.5px solid #eee"}
          />
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: 22 }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a", display: "block", marginBottom: 6, letterSpacing: "0.3px" }}>
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            style={{
              width: "100%", padding: "13px 16px",
              borderRadius: 12, border: "1.5px solid #eee",
              fontSize: 14, outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => e.target.style.border = "1.5px solid #006E33"}
            onBlur={(e) => e.target.style.border = "1.5px solid #eee"}
          />
        </div>

        {/* Terms */}
        <p style={{ fontSize: 11, color: "#757575", textAlign: "center", margin: "0 0 18px", lineHeight: 1.6 }}>
          By creating an account, you agree to OPay&apos;s{" "}
          <a href="#" style={{ color: "#006E33", fontWeight: 600 }}>Terms of Service</a>{" "}
          and{" "}
          <a href="#" style={{ color: "#006E33", fontWeight: 600 }}>Privacy Policy</a>
        </p>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          style={{
            width: "100%", padding: "15px",
            borderRadius: 50, border: "none",
            background: loading ? "#ccc" : "linear-gradient(135deg, #006E33, #00A550)",
            color: "#fff", fontSize: 15, fontWeight: 700,
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: loading ? "none" : "0 6px 20px rgba(0,110,51,0.35)",
            transition: "all 0.3s",
          }}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#eee" }} />
          <span style={{ fontSize: 12, color: "#aaa", fontWeight: 500 }}>OR</span>
          <div style={{ flex: 1, height: 1, background: "#eee" }} />
        </div>

        {/* Login Link */}
        <p style={{ textAlign: "center", fontSize: 13, color: "#757575", margin: 0 }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#006E33", fontWeight: 700 }}>
            Log In
          </a>
        </p>

      </div>
    </main>
  );
}