"use client";
import Link from "next/link";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#3B82F6" />
        <path d="M6 22 L12 14 L18 18 L26 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="26" cy="8" r="2.5" fill="#10B981" />
        <path d="M23 8 L29 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 5 L26 11" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span style={{ fontWeight: 700, fontSize: size * 0.6, letterSpacing: "-0.03em", color: "#FFFFFF" }}>
        Alpha<span style={{ color: "#3B82F6" }}>Edge</span>
      </span>
    </Link>
  );
}
