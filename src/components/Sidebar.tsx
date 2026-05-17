"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  LayoutDashboard, TrendingUp, Zap, Calendar, BookOpen,
  CreditCard, Settings, ChevronRight, LogOut
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analyse", href: "/dashboard/analyse", icon: TrendingUp },
  { label: "Stratégies", href: "/dashboard/strategies", icon: Zap },
  { label: "Calendrier", href: "/dashboard/calendrier", icon: Calendar },
  { label: "Journal", href: "/dashboard/journal", icon: BookOpen },
  { label: "Pricing", href: "/dashboard/pricing", icon: CreditCard },
  { label: "Paramètres", href: "/dashboard/parametres", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{ width: 240, minHeight: "100vh", backgroundColor: "#121A2B", borderRight: "1px solid #263247", display: "flex", flexDirection: "column", padding: "24px 0", flexShrink: 0 }}>
      <div style={{ padding: "0 20px 24px" }}>
        <Logo size={28} />
      </div>

      <nav style={{ flex: 1, padding: "0 12px" }}>
        <div style={{ marginBottom: 8, padding: "0 8px 8px", fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8,
                marginBottom: 2, textDecoration: "none", transition: "all 0.15s",
                backgroundColor: isActive ? "rgba(59,130,246,0.15)" : "transparent",
                color: isActive ? "#3B82F6" : "#94A3B8",
                fontWeight: isActive ? 600 : 400, fontSize: 14,
                border: isActive ? "1px solid rgba(59,130,246,0.2)" : "1px solid transparent",
              }}
            >
              <Icon size={18} />
              <span style={{ flex: 1 }}>{item.label}</span>
              {isActive && <ChevronRight size={14} />}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: "16px 12px", borderTop: "1px solid #263247" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, backgroundColor: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", marginBottom: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>JD</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#FFF" }}>Jean Dupont</div>
            <div style={{ fontSize: 11, color: "#8B5CF6" }}>Pro Plan</div>
          </div>
        </div>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 8, color: "#94A3B8", textDecoration: "none", fontSize: 13 }}>
          <LogOut size={16} />
          Déconnexion
        </Link>
      </div>
    </aside>
  );
}
