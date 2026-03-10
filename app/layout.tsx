import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OPay - Fast & Secure Payments",
  description: "Send money, pay bills and more with OPay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
