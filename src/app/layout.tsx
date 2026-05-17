import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AlphaEdge — AI-Powered Trading Intelligence",
  description: "Trade smarter with AI-powered market intelligence. Analyze markets, compare strategies and make better decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <body className="min-h-full" style={{ backgroundColor: "#0B1020", color: "#FFFFFF", fontFamily: "Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
