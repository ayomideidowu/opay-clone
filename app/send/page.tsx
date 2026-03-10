"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SendMoneyPage() {
  const router = useRouter();
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("");
  const [accountName, setAccountName] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [pin, setPin] = useState("");
  const [showBankList, setShowBankList] = useState(false);

  const bankList = [
    "OPay", "PalmPay", "Kuda Bank", "GTBank", "Access Bank",
    "First Bank", "Zenith Bank", "UBA", "Fidelity Bank",
    "Sterling Bank", "Moniepoint", "Wema Bank", "FCMB",
    "Polaris Bank", "Stanbic IBTC", "Union Bank",
  ];

  const recentRecipients = [
    { name: "CHIGEMEZU PROMISE CHUKWUKEM", account: "9070063552", bank: "OPay" },
    { name: "GALADIMA AHAMAD DAHIYE", account: "9043608039", bank: "OPay" },
    { name: "AMAKA OKONKWO", account: "0123456789", bank: "GTBank" },
    { name: "JOHN EMEKA DOE", account: "0987654321", bank: "Access Bank" },
  ];

  const handleAccountChange = (val: string) => {
    if (val.length > 10) return;
    setAccountNumber(val);
    setError("");
    setAccountName("");
    if (val.length === 10) {
      setAccountName("COLLINS JOHN DOE");
    } else if (val.length < 10 && val.length > 0) {
      setError("Please enter 10 digits Account Number.");
    }
  };

  const handleNext = () => {
    if (!accountNumber || accountNumber.length < 10) {
      setError("Please enter 10 digits Account Number.");
      return;
    }
    if (!bank) {
      setError("Please select a bank.");
      return;
    }
    setStep(2);
  };

  if (step === 4) {
    return (
      <div style={{
        maxWidth: 430, margin: "0 auto", minHeight: "100vh",
        background: "#1a1a1a", fontFamily: "'Segoe UI', sans-serif",
        overflowY: "auto",
      }}>
        <div style={{ padding: "52px 20px 0", display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => router.push("/dashboard")}
            style={{ background: "none", border: "none", fontSize: 16, fontWeight: 700, color: "#00C853", cursor: "pointer" }}>
            Done
          </button>
        </div>

        <div style={{ textAlign: "center", padding: "24px 20px 28px" }}>
          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            background: "#00C853",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 20px",
          }}>
            <span style={{ fontSize: 36, color: "#fff" }}>✓</span>
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>
            Transfer successful
          </h2>
          <p style={{ fontSize: 32, fontWeight: 900, color: "#fff", margin: 0 }}>
            ₦{Number(amount).toLocaleString()}.00
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10, padding: "0 16px 20px",
        }}>
          {[
            { icon: "↗️", label: "Share Receipt" },
            { icon: "🧑‍🤝‍🧑", label: "Add to favourites" },
            { icon: "📋", label: "View Details" },
          ].map((btn) => (
            <div key={btn.label} style={{
              background: "#2a2a2a", borderRadius: 14,
              padding: "16px 8px",
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 8, cursor: "pointer",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "#333",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>{btn.icon}</div>
              <span style={{ fontSize: 11, color: "#fff", fontWeight: 600, textAlign: "center", lineHeight: 1.4 }}>
                {btn.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{
          background: "#2a2a2a", margin: "0 16px 16px",
          borderRadius: 16, padding: "20px",
        }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: "0 0 16px" }}>
            Special Bonus For You
          </h3>
          {[
            { icon: "💰", title: "Save easily", desc: "Earn more interest every day!" },
            { icon: "💳", title: "Enjoy online payment", desc: "Using OPay Verve Card now" },
            { icon: "⚙️", title: "Bet big, win bigger!", desc: "Get Discounts That Wow! 😎" },
            { icon: "⚡", title: "Electricity Payment", desc: "Fast&Easy Electricity Bill Pay" },
          ].map((item, i) => (
            <div key={item.title} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 0", borderBottom: i < 3 ? "1px solid #333" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: "#333",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
                }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>{item.title}</p>
                  <p style={{ fontSize: 12, color: "#888", margin: "3px 0 0" }}>{item.desc}</p>
                </div>
              </div>
              <button style={{
                padding: "9px 22px", borderRadius: 50,
                background: "#00C853", border: "none",
                color: "#fff", fontWeight: 800, fontSize: 13, cursor: "pointer",
              }}>GO</button>
            </div>
          ))}
        </div>

        <div style={{
          margin: "0 16px 40px",
          background: "linear-gradient(135deg, #2a2a2a, #222)",
          borderRadius: 16, padding: "16px 20px",
          border: "1px solid #333",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 14, fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>
              Claim Up to ₦40 Betting Discount
            </p>
            <p style={{ fontSize: 12, color: "#888", margin: 0 }}>
              Deposit ₦600 &amp; get ₦40 Off.
            </p>
          </div>
          <div style={{
            background: "#FFD700", borderRadius: 10,
            padding: "8px 14px", textAlign: "center", marginLeft: 12,
          }}>
            <p style={{ fontSize: 9, color: "#1a1a1a", margin: 0, fontWeight: 700 }}>VOUCHER</p>
            <p style={{ fontSize: 20, fontWeight: 900, color: "#1a1a1a", margin: 0 }}>₦40</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main style={{
      maxWidth: 430, margin: "0 auto", minHeight: "100vh",
      background: "#F5F5F5", fontFamily: "'Segoe UI', sans-serif",
    }}>

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <div style={{
            background: "#fff", padding: "52px 20px 16px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            borderBottom: "1px solid #f0f0f0",
          }}>
            <button onClick={() => router.push("/dashboard")}
              style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#333" }}>
              &#8592;
            </button>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>
              Transfer To Bank Account
            </h2>
            <span style={{ fontSize: 14, color: "#006E33", fontWeight: 700, cursor: "pointer" }}>History</span>
          </div>

          <div style={{
            background: "linear-gradient(135deg, #1a1a1a, #333)",
            padding: "16px 20px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div>
              <p style={{ fontSize: 13, color: "#FFD700", fontWeight: 800, margin: "0 0 4px" }}>1M X Max Multiplier</p>
              <p style={{ fontSize: 11, color: "#fff", margin: "0 0 10px" }}>Dey For Our JetX</p>
              <button style={{
                background: "#8B00FF", border: "none", borderRadius: 6,
                padding: "6px 14px", color: "#fff", fontSize: 11, fontWeight: 700, cursor: "pointer",
              }}>PLAY NOW</button>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", margin: "0 0 4px" }}>OPay</p>
              <p style={{ fontSize: 20, fontWeight: 900, color: "#fff", margin: 0 }}>betPawa</p>
              <p style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", margin: 0 }}>www.betPawa.ng</p>
            </div>
          </div>

          <div style={{ background: "#EEF0FF", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 18 }}>⚡</span>
            <p style={{ fontSize: 13, color: "#3333cc", fontWeight: 600, margin: 0 }}>
              Free transfers for the day: <strong>3</strong>
            </p>
          </div>

          <div style={{
            background: "#fff", margin: "12px 16px", borderRadius: 16,
            padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "0 0 20px" }}>
              Recipient Account
            </h3>

            <div style={{ marginBottom: 16 }}>
              <input
                type="number"
                placeholder="Enter 10 digits Account Number"
                value={accountNumber}
                onChange={(e) => handleAccountChange(e.target.value)}
                style={{
                  width: "100%", padding: "12px 0",
                  border: "none", borderBottom: `2px solid ${error ? "#D32F2F" : "#006E33"}`,
                  fontSize: 15, outline: "none", background: "transparent", color: "#1a1a1a",
                }}
              />
              {error && <p style={{ fontSize: 12, color: "#D32F2F", margin: "6px 0 0" }}>{error}</p>}
              {accountName && (
                <p style={{ fontSize: 13, color: "#006E33", fontWeight: 700, margin: "6px 0 0" }}>
                  ✓ {accountName}
                </p>
              )}
            </div>

            {/* SELECT BANK */}
            <div style={{ marginBottom: 20, position: "relative" }}>
              <div
                onClick={() => setShowBankList(!showBankList)}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 0", borderBottom: "1px solid #eee", cursor: "pointer",
                }}>
                <span style={{ fontSize: 15, color: bank ? "#1a1a1a" : "#aaa" }}>
                  {bank || "Select Bank"}
                </span>
                <span style={{ color: "#aaa", fontSize: 18 }}>{showBankList ? "▲" : "▼"}</span>
              </div>

              {showBankList && (
                <div style={{
                  position: "absolute", top: "100%", left: 0, right: 0,
                  background: "#fff", borderRadius: 12, zIndex: 999,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  maxHeight: 240, overflowY: "auto",
                  border: "1px solid #eee",
                }}>
                  {bankList.map((b) => (
                    <div
                      key={b}
                      onClick={() => {
                        setBank(b);
                        setShowBankList(false);
                        if (accountNumber.length === 10) setAccountName("COLLINS JOHN DOE");
                      }}
                      style={{
                        padding: "13px 16px",
                        borderBottom: "1px solid #f5f5f5",
                        fontSize: 14, fontWeight: 500, color: "#1a1a1a",
                        cursor: "pointer",
                      }}>
                      {b}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleNext}
              style={{
                width: "100%", padding: "14px", borderRadius: 50, border: "none",
                background: accountNumber.length === 10 && bank
                  ? "linear-gradient(135deg, #006E33, #00A550)" : "#B2DFDB",
                color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer",
              }}>
              Next
            </button>
          </div>

          <div style={{
            background: "#fff", margin: "0 16px 14px", borderRadius: 16,
            padding: "16px 20px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)", cursor: "pointer",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: "#E8F5E9",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
              }}>📊</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>
                Bank Transfer Success Rate Monitor
              </span>
            </div>
            <span style={{ color: "#aaa" }}>&gt;</span>
          </div>

          <div style={{
            background: "#fff", margin: "0 16px", borderRadius: 16,
            padding: "16px 20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 40,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ display: "flex", gap: 20 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#006E33", borderBottom: "2px solid #006E33", paddingBottom: 4 }}>
                  Recents
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#aaa" }}>Favourites</span>
              </div>
              <span style={{ fontSize: 20, cursor: "pointer" }}>🔍</span>
            </div>
            {recentRecipients.map((r) => (
              <div
                key={r.account}
                onClick={() => {
                  setAccountNumber(r.account);
                  setBank(r.bank);
                  setAccountName(r.name);
                  setShowBankList(false);
                }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "12px 0", borderBottom: "1px solid #f5f5f5", cursor: "pointer",
                }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>{r.name}</p>
                  <p style={{ fontSize: 12, color: "#999", margin: "3px 0 0" }}>{r.account} • {r.bank}</p>
                </div>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  border: "2px solid #006E33",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
                }}>↩</div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <div style={{
            background: "#fff", padding: "52px 20px 16px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            borderBottom: "1px solid #f0f0f0",
          }}>
            <button onClick={() => setStep(1)}
              style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#333" }}>
              &#8592;
            </button>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Enter Amount</h2>
            <span />
          </div>

          <div style={{
            background: "#fff", margin: "16px", borderRadius: 16,
            padding: "24px 20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}>
            <p style={{ fontSize: 13, color: "#999", margin: "0 0 4px" }}>Sending to</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", margin: "0 0 20px" }}>
              {accountName} • {bank}
            </p>

            <div style={{ textAlign: "center", padding: "20px 0", borderBottom: "1px solid #f5f5f5", marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: "#999", margin: "0 0 8px" }}>Amount (₦)</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <span style={{ fontSize: 28, fontWeight: 700 }}>₦</span>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    fontSize: 36, fontWeight: 900, color: "#1a1a1a",
                    border: "none", outline: "none", width: 180,
                    textAlign: "center", background: "transparent",
                  }}
                />
              </div>
              <p style={{ fontSize: 12, color: "#999", margin: "8px 0 0" }}>Balance: ₦250,000.00</p>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {["1000", "2000", "5000", "10000", "20000", "50000"].map((q) => (
                <button key={q} onClick={() => setAmount(q)} style={{
                  padding: "7px 14px", borderRadius: 50,
                  border: "1.5px solid #eee", background: "#fff",
                  fontSize: 13, fontWeight: 600, color: "#006E33", cursor: "pointer",
                }}>
                  ₦{Number(q).toLocaleString()}
                </button>
              ))}
            </div>

            <div style={{ marginBottom: 20 }}>
              <input
                type="text"
                placeholder="Narration (Optional)"
                value={narration}
                onChange={(e) => setNarration(e.target.value)}
                style={{
                  width: "100%", padding: "12px 0",
                  border: "none", borderBottom: "1.5px solid #eee",
                  fontSize: 15, outline: "none", background: "transparent",
                }}
              />
            </div>

            <button onClick={() => amount ? setStep(3) : alert("Enter amount!")} style={{
              width: "100%", padding: "14px", borderRadius: 50, border: "none",
              background: "linear-gradient(135deg, #006E33, #00A550)",
              color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer",
            }}>
              Next
            </button>
          </div>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <div style={{
            background: "#fff", padding: "52px 20px 16px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            borderBottom: "1px solid #f0f0f0",
          }}>
            <button onClick={() => setStep(2)}
              style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer" }}>
              &#8592;
            </button>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Confirm Transfer</h2>
            <span />
          </div>

          <div style={{
            background: "#fff", margin: "16px", borderRadius: 16,
            padding: "24px 20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center",
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔐</div>
            <p style={{ fontSize: 14, color: "#999", margin: "0 0 4px" }}>Sending</p>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#006E33", margin: "0 0 4px" }}>
              ₦{Number(amount).toLocaleString()}
            </h2>
            <p style={{ fontSize: 13, color: "#999", margin: "0 0 24px" }}>to {accountName} • {bank}</p>

            <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", margin: "0 0 12px" }}>
              Enter Transaction PIN
            </p>
            <input
              type="password"
              placeholder="----"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={4}
              style={{
                width: 160, padding: "14px", borderRadius: 12,
                border: "1.5px solid #eee", fontSize: 24, outline: "none",
                textAlign: "center", letterSpacing: 8, marginBottom: 24,
              }}
            />

            <button
              onClick={() => pin.length === 4 ? setStep(4) : alert("Enter 4-digit PIN!")}
              style={{
                width: "100%", padding: "14px", borderRadius: 50, border: "none",
                background: "linear-gradient(135deg, #006E33, #00A550)",
                color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer",
              }}>
              Send Money
            </button>
          </div>
        </>
      )}

    </main>
  );
}