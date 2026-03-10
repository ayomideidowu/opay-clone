"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ fontFamily: "'Segoe UI', sans-serif", background: "#fff", overflowX: "hidden" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #f0f0f0",
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #006E33, #00A550)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: 18,
          }}>O</div>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a" }}>OPay</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Features", "How It Works", "Download"].map((item) => (
            <span key={item} style={{ fontSize: 14, fontWeight: 600, color: "#555", cursor: "pointer" }}>
              {item}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => router.push("/login")}
            style={{
              padding: "9px 22px", borderRadius: 50, border: "2px solid #006E33",
              background: "transparent", color: "#006E33", fontWeight: 700,
              fontSize: 14, cursor: "pointer",
            }}>
            Log In
          </button>
          <button
            onClick={() => router.push("/signup")}
            style={{
              padding: "9px 22px", borderRadius: 50, border: "none",
              background: "linear-gradient(135deg, #006E33, #00A550)",
              color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer",
            }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        background: "linear-gradient(145deg, #004d24 0%, #006E33 40%, #00A550 100%)",
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "100px 40px 60px",
        position: "relative", overflow: "hidden",
      }}>
        {/* BG CIRCLES */}
        <div style={{
          position: "absolute", width: 500, height: 500, borderRadius: "50%",
          background: "rgba(255,255,255,0.04)", top: -100, left: -100,
        }} />
        <div style={{
          position: "absolute", width: 300, height: 300, borderRadius: "50%",
          background: "rgba(255,255,255,0.06)", bottom: -50, right: -50,
        }} />

        <div style={{ maxWidth: 1100, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>

          {/* LEFT TEXT */}
          <div style={{ flex: 1, maxWidth: 560 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.15)", borderRadius: 50,
              padding: "6px 16px", marginBottom: 24,
            }}>
              <span style={{ fontSize: 14 }}>🇳🇬</span>
              <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>Nigeria's #1 Payment App</span>
            </div>

            <h1 style={{
              fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1.1,
              margin: "0 0 20px", letterSpacing: "-1px",
            }}>
              Fast, Safe &<br />Easy Payments<br />
              <span style={{ color: "#34D87A" }}>for Everyone</span>
            </h1>

            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", margin: "0 0 36px", lineHeight: 1.7 }}>
              Send money, pay bills, buy airtime and data —<br />
              all in one app. Join over 15 million Nigerians.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
              <button
                onClick={() => router.push("/signup")}
                style={{
                  padding: "14px 32px", borderRadius: 50, border: "none",
                  background: "#fff", color: "#006E33",
                  fontWeight: 800, fontSize: 16, cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}>
                Create Free Account
              </button>
              <button style={{
                padding: "14px 32px", borderRadius: 50,
                border: "2px solid rgba(255,255,255,0.6)",
                background: "transparent", color: "#fff",
                fontWeight: 700, fontSize: 16, cursor: "pointer",
              }}>
                How It Works →
              </button>
            </div>

            {/* STATS */}
            <div style={{
              display: "flex", gap: 0,
              background: "rgba(255,255,255,0.12)",
              borderRadius: 20, overflow: "hidden",
              backdropFilter: "blur(10px)",
            }}>
              {[
                { value: "15M+", label: "Active Users" },
                { value: "₦2T+", label: "Transactions" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, i) => (
                <div key={stat.label} style={{
                  flex: 1, padding: "20px",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none",
                  textAlign: "center",
                }}>
                  <p style={{ fontSize: 26, fontWeight: 900, color: "#fff", margin: 0 }}>{stat.value}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", margin: "4px 0 0", fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PHONE MOCKUP */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{
              width: 280, height: 560,
              background: "#1a1a1a",
              borderRadius: 44,
              padding: 8,
              boxShadow: "0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
              position: "relative",
            }}>
              <div style={{
                width: "100%", height: "100%",
                background: "linear-gradient(180deg, #006E33, #00A550)",
                borderRadius: 38, overflow: "hidden",
                display: "flex", flexDirection: "column",
              }}>
                {/* PHONE STATUS BAR */}
                <div style={{ padding: "14px 20px 0", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11, color: "#fff", fontWeight: 700 }}>9:41</span>
                  <span style={{ fontSize: 11, color: "#fff" }}>●●●</span>
                </div>

                {/* PHONE CONTENT */}
                <div style={{ padding: "20px 16px", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, color: "#fff", fontWeight: 800,
                    }}>O</div>
                    <span style={{ fontSize: 13, color: "#fff", fontWeight: 700 }}>Hi, Collins 👋</span>
                  </div>

                  <div style={{
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 16, padding: "14px",
                    marginBottom: 16,
                  }}>
                    <p style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", margin: "0 0 4px" }}>Available Balance</p>
                    <p style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: 0 }}>₦250,000.00</p>
                    <button style={{
                      marginTop: 10, padding: "6px 14px", borderRadius: 50,
                      background: "#fff", border: "none",
                      color: "#006E33", fontSize: 11, fontWeight: 700, cursor: "pointer",
                    }}>+ Add Money</button>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 }}>
                    {["Send", "Airtime", "Bills"].map((item) => (
                      <div key={item} style={{
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: 12, padding: "10px 6px",
                        textAlign: "center",
                      }}>
                        <p style={{ fontSize: 9, color: "#fff", fontWeight: 700, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  {[1, 2, 3].map((i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: 10, padding: "8px 10px",
                      marginBottom: 6,
                    }}>
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <div style={{ width: 24, height: 24, borderRadius: 8, background: "rgba(255,255,255,0.2)" }} />
                        <div>
                          <div style={{ width: 60, height: 6, background: "rgba(255,255,255,0.4)", borderRadius: 3, marginBottom: 4 }} />
                          <div style={{ width: 40, height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 3 }} />
                        </div>
                      </div>
                      <div style={{ width: 40, height: 6, background: "rgba(255,255,255,0.3)", borderRadius: 3, alignSelf: "center" }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* NOTCH */}
              <div style={{
                position: "absolute", top: 16, left: "50%",
                transform: "translateX(-50%)",
                width: 80, height: 24, background: "#1a1a1a",
                borderRadius: 20,
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#006E33", letterSpacing: 2, margin: "0 0 12px" }}>
            WHAT WE OFFER
          </p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1a1a1a", margin: "0 0 12px" }}>
            Everything You Need
          </h2>
          <p style={{ fontSize: 16, color: "#757575", margin: "0 0 56px" }}>
            One app for all your financial needs
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "💸", title: "Send Money", desc: "Transfer money instantly to any bank account or OPay wallet across Nigeria.", color: "#E8F5E9" },
              { icon: "📱", title: "Buy Airtime & Data", desc: "Recharge any network instantly. Get up to 6% cashback on every purchase.", color: "#E3F2FD" },
              { icon: "⚡", title: "Pay Bills", desc: "Pay electricity, cable TV, and other bills quickly without leaving the app.", color: "#FFF8E1" },
              { icon: "🔒", title: "SafeBox Savings", desc: "Save money and earn up to 15% interest annually on your savings.", color: "#F3E5F5" },
              { icon: "💳", title: "OPay Card", desc: "Get a free Verve card to shop online and at any POS terminal in Nigeria.", color: "#FCE4EC" },
              { icon: "🏦", title: "Bank Transfers", desc: "Send money to all Nigerian banks with zero fees on select transfers.", color: "#E0F2F1" },
            ].map((feature) => (
              <div key={feature.title} style={{
                background: "#fff",
                borderRadius: 20, padding: "28px 24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                textAlign: "left",
                border: "1px solid #f5f5f5",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: feature.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, marginBottom: 16,
                }}>{feature.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", margin: "0 0 10px" }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 14, color: "#757575", margin: 0, lineHeight: 1.7 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 40px", background: "#F5F7F5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#006E33", letterSpacing: 2, margin: "0 0 12px" }}>
            SIMPLE STEPS
          </p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1a1a1a", margin: "0 0 12px" }}>
            How It Works
          </h2>
          <p style={{ fontSize: 16, color: "#757575", margin: "0 0 56px" }}>
            Get started in less than 2 minutes
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { step: "01", icon: "📲", title: "Download & Sign Up", desc: "Create your free account with just your phone number and BVN." },
              { step: "02", icon: "💰", title: "Fund Your Wallet", desc: "Add money via bank transfer, USSD, or cash at any agent near you." },
              { step: "03", icon: "🚀", title: "Start Transacting", desc: "Send money, pay bills, buy airtime and enjoy seamless payments." },
            ].map((step) => (
              <div key={step.step} style={{
                background: "#fff", borderRadius: 20, padding: "32px 24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  fontSize: 32, fontWeight: 900,
                  color: "#f0f0f0",
                }}>{step.step}</div>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{step.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", margin: "0 0 10px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: "#757575", margin: 0, lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#006E33", letterSpacing: 2, margin: "0 0 12px" }}>
            TESTIMONIALS
          </p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1a1a1a", margin: "0 0 48px" }}>
            What Nigerians Say
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { name: "Amaka O.", role: "Business Owner, Lagos", text: "OPay has made collecting payments from customers so easy. I can receive money from anywhere in Nigeria instantly!", rating: 5 },
              { name: "Chidi N.", role: "Student, Abuja", text: "I use OPay every day to buy airtime and data. The cashback is amazing and transfers are always instant!", rating: 5 },
              { name: "Fatima B.", role: "Teacher, Kano", text: "The SafeBox feature has helped me save more money. I earn interest daily and can withdraw anytime!", rating: 5 },
            ].map((review) => (
              <div key={review.name} style={{
                background: "#fff", borderRadius: 20, padding: "28px 24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                textAlign: "left", border: "1px solid #f5f5f5",
              }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[1,2,3,4,5].map(i => <span key={i} style={{ fontSize: 16, color: "#FFB800" }}>★</span>)}
                </div>
                <p style={{ fontSize: 15, color: "#333", lineHeight: 1.7, margin: "0 0 20px", fontStyle: "italic" }}>
                  "{review.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%",
                    background: "linear-gradient(135deg, #006E33, #00A550)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 800, fontSize: 16,
                  }}>{review.name[0]}</div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>{review.name}</p>
                    <p style={{ fontSize: 12, color: "#999", margin: 0 }}>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: "80px 40px",
        background: "linear-gradient(135deg, #004d24, #006E33, #00A550)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", margin: "0 0 36px" }}>
            Join 15 million+ Nigerians who trust OPay for their daily transactions.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => router.push("/signup")}
              style={{
                padding: "14px 36px", borderRadius: 50, border: "none",
                background: "#fff", color: "#006E33",
                fontWeight: 800, fontSize: 16, cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}>
              Create Free Account
            </button>
            <button
              onClick={() => router.push("/login")}
              style={{
                padding: "14px 36px", borderRadius: 50,
                border: "2px solid rgba(255,255,255,0.7)",
                background: "transparent", color: "#fff",
                fontWeight: 700, fontSize: 16, cursor: "pointer",
              }}>
              Log In
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1a1a1a", padding: "48px 40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 32 }}>
            <div style={{ maxWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "linear-gradient(135deg, #006E33, #00A550)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 900, fontSize: 18,
                }}>O</div>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>OPay</span>
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
                <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: "0 0 16px" }}>{col.title}</h4>
                {col.links.map((link) => (
                  <p key={link} style={{ fontSize: 13, color: "#888", margin: "0 0 10px", cursor: "pointer" }}>{link}</p>
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