"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  const [hideBalance, setHideBalance] = useState(true);

  return (
    <main style={{
      maxWidth: 430,
      margin: "0 auto",
      minHeight: "100vh",
      background: "#F5F7F5",
      fontFamily: "'Segoe UI', sans-serif",
      position: "relative",
    }}>

      {/* TOP BAR */}
      <div style={{
        background: "#fff",
        padding: "52px 20px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #f0f0f0",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, #006E33, #34D87A)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: 16,
          }}>O</div>
          <span style={{ fontSize: 22 }}>🥉</span>
          <p style={{ fontSize: 15, color: "#006E33", fontWeight: 800, margin: 0 }}>Hi, Collins</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 4,
            background: "#f0f0f0", borderRadius: 20,
            padding: "5px 10px", cursor: "pointer",
          }}>
            <span style={{ fontSize: 14 }}>🎧</span>
            <span style={{ fontSize: 11, color: "#333", fontWeight: 700 }}>HELP</span>
          </div>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#f0f0f0",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, cursor: "pointer",
          }}>🔲</div>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#f0f0f0",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, cursor: "pointer",
          }}>🔔</div>
        </div>
      </div>

      {/* BALANCE CARD */}
      <div style={{
        background: "linear-gradient(135deg, #006E33, #00A550)",
        margin: "16px",
        borderRadius: 20,
        padding: "20px",
        boxShadow: "0 6px 24px rgba(0,110,51,0.3)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
              Available Balance
            </span>
            <button
              onClick={() => setHideBalance(!hideBalance)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16 }}>
              {hideBalance ? "👁️" : "🙈"}
            </button>
          </div>
          <span style={{
            fontSize: 13, color: "#fff", fontWeight: 600,
            cursor: "pointer", textDecoration: "underline",
          }}>
            Transaction History &gt;
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-1px" }}>
            {hideBalance ? "****" : "N250,000.00"}
          </h1>
          <span style={{ fontSize: 20, cursor: "pointer", color: "#fff" }}>&gt;</span>
        </div>

        <button style={{
          padding: "10px 24px", borderRadius: 50,
          background: "#fff", border: "none",
          color: "#006E33", fontWeight: 700, fontSize: 14,
          cursor: "pointer", float: "right",
        }}>
          + Add Money
        </button>
        <div style={{ clear: "both" }} />
      </div>

      {/* TRANSFER ACTIONS */}
      <div style={{
        background: "#fff",
        margin: "0 16px 14px",
        borderRadius: 20,
        padding: "20px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {[
            { icon: "👤", label: "To OPay", color: "#E8F5E9" },
            { icon: "🏦", label: "To Bank", color: "#E8F5E9" },
            { icon: "🏧", label: "Withdraw", color: "#E8F5E9" },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => item.label === "To Bank" && router.push("/send")}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <div style={{
                width: 60, height: 60, borderRadius: 18,
                background: item.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28,
              }}>{item.icon}</div>
              <span style={{ fontSize: 12, color: "#333", fontWeight: 600 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div style={{
        background: "#fff",
        margin: "0 16px 14px",
        borderRadius: 20,
        padding: "20px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {[
            { icon: "📊", label: "Airtime", color: "#E8F5E9", badge: "Up to 6%" },
            { icon: "📶", label: "Data", color: "#E3F2FD" },
            { icon: "🎰", label: "Betting", color: "#F3E5F5" },
            { icon: "📺", label: "TV", color: "#FFF8E1" },
            { icon: "🔒", label: "SafeBox", color: "#E0F2F1" },
            { icon: "💰", label: "Loan", color: "#FCE4EC" },
            { icon: "✅", label: "Check-In", color: "#E8F5E9" },
            { icon: "➕", label: "More", color: "#F5F5F5" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", position: "relative" }}>
              {item.badge && (
                <div style={{
                  position: "absolute", top: -4, left: 4,
                  background: "#FF5722", borderRadius: 10,
                  padding: "1px 5px",
                  fontSize: 8, color: "#fff", fontWeight: 700, zIndex: 1,
                }}>{item.badge}</div>
              )}
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: item.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26,
              }}>{item.icon}</div>
              <span style={{ fontSize: 10, color: "#555", fontWeight: 600, textAlign: "center" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROMO BANNER */}
      <div style={{
        margin: "0 16px 14px",
        background: "#fff",
        borderRadius: 20,
        padding: "16px",
        display: "flex", alignItems: "center", gap: 14,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: "#1a1a1a",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, flexShrink: 0,
        }}>🎰</div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", margin: "0 0 4px" }}>
            Exclusive offers just for you!
          </p>
          <p style={{ fontSize: 12, color: "#757575", margin: 0, lineHeight: 1.5 }}>
            Enjoy up to N1000 free coupon on your first deposit
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{
              width: i === 1 ? 20 : 6, height: 6,
              borderRadius: 3,
              background: i === 1 ? "#006E33" : "#ddd",
            }} />
          ))}
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div style={{
        background: "#fff",
        margin: "0 16px",
        borderRadius: 20,
        padding: "18px 16px",
        marginBottom: 100,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Recent Transactions</h3>
          <span style={{ fontSize: 13, color: "#006E33", fontWeight: 600, cursor: "pointer" }}>See All</span>
        </div>

        {[
          { icon: "💼", name: "Salary Payment", date: "Today, 9:00 AM", amount: "+N250,000", type: "credit", bank: "GTBank" },
          { icon: "📱", name: "MTN Airtime", date: "Today, 8:30 AM", amount: "-N2,000", type: "debit", bank: "OPay" },
          { icon: "👤", name: "Transfer to Amaka", date: "Yesterday, 3:00 PM", amount: "-N15,000", type: "debit", bank: "Access Bank" },
          { icon: "⚡", name: "EKEDC Electricity", date: "Mar 6, 10:00 AM", amount: "-N8,500", type: "debit", bank: "OPay" },
          { icon: "🛍️", name: "Refund - Konga", date: "Mar 5, 2:00 PM", amount: "+N5,200", type: "credit", bank: "OPay" },
        ].map((tx, i) => (
          <div key={tx.name} style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            padding: "11px 0",
            borderBottom: i < 4 ? "1px solid #f5f5f5" : "none",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 46, height: 46, borderRadius: 14,
                background: tx.type === "credit" ? "#E8F5E9" : "#F5F5F5",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>{tx.icon}</div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", margin: 0 }}>{tx.name}</p>
                <p style={{ fontSize: 11, color: "#999", margin: "3px 0 0" }}>{tx.date} • {tx.bank}</p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{
                fontSize: 14, fontWeight: 700, margin: 0,
                color: tx.type === "credit" ? "#006E33" : "#1a1a1a",
              }}>{tx.amount}</p>
              <p style={{ fontSize: 10, color: tx.type === "credit" ? "#006E33" : "#999", margin: "3px 0 0", fontWeight: 600 }}>
                {tx.type === "credit" ? "Credit" : "Debit"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM NAV */}
      <div style={{
        position: "fixed", bottom: 0,
        left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 430,
        background: "#fff",
        borderTop: "1px solid #eee",
        display: "flex", justifyContent: "space-around",
        padding: "10px 0 22px",
        zIndex: 100,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.07)",
      }}>
        {[
          { id: "home", icon: "🏠", label: "Home" },
          { id: "rewards", icon: "🎁", label: "Rewards" },
          { id: "finance", icon: "📈", label: "Finance" },
          { id: "cards", icon: "💳", label: "Cards" },
          { id: "me", icon: "👤", label: "Me" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              color: activeTab === tab.id ? "#006E33" : "#bbb",
              fontFamily: "sans-serif", fontSize: 10, fontWeight: 700,
              padding: "4px 10px",
            }}>
            <span style={{ fontSize: 22 }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

    </main>
  );
}