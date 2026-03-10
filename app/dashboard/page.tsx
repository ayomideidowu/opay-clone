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
      background: "#F5F5F5",
      fontFamily: "'Segoe UI', sans-serif",
      paddingBottom: 80,
    }}>

      {/* TOP BAR */}
      <div style={{
        background: "#fff",
        padding: "52px 16px 12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" fill="none" stroke="#006E33" strokeWidth="2.5"/>
            <circle cx="16" cy="16" r="8" fill="none" stroke="#006E33" strokeWidth="2.5" strokeDasharray="20 10"/>
          </svg>
          <div style={{
            width: 26, height: 26, borderRadius: "50%",
            background: "#CD7F32",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14,
          }}>🥉</div>
          <span style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a" }}>Hi, Collins</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 4,
            background: "#F5F5F5", borderRadius: 20, padding: "5px 10px", cursor: "pointer",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
              <path d="M3 18v-2a7 7 0 0 1 14 0v2"/>
              <circle cx="10" cy="8" r="4"/>
              <path d="M21 15v2M21 12v.01"/>
            </svg>
            <span style={{ fontSize: 10, color: "#333", fontWeight: 800 }}>HELP</span>
          </div>
          <div style={{
            width: 32, height: 32, borderRadius: 8, background: "#F5F5F5",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="3" height="3" rx="0.5"/>
              <rect x="18" y="14" width="3" height="3" rx="0.5"/>
              <rect x="14" y="18" width="3" height="3" rx="0.5"/>
              <rect x="18" y="18" width="3" height="3" rx="0.5"/>
            </svg>
          </div>
          <div style={{
            width: 32, height: 32, borderRadius: "50%", background: "#F5F5F5",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            position: "relative",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <div style={{
              position: "absolute", top: 4, right: 4,
              width: 7, height: 7, borderRadius: "50%",
              background: "#FF3D00", border: "1.5px solid #fff",
            }} />
          </div>
        </div>
      </div>

      {/* BALANCE CARD */}
      <div style={{
        background: "linear-gradient(135deg, #006E33 0%, #00A550 100%)",
        margin: "12px 16px",
        borderRadius: 20,
        padding: "18px 20px",
        boxShadow: "0 8px 24px rgba(0,110,51,0.3)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>Available Balance</span>
            <button onClick={() => setHideBalance(!hideBalance)} style={{
              background: "none", border: "none", cursor: "pointer",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                {hideBalance
                  ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>
                  : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                }
              </svg>
            </button>
          </div>
          <span style={{ fontSize: 12, color: "#fff", fontWeight: 600, cursor: "pointer" }}>
            Transaction History &gt;
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 26, fontWeight: 900, color: "#fff", letterSpacing: 1 }}>
            {hideBalance ? "★ ★ ★ ★" : "₦250,000.00"}
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button style={{
            padding: "9px 22px", borderRadius: 50,
            background: "#fff", border: "none",
            color: "#006E33", fontWeight: 800, fontSize: 13, cursor: "pointer",
          }}>+ Add Money</button>
        </div>
      </div>

      {/* TRANSFER ACTIONS */}
      <div style={{
        background: "#fff", margin: "0 16px 12px",
        borderRadius: 20, padding: "18px 16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {[
            {
              label: "To OPay",
              svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#006E33" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
            },
            {
              label: "To Bank",
              svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#006E33" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
            },
            {
              label: "Withdraw",
              svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#006E33" strokeWidth="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
            },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => item.label === "To Bank" && router.push("/send")}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <div style={{
                width: 58, height: 58, borderRadius: 18,
                background: "#E8F5E9",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{item.svg}</div>
              <span style={{ fontSize: 12, color: "#333", fontWeight: 600 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div style={{
        background: "#fff", margin: "0 16px 12px",
        borderRadius: 20, padding: "18px 16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {[
            {
              label: "Airtime", badge: "Up to 6%", bg: "#E8F5E9",
              svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006E33" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" strokeLinecap="round"/></svg>,
            },
            {
              label: "Data", bg: "#E3F2FD",
              svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="2"><path d="M1.5 8.5A11 11 0 0 1 12 4a11 11 0 0 1 10.5 4.5"/><path d="M5 12a7 7 0 0 1 14 0"/><path d="M8.5 15.5a4 4 0 0 1 7 0"/><circle cx="12" cy="19" r="1" fill="#1565C0"/></svg>,
            },
            {
              label: "Betting", bg: "#F3E5F5",
              svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7B1FA2" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
            },
            {
              label: "TV", bg: "#FFF8E1",
              svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F57F17" strokeWidth="2"><rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="16 2 12 7 8 2"/></svg>,
            },
            {
              label: "SafeBox", bg: "#E0F2F1",
              svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00695C" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="#00695C"/></svg>,
            },
            {
              label: "Loan", bg: "#FCE4EC",
              svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
            },
            {
              label: "Check-In", bg: "#E8F5E9",
              svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006E33" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
            },
            {
              label: "More", bg: "#F5F5F5",
              svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><circle cx="12" cy="5" r="1" fill="#555"/><circle cx="12" cy="12" r="1" fill="#555"/><circle cx="12" cy="19" r="1" fill="#555"/></svg>,
            },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 6,
              cursor: "pointer", position: "relative",
            }}>
              {item.badge && (
                <div style={{
                  position: "absolute", top: -4, left: 0,
                  background: "#FF3D00", borderRadius: 8,
                  padding: "2px 5px",
                  fontSize: 7, color: "#fff", fontWeight: 800, zIndex: 1,
                }}>{item.badge}</div>
              )}
              <div style={{
                width: 54, height: 54, borderRadius: 16,
                background: item.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{item.svg}</div>
              <span style={{ fontSize: 10, color: "#444", fontWeight: 600, textAlign: "center" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PROMO BANNER */}
      <div style={{
        margin: "0 16px 12px", background: "#fff",
        borderRadius: 20, padding: "14px 16px",
        display: "flex", alignItems: "center", gap: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: "#1a1a1a",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, fontSize: 22,
        }}>🎰</div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: "#1a1a1a", margin: "0 0 3px" }}>
            Exclusive offers just for you!
          </p>
          <p style={{ fontSize: 12, color: "#757575", margin: 0, lineHeight: 1.5 }}>
            Enjoy up to ₦1000 free coupon on your first deposit
          </p>
          <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{
                width: i === 1 ? 16 : 5, height: 5, borderRadius: 3,
                background: i === 1 ? "#006E33" : "#ddd",
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div style={{
        background: "#fff", margin: "0 16px",
        borderRadius: 20, padding: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginBottom: 20,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a1a", margin: 0 }}>Recent Transactions</h3>
          <span style={{ fontSize: 13, color: "#006E33", fontWeight: 700, cursor: "pointer" }}>See All</span>
        </div>
        {[
          { bg: "#E8F5E9", stroke: "#006E33", name: "Salary Payment", date: "Today, 9:00 AM", amount: "+₦250,000", type: "credit", bank: "GTBank" },
          { bg: "#F5F5F5", stroke: "#555", name: "MTN Airtime", date: "Today, 8:30 AM", amount: "-₦2,000", type: "debit", bank: "OPay" },
          { bg: "#F5F5F5", stroke: "#555", name: "Transfer to Amaka", date: "Yesterday", amount: "-₦15,000", type: "debit", bank: "Access Bank" },
          { bg: "#F5F5F5", stroke: "#555", name: "EKEDC Electricity", date: "Mar 6", amount: "-₦8,500", type: "debit", bank: "OPay" },
          { bg: "#E8F5E9", stroke: "#006E33", name: "Refund - Konga", date: "Mar 5", amount: "+₦5,200", type: "credit", bank: "OPay" },
        ].map((tx, i) => (
          <div key={tx.name} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "11px 0", borderBottom: i < 4 ? "1px solid #f5f5f5" : "none",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 13,
                background: tx.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={tx.stroke} strokeWidth="2">
                  {tx.type === "credit"
                    ? <><path d="M12 2v20"/><polyline points="18 8 12 2 6 8"/></>
                    : <><path d="M12 2v20"/><polyline points="6 16 12 22 18 16"/></>
                  }
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>{tx.name}</p>
                <p style={{ fontSize: 11, color: "#aaa", margin: "3px 0 0" }}>{tx.date} • {tx.bank}</p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{
                fontSize: 13, fontWeight: 800, margin: 0,
                color: tx.type === "credit" ? "#006E33" : "#1a1a1a",
              }}>{tx.amount}</p>
              <p style={{
                fontSize: 10, margin: "3px 0 0", fontWeight: 600,
                color: tx.type === "credit" ? "#006E33" : "#aaa",
              }}>{tx.type === "credit" ? "Credit" : "Debit"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM NAV */}
      <div style={{
        position: "fixed", bottom: 0,
        left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 430,
        background: "#fff", borderTop: "1px solid #f0f0f0",
        display: "flex", justifyContent: "space-around",
        padding: "10px 0 24px", zIndex: 100,
        boxShadow: "0 -2px 16px rgba(0,0,0,0.06)",
      }}>
        {[
          {
            id: "home", label: "Home",
            svg: (active: boolean) => <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#006E33" : "none"} stroke={active ? "#006E33" : "#bbb"} strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
          },
          {
            id: "rewards", label: "Rewards",
            svg: (active: boolean) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#006E33" : "#bbb"} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
          },
          {
            id: "finance", label: "Finance",
            svg: (active: boolean) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#006E33" : "#bbb"} strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
          },
          {
            id: "cards", label: "Cards",
            svg: (active: boolean) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#006E33" : "#bbb"} strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
          },
          {
            id: "me", label: "Me",
            svg: (active: boolean) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#006E33" : "#bbb"} strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              color: activeTab === tab.id ? "#006E33" : "#bbb",
              fontFamily: "sans-serif", fontSize: 10, fontWeight: 700,
              padding: "2px 12px", position: "relative",
            }}>
            {activeTab === tab.id && (
              <div style={{
                position: "absolute", top: -10, left: "50%",
                transform: "translateX(-50%)",
                width: 28, height: 3, borderRadius: 2, background: "#006E33",
              }} />
            )}
            {tab.svg(activeTab === tab.id)}
            {tab.label}
          </button>
        ))}
      </div>

    </main>
  );
}