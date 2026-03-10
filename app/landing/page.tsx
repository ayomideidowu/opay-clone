"use client";

import { useState, useEffect } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ margin: 0, padding: 0 }}>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; }
        .feature-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 24px;
          border: 1.5px solid #eee;
          transition: all 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0,110,51,0.15);
          border-color: #00A550;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 16px rgba(0,110,51,0.08)" : "none",
        transition: "all 0.3s", padding: "0 24px",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", height: 70,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 9,
              background: "linear-gradient(135deg, #006E33, #34D87A)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 900, fontSize: 17,
            }}>O</div>
            <span style={{
              fontWeight: 800, fontSize: 21,
              color: scrolled ? "#006E33" : "#fff",
            }}>OPay</span>
          </div>

          <div className="desktop-nav" style={{ alignItems: "center", gap: 32 }}>
            {["Features", "How It Works", "Download"].map((item) => (
              <a key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                style={{ color: scrolled ? "#333" : "rgba(255,255,255,0.88)", fontWeight: 500, fontSize: 15 }}>
                {item}
              </a>
            ))}
            <a href="/login" style={{
              padding: "9px 22px", borderRadius: 50,
              border: `2px solid ${scrolled ? "#006E33" : "#fff"}`,
              color: scrolled ? "#006E33" : "#fff",
              fontWeight: 600, fontSize: 14,
            }}>Log In</a>
            <a href="/signup" style={{
              padding: "9px 22px", borderRadius: 50,
              background: scrolled ? "#006E33" : "#fff",
              color: scrolled ? "#fff" : "#006E33",
              fontWeight: 700, fontSize: 14,
            }}>Get Started</a>
          </div>

          <button className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 6 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: 22, height: 2, borderRadius: 2,
                background: scrolled ? "#006E33" : "#fff",
              }} />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div style={{
            background: "#fff", padding: "16px 24px 24px",
            borderTop: "1px solid #eee",
            display: "flex", flexDirection: "column", gap: 14,
          }}>
            {["Features", "How It Works", "Download"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setMenuOpen(false)}
                style={{ color: "#1a1a1a", fontWeight: 500, fontSize: 16 }}>
                {item}
              </a>
            ))}
            <a href="/login" style={{
              padding: 12, textAlign: "center", borderRadius: 50,
              border: "2px solid #006E33", color: "#006E33", fontWeight: 600,
            }}>Log In</a>
            <a href="/signup" style={{
              padding: 12, textAlign: "center", borderRadius: 50,
              background: "#006E33", color: "#fff", fontWeight: 700,
            }}>Get Started</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #006E33 0%, #00A550 55%, #34D87A 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "130px 24px 80px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 480, height: 480, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -80, width: 360, height: 360, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

        <div style={{
          maxWidth: 860, width: "100%", margin: "0 auto",
          display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center", gap: 28,
          position: "relative", zIndex: 1,
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 50, padding: "7px 18px",
            color: "#fff", fontSize: 13, fontWeight: 600,
          }}>
            🇳🇬 Nigeria&apos;s #1 Payment App
          </div>

          <h1 style={{
            fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
            fontWeight: 900, color: "#fff",
            lineHeight: 1.1, letterSpacing: "-1.5px", margin: 0,
          }}>
            Fast, Safe &amp; Easy Payments for Everyone
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.18rem)",
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.7, maxWidth: 520, margin: 0,
          }}>
            Send money, pay bills, buy airtime and data — all in one app.
            Join over 15 million Nigerians using OPay every day.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="/signup" style={{
              padding: "15px 34px", borderRadius: 50,
              background: "#fff", color: "#006E33",
              fontWeight: 700, fontSize: 16,
              boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
            }}>
              Create Free Account
            </a>
            <a href="#how-it-works" style={{
              padding: "15px 34px", borderRadius: 50,
              border: "2px solid rgba(255,255,255,0.6)",
              color: "#fff", fontWeight: 600, fontSize: 16,
            }}>
              How It Works →
            </a>
          </div>

          <div style={{
            display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center",
            marginTop: 12, padding: "24px 44px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 20,
          }}>
            {[
              { value: "15M+", label: "Active Users" },
              { value: "₦2T+", label: "Transactions" },
              { value: "99.9%", label: "Uptime" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 500, marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-block", background: "#E6F5ED", color: "#006E33", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 700, marginBottom: 14 }}>FEATURES</span>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, color: "#1a1a1a", margin: "0 0 14px" }}>
              Everything You Need, <span style={{ color: "#006E33" }}>One App</span>
            </h2>
            <p style={{ fontSize: 16, color: "#757575", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              OPay brings all your financial needs into one easy platform.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 22 }}>
            {[
              { icon: "↗️", title: "Send Money", desc: "Transfer money instantly to any bank or OPay wallet.", bg: "#E6F5ED" },
              { icon: "📱", title: "Buy Airtime & Data", desc: "Top up MTN, Airtel, Glo, 9mobile instantly.", bg: "#E3F2FD" },
              { icon: "⚡", title: "Pay Bills", desc: "Pay electricity, DSTV, GOTV from anywhere.", bg: "#FFF8E1" },
              { icon: "🏦", title: "Save & Earn", desc: "Grow savings with interest rates up to 15%.", bg: "#F3E5F5" },
              { icon: "🛡️", title: "Secure Payments", desc: "Bank-grade encryption protects every transaction.", bg: "#FCE4EC" },
              { icon: "🚌", title: "Transport", desc: "Book buses and pay for rides from your wallet.", bg: "#E8F5E9" },
            ].map((f) => (
              <div key={f.title} className="feature-card">
                <div style={{ width: 52, height: 52, borderRadius: 14, background: f.bg, fontSize: 24, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#757575", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "96px 24px", background: "#F5F5F5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-block", background: "#E6F5ED", color: "#006E33", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 700, marginBottom: 14 }}>HOW IT WORKS</span>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, color: "#1a1a1a", margin: 0 }}>
              Get Started in <span style={{ color: "#006E33" }}>3 Simple Steps</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 36 }}>
            {[
              { icon: "📲", title: "Create Your Account", desc: "Sign up in under 2 minutes with your phone number and BVN." },
              { icon: "💳", title: "Fund Your Wallet", desc: "Add money via bank transfer, USSD, card, or cash at any agent." },
              { icon: "⚡", title: "Send & Pay Instantly", desc: "Transfer money, pay bills, buy airtime — all from one screen." },
            ].map((s, i) => (
              <div key={s.title} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 18 }}>
                <div style={{ position: "relative" }}>
                  <div style={{ width: 86, height: 86, borderRadius: "50%", background: "linear-gradient(135deg, #006E33, #34D87A)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, boxShadow: "0 6px 24px rgba(0,110,51,0.25)" }}>{s.icon}</div>
                  <div style={{ position: "absolute", top: -6, right: -6, width: 26, height: 26, borderRadius: "50%", background: "#1a1a1a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800 }}>{i + 1}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: "#1a1a1a", margin: "0 0 8px" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#757575", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" style={{ padding: "96px 24px", background: "linear-gradient(135deg, #006E33 0%, #00A550 55%, #34D87A 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 52, marginBottom: 14 }}>📲</div>
          <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", margin: "0 0 14px" }}>Download the OPay App Today</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 36px" }}>
            Available on iOS and Android. Trusted by over 15 million Nigerians daily.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { icon: "🍎", store: "App Store", sub: "Download on the" },
              { icon: "🤖", store: "Google Play", sub: "Get it on" },
            ].map((btn) => (
              <button key={btn.store} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: "none", borderRadius: 14, padding: "14px 28px", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                <span style={{ fontSize: 26 }}>{btn.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 10, color: "#757575" }}>{btn.sub}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a" }}>{btn.store}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 44, marginBottom: 44, paddingBottom: 44, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg, #006E33, #34D87A)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, color: "#fff" }}>O</div>
                <span style={{ fontWeight: 800, fontSize: 19 }}>OPay</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                Nigeria&apos;s leading digital payment platform.
              </p>
            </div>
            {[
              { title: "Product", links: ["Send Money", "Pay Bills", "Buy Airtime", "Savings"] },
              { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
              { title: "Support", links: ["Help Center", "Contact Us", "Privacy Policy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, color: "rgba(255,255,255,0.9)", letterSpacing: "0.6px" }}>{col.title}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  {col.links.map((l) => (
                    <a key={l} href="#" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{l}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, margin: 0 }}>
            © 2024 OPay Digital Services Limited. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}