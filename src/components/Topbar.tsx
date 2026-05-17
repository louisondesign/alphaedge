"use client";
import { useState } from "react";
import { Bell, Search, Zap, ChevronDown, X } from "lucide-react";

const notifications = [
  { id: 1, text: "Signal BUY confirmé sur BTC/USD", time: "2 min", type: "signal" },
  { id: 2, text: "NFP demain à 13h30 — Impact élevé", time: "1h", type: "calendar" },
  { id: 3, text: "Objectif atteint sur ETH/USD (+5.2%)", time: "3h", type: "profit" },
];

export default function Topbar({ title }: { title: string }) {
  const [showNotifs, setShowNotifs] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header style={{ height: 64, backgroundColor: "#121A2B", borderBottom: "1px solid #263247", display: "flex", alignItems: "center", padding: "0 24px", gap: 16, position: "sticky", top: 0, zIndex: 40 }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: "#FFF", margin: 0 }}>{title}</h1>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, maxWidth: 320, backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 8, padding: "8px 12px" }}>
        <Search size={16} color="#94A3B8" />
        <input placeholder="Rechercher un actif..." style={{ background: "none", border: "none", outline: "none", color: "#FFF", fontSize: 14, width: "100%" }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          onClick={() => setShowNotifs(!showNotifs)}
          style={{ position: "relative", width: 40, height: 40, borderRadius: 8, backgroundColor: "#182235", border: "1px solid #263247", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <Bell size={18} color="#94A3B8" />
          <span style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: "50%", backgroundColor: "#EF4444" }} />
          {showNotifs && (
            <div style={{ position: "absolute", top: 48, right: 0, width: 300, backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 12, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>Notifications</span>
                <X size={14} color="#94A3B8" />
              </div>
              {notifications.map(n => (
                <div key={n.id} style={{ padding: "10px 0", borderBottom: "1px solid #263247", textAlign: "left" }}>
                  <div style={{ fontSize: 13, color: "#FFF" }}>{n.text}</div>
                  <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>{n.time}</div>
                </div>
              ))}
            </div>
          )}
        </button>

        <button
          onClick={() => alert("Passez au plan Elite pour accéder aux signaux prioritaires !")}
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
        >
          <Zap size={14} />
          Upgrade
        </button>

        <button
          onClick={() => setShowProfile(!showProfile)}
          style={{ position: "relative", display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 8, backgroundColor: "#182235", border: "1px solid #263247", cursor: "pointer" }}
        >
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#FFF" }}>JD</div>
          <span style={{ fontSize: 13, color: "#FFF" }}>Jean D.</span>
          <ChevronDown size={14} color="#94A3B8" />
          {showProfile && (
            <div style={{ position: "absolute", top: 46, right: 0, width: 180, backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 10, padding: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.5)", textAlign: "left" }}>
              {[["Profil", "/dashboard/parametres"], ["Abonnement", "/dashboard/pricing"], ["Déconnexion", "/"]].map(([label, href]) => (
                <a key={label} href={href} style={{ display: "block", padding: "8px 12px", borderRadius: 6, fontSize: 13, color: "#94A3B8", textDecoration: "none" }}>
                  {label}
                </a>
              ))}
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
