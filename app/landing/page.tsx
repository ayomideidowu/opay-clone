"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ fontFamily: "'Segoe UI', sans-serif", margin: 0, padding: 0, overflowX: "hidden" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "#fff", borderBottom: "1px solid #f0f0f0",
        padding: "0 20px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
      }}>
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "#006E33",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: 18,
          }}>O</div>
          <span style={{ fontSize: 20, fontWeight: 900, color: "#1a1a1a" }}>OPay</span>
        </div>

        {/* DESKTOP ONLY - nav links */}
        <div style={{
          display: menuOpen ? "none" : "flex",
          alignItems: "center", gap: 28,
          position: "absolute", left: "50%", transform: "translateX(-50%)",
        }}
          className="desktop-only">
          {["Features", "How It Works", "Download"].map((item) => (
            <span key={item} style={{
              fontSize: 14, color: "#555", fontWeight: 500,
              cursor: "pointer", whiteSpace: "nowrap",
            }}>{item}</span>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Desktop buttons */}
          <div style={{ display: "flex", gap: 8 }} className="desktop-only">
            <button
              onClick={() => router.push("/login")}
              style={{
                padding: "8px 18px", borderRadius: 50,
                border: "2px solid #006E33", background: "transparent",
                color: "#006E33", fontWeight: 700, fontSize: 13, cursor: "pointer",
              }}>Log In</button>
            <button
              onClick={() => router.push("/signup")}
              style={{
                padding: "8px 18px", borderRadius: 50,
                border: "none", background: "#006E33",
                color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer",
                boxShadow: "0 4px 14px rgba(0,110,51,0.3)",
              }}>Get Started</button>
          </div>

          {/* Mobile buttons */}
          <div style={{ display: "flex", gap: 8 }} className="mobile-only">
            <button
              onClick={() => router.push("/login")}
              style={{
                padding: "7px 14px", borderRadius: 50,
                border: "2px solid #006E33", background: "transparent",
                color: "#006E33", fontWeight: 700, fontSize: 12, cursor: "pointer",
              }}>Log In</button>
            <button
              onClick={() => router.push("/signup")}
              style={{
                padding: "7px 14px", borderRadius: 50,
                border: "none", background: "#006E33",
                color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer",
              }}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* RESPONSIVE STYLES */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
        @media (min-width: 769px) {
          .desktop-only { display: flex !important; }
          .mobile-only { display: none !important; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #006E33 0%, #00A550 50%, #34D87A 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "100px 40px 60px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background circles */}
        <div style={{
          position: "absolute", width: 500, height: 500, borderRadius: "50%",
          background: "rgba(255,255,255,0.05)", top: -100, right: -100,
        }} />
        <div style={{
          position: "absolute", width: 300, height: 300, borderRadius: "50%",
          background: "rgba(255,255,255,0.05)", bottom: -50, left: -50,
        }} />

        <div style={{
          maxWidth: 1100, width: "100%", margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 40, flexWrap: "wrap",
        }}>
          {/* LEFT TEXT */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.2)", borderRadius: 50,
              padding: "6px 16px", marginBottom: 24,
            }}>
              <span style={{ fontSize: 16 }}>⚡</span>
              <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>Nigeria's #1 Payment App</span>
            </div>

            <h1 style={{
              fontSize: 52, fontWeight: 900, color: "#fff",
              margin: "0 0 20px", lineHeight: 1.15, letterSpacing: "-1px",
            }}>
              Fast, Safe &<br />Easy Payments<br />
              <span style={{ color: "#FFD700" }}>for Everyone</span>
            </h1>

            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", margin: "0 0 36px", lineHeight: 1.7 }}>
              Send money, pay bills, buy airtime and data — all in one app.
              Join over 15 million Nigerians using OPay every day.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={() => router.push("/signup")}
                style={{
                  padding: "14px 32px", borderRadius: 50,
                  border: "none", background: "#fff",
                  color: "#006E33", fontWeight: 800, fontSize: 16,
                  cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}>
                Create Free Account
              </button>
              <button
                onClick={() => router.push("/login")}
                style={{
                  padding: "14px 32px", borderRadius: 50,
                  border: "2px solid #fff", background: "transparent",
                  color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer",
                }}>
                Log In
              </button>
            </div>

            {/* STATS */}
            <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
              {[
                { value: "15M+", label: "Active Users" },
                { value: "N2T+", label: "Transactions" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p style={{ fontSize: 28, fontWeight: 900, color: "#fff", margin: 0 }}>{stat.value}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "4px 0 0" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PHONE MOCKUP */}
          <div style={{ flex: 1, minWidth: 280, display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 280, height: 560,
              background: "#1a1a1a", borderRadius: 44,
              padding: 12, boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
              position: "relative",
            }}>
              <div style={{
                width: "100%", height: "100%",
                background: "linear-gradient(160deg, #006E33, #00A550)",
                borderRadius: 34, overflow: "hidden",
                display: "flex", flexDirection: "column",
              }}>
                {/* Phone top bar */}
                <div style={{ padding: "20px 20px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "#fff", fontWeight: 700 }}>9:41</span>
                  <div style={{ width: 80, height: 24, background: "#000", borderRadius: 20 }} />
                  <span style={{ fontSize: 13, color: "#fff" }}>●●●</span>
                </div>

                {/* Balance card inside phone */}
                <div style={{ padding: "10px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: "50%",
                      background: "rgba(255,255,255,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontWeight: 900, fontSize: 12,
                    }}>O</div>
                    <span style={{ fontSize: 13, color: "#fff", fontWeight: 700 }}>Hi, Collins 👋</span>
                  </div>

                  <div style={{
                    background: "rgba(255,255,255,0.15)", borderRadius: 16, padding: "14px",
                    marginBottom: 12,
                  }}>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", margin: "0 0 6px" }}>Available Balance</p>
                    <p style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: 0 }}>₦250,000.00</p>
                    <button style={{
                      marginTop: 10, padding: "6px 16px", borderRadius: 50,
                      background: "#fff", border: "none",
                      color: "#006E33", fontWeight: 700, fontSize: 11, cursor: "pointer",
                      float: "right",
                    }}>+ Add Money</button>
                    <div style={{ clear: "both" }} />
                  </div>

                  {/* Quick actions in phone */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 12 }}>
                    {["📊", "📶", "⚡", "📺"].map((icon) => (
                      <div key={icon} style={{
                        background: "rgba(255,255,255,0.15)", borderRadius: 10,
                        padding: "8px 4px", textAlign: "center", fontSize: 18,
                      }}>{icon}</div>
                    ))}
                  </div>

                  {/* Transaction in phone */}
                  {[
                    { name: "Salary", amount: "+₦250,000", color: "#34D87A" },
                    { name: "Airtime", amount: "-₦2,000", color: "#fff" },
                    { name: "Transfer", amount: "-₦15,000", color: "#fff" },
                  ].map((tx) => (
                    <div key={tx.name} style={{
                      display: "flex", justifyContent: "space-between",
                      padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{tx.name}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: tx.color }}>{tx.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 14, color: "#006E33", fontWeight: 700, letterSpacing: 2, margin: "0 0 12px" }}>
            FEATURES
          </p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1a1a1a", margin: "0 0 16px" }}>
            Everything you need in one app
          </h2>
          <p style={{ fontSize: 17, color: "#757575", margin: "0 0 60px", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            OPay makes managing your money simple, fast and secure.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { icon: "💸", title: "Send Money", desc: "Transfer money instantly to any bank account or OPay user.", color: "#E8F5E9" },
              { icon: "📱", title: "Buy Airtime & Data", desc: "Recharge any network instantly at discounted rates.", color: "#E3F2FD" },
              { icon: "⚡", title: "Pay Bills", desc: "Pay electricity, water, TV subscriptions and more.", color: "#FFF8E1" },
              { icon: "🔒", title: "SafeBox Savings", desc: "Save money and earn up to 15% interest per year.", color: "#F3E5F5" },
              { icon: "💳", title: "OPay Card", desc: "Get a free Verve card for online and offline payments.", color: "#FCE4EC" },
              { icon: "🏦", title: "Bank Transfers", desc: "Send to any Nigerian bank account for free.", color: "#E0F2F1" },
            ].map((feature) => (
              <div key={feature.title} style={{
                background: feature.color, borderRadius: 20,
                padding: "28px 24px", textAlign: "left",
                transition: "transform 0.2s",
                cursor: "pointer",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: "#fff", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 28, marginBottom: 16,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}>{feature.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1a1a1a", margin: "0 0 8px" }}>{feature.title}</h3>
                <p style={{ fontSize: 14, color: "#757575", margin: 0, lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 40px", background: "#F8FBF8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 14, color: "#006E33", fontWeight: 700, letterSpacing: 2, margin: "0 0 12px" }}>
            HOW IT WORKS
          </p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1a1a1a", margin: "0 0 60px" }}>
            Get started in 3 easy steps
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32 }}>
            {[
              { step: "01", icon: "📲", title: "Download & Sign Up", desc: "Create your free OPay account in less than 2 minutes with just your phone number." },
              { step: "02", icon: "💳", title: "Add Money", desc: "Fund your wallet via bank transfer, USSD, card or cash at any OPay agent." },
              { step: "03", icon: "🚀", title: "Start Transacting", desc: "Send money, pay bills, buy airtime and enjoy all OPay services instantly." },
            ].map((step) => (
              <div key={step.step} style={{ textAlign: "center" }}>
                <div style={{
                  width: 80, height: 80, borderRadius: "50%",
                  background: "linear-gradient(135deg, #006E33, #00A550)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 36, margin: "0 auto 20px",
                  boxShadow: "0 8px 24px rgba(0,110,51,0.3)",
                }}>{step.icon}</div>
                <div style={{
                  display: "inline-block",
                  background: "#E8F5E9", borderRadius: 50,
                  padding: "4px 14px", marginBottom: 12,
                }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#006E33" }}>Step {step.step}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", margin: "0 0 10px" }}>{step.title}</h3>
                <p style={{ fontSize: 15, color: "#757575", margin: 0, lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: "80px 40px",
        background: "linear-gradient(135deg, #006E33, #00A550)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#fff", margin: "0 0 16px" }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", margin: "0 0 36px" }}>
            Join 15 million+ Nigerians who trust OPay for their daily transactions.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => router.push("/signup")}
              style={{
                padding: "14px 36px", borderRadius: 50,
                border: "none", background: "#fff",
                color: "#006E33", fontWeight: 800, fontSize: 16,
                cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}>
              Create Free Account
            </button>
            <button
              onClick={() => router.push("/login")}
              style={{
                padding: "14px 36px", borderRadius: 50,
                border: "2px solid #fff", background: "transparent",
                color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer",
              }}>
              Log In
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1a1a1a", padding: "60px 40px 30px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "#006E33",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 900, fontSize: 18,
                }}>O</div>
                <span style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>OPay</span>
              </div>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, margin: 0 }}>
                Nigeria's leading digital payments platform. Fast, secure and reliable.
              </p>
            </div>

            {[
              { title: "Product", links: ["Features", "How It Works", "Download", "Security"] },
              { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
              { title: "Support", links: ["Help Center", "Contact Us", "Privacy Policy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: "0 0 16px" }}>{col.title}</h4>
                {col.links.map((link) => (
                  <p key={link} style={{ fontSize: 14, color: "#888", margin: "0 0 10px", cursor: "pointer" }}>
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #333", paddingTop: 24, textAlign: "center" }}>
            <p style={{ fontSize: 13, color: "#666", margin: 0 }}>
              © 2024 OPay Clone. Built for learning purposes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}