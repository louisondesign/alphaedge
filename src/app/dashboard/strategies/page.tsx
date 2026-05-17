"use client";
import { useState } from "react";
import Topbar from "@/components/Topbar";
import { strategies } from "@/lib/mock-data";
import Link from "next/link";
import { TrendingUp, Shield, Zap, Clock } from "lucide-react";

const styles = ["Tous", "Scalping", "Day Trading", "Swing Trading", "Position Trading"];

const riskColors: Record<string, string> = { Low: "#10B981", Medium: "#F59E0B", High: "#EF4444" };

export default function StrategiesPage() {
  const [filter, setFilter] = useState("Tous");

  const filtered = filter === "Tous" ? strategies : strategies.filter(s => s.style === filter);

  return (
    <>
      <Topbar title="Stratégies" />
      <div style={{ padding: 24 }}>
        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {styles.map(s => (
            <button key={s} onClick={() => setFilter(s)}
              style={{ padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", backgroundColor: s === filter ? "#3B82F6" : "#182235", color: s === filter ? "#FFF" : "#94A3B8", border: "1px solid #263247" }}>
              {s}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {filtered.map((strat) => (
            <div key={strat.id} style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20, transition: "border-color 0.2s" }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{strat.name}</div>
                  <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, backgroundColor: "rgba(59,130,246,0.15)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.3)" }}>
                    {strat.style}
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "#94A3B8" }}>Win Rate</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#10B981" }}>{strat.winRate}%</div>
                </div>
              </div>

              <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.5, marginBottom: 16 }}>{strat.description}</p>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                <div style={{ backgroundColor: "#0B1020", borderRadius: 8, padding: "10px 12px" }}>
                  <div style={{ fontSize: 11, color: "#94A3B8", marginBottom: 2 }}>Max Drawdown</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#EF4444" }}>-{strat.maxDrawdown}%</div>
                </div>
                <div style={{ backgroundColor: "#0B1020", borderRadius: 8, padding: "10px 12px" }}>
                  <div style={{ fontSize: 11, color: "#94A3B8", marginBottom: 2 }}>Trades backtestés</div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{strat.tradesBacktested.toLocaleString()}</div>
                </div>
              </div>

              {/* Risk + Timeframes */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Shield size={14} color={riskColors[strat.riskLevel]} />
                  <span style={{ fontSize: 12, color: riskColors[strat.riskLevel], fontWeight: 600 }}>Risque {strat.riskLevel}</span>
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                  {strat.timeframes.map(tf => (
                    <span key={tf} style={{ padding: "2px 8px", borderRadius: 4, fontSize: 11, backgroundColor: "#263247", color: "#94A3B8" }}>{tf}</span>
                  ))}
                </div>
              </div>

              {/* Markets */}
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 16 }}>
                {strat.markets.map(m => (
                  <span key={m} style={{ padding: "2px 8px", borderRadius: 4, fontSize: 11, backgroundColor: "rgba(139,92,246,0.15)", color: "#8B5CF6", border: "1px solid rgba(139,92,246,0.2)" }}>{m}</span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 8 }}>
                <Link href={`/dashboard/strategies/${strat.id}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "9px", borderRadius: 8, backgroundColor: "#0B1020", border: "1px solid #263247", color: "#FFF", fontSize: 13, textDecoration: "none", fontWeight: 500 }}>
                  Voir détails
                </Link>
                <button onClick={() => alert(`Stratégie "${strat.name}" activée !`)} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px", borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                  <Zap size={13} /> Utiliser
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
