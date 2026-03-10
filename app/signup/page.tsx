"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [showInvite, setShowInvite] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (!phone || phone.length < 10 || !agreed) return;
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
      padding: "52px 24px 40px",
    }}>

      {/* HEADER */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: 32,
      }}>
        <button
          onClick={() => router.push("/landing")}
          style={{
            background: "none", border: "none",
            fontSize: 22, cursor: "pointer", color: "#1a1a1a",
          }}>
          &#8592;
        </button>
        <span style={{ fontSize: 15, color: "#006E33", fontWeight: 700, cursor: "pointer" }}>
          Help
        </span>
      </div>

      {/* TITLE */}
      <h1 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a1a", margin: "0 0 28px" }}>
        Get an OPay Account
      </h1>

      {/* PHONE INPUT */}
      <div style={{
        border: "1.5px solid #006E33",
        borderRadius: 12, overflow: "hidden",
        display: "flex", alignItems: "center",
        marginBottom: 14,
      }}>
        <div style={{
          padding: "16px 14px",
          display: "flex", alignItems: "center", gap: 8,
          borderRight: "1.5px solid #eee",
          flexShrink: 0,
        }}>
          <svg width="24" height="16" viewBox="0 0 24 16">
            <rect width="8" height="16" fill="#006E33"/>
            <rect x="8" width="8" height="16" fill="#fff"/>
            <rect x="16" width="8" height="16" fill="#006E33"/>
          </svg>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a" }}>+234</span>
        </div>
        <input
          type="tel"
          placeholder="814 798 6995"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            flex: 1, padding: "16px 14px",
            border: "none", outline: "none",
            fontSize: 16, color: "#1a1a1a",
            background: "transparent",
          }}
        />
      </div>

      {/* INVITATION CODE */}
      <div
        onClick={() => setShowInvite(!showInvite)}
        style={{
          border: "1.5px solid #eee",
          borderRadius: 12, padding: "14px 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          cursor: "pointer", marginBottom: 32,
          background: "#F5FBF7",
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "#E8F5E9",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
          }}>🎁</div>
          <span style={{ fontSize: 14, color: "#555", fontWeight: 500 }}>
            Have an Invitation Code? (Optional)
          </span>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5">
          {showInvite
            ? <polyline points="18 15 12 9 6 15"/>
            : <polyline points="6 9 12 15 18 9"/>
          }
        </svg>
      </div>

      {showInvite && (
        <div style={{ marginTop: -24, marginBottom: 24 }}>
          <input
            type="text"
            placeholder="Enter invitation code"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            style={{
              width: "100%", padding: "14px 16px",
              border: "1.5px solid #006E33", borderRadius: 12,
              fontSize: 15, outline: "none", color: "#1a1a1a",
              boxSizing: "border-box",
            }}
          />
        </div>
      )}

      {/* AIRTIME VOUCHER */}
      <div style={{
        display: "flex", justifyContent: "center", marginBottom: 16,
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "#F0FAF4", borderRadius: 50,
          padding: "8px 18px", border: "1px solid #C8E6C9",
        }}>
          <span style={{ fontSize: 20 }}>🎁</span>
          <span style={{ fontSize: 13, color: "#006E33", fontWeight: 700 }}>
            Get ₦300 airtime voucher
          </span>
        </div>
      </div>

      {/* NEXT BUTTON */}
      <button
        onClick={handleNext}
        style={{
          width: "100%", padding: "16px",
          borderRadius: 14, border: "none",
          background: phone.length >= 10 && agreed
            ? "#006E33" : "#A5D6A7",
          color: "#fff", fontSize: 16, fontWeight: 800,
          cursor: phone.length >= 10 && agreed ? "pointer" : "not-allowed",
          marginBottom: 16,
          letterSpacing: 1,
          boxShadow: phone.length >= 10 && agreed
            ? "0 6px 20px rgba(0,110,51,0.35)" : "none",
          transition: "all 0.2s",
        }}>
        {loading ? "Please wait..." : "NEXT"}
      </button>

      {/* TERMS */}
      <div style={{
        display: "flex", alignItems: "flex-start", gap: 10,
        marginBottom: 32,
      }}>
        <div
          onClick={() => setAgreed(!agreed)}
          style={{
            width: 20, height: 20, borderRadius: 4, flexShrink: 0,
            background: agreed ? "#006E33" : "#fff",
            border: `2px solid ${agreed ? "#006E33" : "#ccc"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", marginTop: 2,
          }}>
          {agreed && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          )}
        </div>
        <p style={{ fontSize: 13, color: "#555", margin: 0, lineHeight: 1.6 }}>
          I have read, understood and agreed to the{" "}
          <span style={{ color: "#006E33", fontWeight: 700, cursor: "pointer" }}>Terms & Conditions</span>
          {" "}and{" "}
          <span style={{ color: "#006E33", fontWeight: 700, cursor: "pointer" }}>Privacy Policy.</span>
        </p>
      </div>

      {/* SPACER */}
      <div style={{ flex: 1 }} />

      {/* ALREADY HAVE ACCOUNT */}
      <p style={{ textAlign: "center", fontSize: 15, color: "#555", margin: "0 0 20px" }}>
        Already have an OPay Account?{" "}
        <span
          onClick={() => router.push("/login")}
          style={{ color: "#006E33", fontWeight: 800, cursor: "pointer" }}>
          Log in
        </span>
      </p>

      {/* CBN + NDIC */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        paddingTop: 16, borderTop: "1px solid #f0f0f0",
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