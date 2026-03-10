"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const allBanks = [
  { name: "OPay", short: "OP", color: "#006E33" },
  { name: "PalmPay", short: "PP", color: "#00A550" },
  { name: "Kuda Bank", short: "KB", color: "#4B0082" },
  { name: "Moniepoint", short: "MP", color: "#FF6600" },
  { name: "GTBank", short: "GT", color: "#F26522" },
  { name: "Access Bank", short: "AC", color: "#E30613" },
  { name: "First Bank", short: "FB", color: "#003087" },
  { name: "Zenith Bank", short: "ZB", color: "#D4002B" },
  { name: "UBA", short: "UB", color: "#E10C0C" },
  { name: "Fidelity Bank", short: "FD", color: "#006B3F" },
  { name: "Sterling Bank", short: "ST", color: "#C8102E" },
  { name: "Wema Bank", short: "WB", color: "#7B2D8B" },
  { name: "FCMB", short: "FC", color: "#003366" },
  { name: "Polaris Bank", short: "PB", color: "#E30613" },
  { name: "Stanbic IBTC", short: "SI", color: "#0033A0" },
  { name: "Union Bank", short: "UB", color: "#003366" },
  { name: "Ecobank", short: "EC", color: "#003087" },
  { name: "Heritage Bank", short: "HB", color: "#009900" },
  { name: "Jaiz Bank", short: "JB", color: "#009900" },
  { name: "Keystone Bank", short: "KS", color: "#006B3F" },
  { name: "Providus Bank", short: "PV", color: "#6A0DAD" },
  { name: "Titan Trust Bank", short: "TT", color: "#FF6600" },
  { name: "VFD Microfinance", short: "VF", color: "#003366" },
  { name: "Carbon", short: "CB", color: "#1a1a1a" },
];

const frequentBanks = allBanks.slice(0, 6);

export default function SelectBankPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);

  const filtered = allBanks.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc: Record<string, typeof allBanks>, bank) => {
    const letter = bank.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(bank);
    return acc;
  }, {});

  const alphabet = Object.keys(grouped).sort();

  return (
    <main style={{
      maxWidth: 430,
      margin: "0 auto",
      minHeight: "100vh",
      background: "#F5F5F5",
      fontFamily: "'Segoe UI', sans-serif",
    }}>

      {/* HEADER */}
      <div style={{
        background: "#fff",
        padding: "52px 20px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #f0f0f0",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <button
          onClick={() => router.back()}
          style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#333" }}>
          ✕
        </button>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>
          Select Bank
        </h2>
        <span style={{ width: 24 }} />
      </div>

      {/* SEARCH */}
      <div style={{
        background: "#fff",
        padding: "12px 16px",
        borderBottom: "1px solid #f0f0f0",
        position: "sticky", top: 72, zIndex: 99,
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "#F5F5F5", borderRadius: 12,
          padding: "10px 16px",
        }}>
          <span style={{ fontSize: 18, color: "#999" }}>🔍</span>
          <input
            type="text"
            placeholder="Search Bank Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: "none", outline: "none", background: "transparent",
              fontSize: 15, color: "#1a1a1a", flex: 1,
            }}
          />
        </div>
      </div>

      <div style={{ padding: "16px" }}>

        {/* FREQUENTLY USED */}
        {!search && (
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "16px",
            marginBottom: 16,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", margin: "0 0 16px" }}>
              Frequently Used Bank
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {(expanded ? frequentBanks : frequentBanks.slice(0, 6)).map((bank) => (
                <div
                  key={bank.name}
                  onClick={() => {
                    const params = new URLSearchParams(window.location.search);
                    router.push(`/send?bank=${encodeURIComponent(bank.name)}`);
                  }}
                  style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", gap: 8, cursor: "pointer",
                  }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: bank.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 800, fontSize: 14,
                    boxShadow: `0 4px 12px ${bank.color}40`,
                  }}>{bank.short}</div>
                  <span style={{ fontSize: 11, color: "#555", fontWeight: 600, textAlign: "center", lineHeight: 1.3 }}>
                    {bank.name}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                width: "100%", marginTop: 16, padding: "10px",
                background: "#F5F5F5", border: "none", borderRadius: 10,
                fontSize: 13, fontWeight: 600, color: "#555", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              }}>
              {expanded ? "Collapse ▲" : "Expand ▼"}
            </button>
          </div>
        )}

        {/* ALL BANKS A-Z */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "16px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          marginBottom: 40,
        }}>
          {alphabet.map((letter) => (
            <div key={letter}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#999", margin: "12px 0 8px" }}>
                {letter}
              </p>
              {grouped[letter].map((bank, i) => (
                <div
                  key={bank.name}
                  onClick={() => router.push(`/send?bank=${encodeURIComponent(bank.name)}`)}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "12px 0",
                    borderBottom: i < grouped[letter].length - 1 ? "1px solid #f5f5f5" : "none",
                    cursor: "pointer",
                  }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%",
                    background: bank.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 800, fontSize: 13,
                    flexShrink: 0,
                    boxShadow: `0 2px 8px ${bank.color}40`,
                  }}>{bank.short}</div>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>
                    {bank.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* ALPHABET SIDEBAR */}
      <div style={{
        position: "fixed", right: 4, top: "50%",
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: 2, zIndex: 200,
      }}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("").map((l) => (
          <span key={l} style={{ fontSize: 9, color: "#006E33", fontWeight: 700, cursor: "pointer" }}>
            {l}
          </span>
        ))}
      </div>

    </main>
  );
}