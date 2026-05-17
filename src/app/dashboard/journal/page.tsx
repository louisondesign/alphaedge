"use client";
import Topbar from "@/components/Topbar";
import { journalEntries } from "@/lib/mock-data";
import { TrendingUp, TrendingDown, Plus } from "lucide-react";

const totalPnl = journalEntries.reduce((acc, e) => acc + e.pnl, 0);
const wins = journalEntries.filter(e => e.result === "WIN").length;
const losses = journalEntries.filter(e => e.result === "LOSS").length;
const winRate = Math.round((wins / journalEntries.length) * 100);

export default function JournalPage() {
  return (
    <>
      <Topbar title="Journal de Trading" />
      <div style={{ padding: 24 }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          {[
            { label: "P&L Total", value: `+${totalPnl.toLocaleString()} €`, color: "#10B981" },
            { label: "Win Rate", value: `${winRate}%`, color: "#3B82F6" },
            { label: "Trades Gagnants", value: wins, color: "#10B981" },
            { label: "Trades Perdants", value: losses, color: "#EF4444" },
          ].map(stat => (
            <div key={stat.label} style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 12, color: "#94A3B8", marginBottom: 8 }}>{stat.label}</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: stat.color }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Header + Add button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Historique des Trades</h2>
          <button onClick={() => alert("Fonctionnalité bientôt disponible !")}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            <Plus size={15} /> Ajouter un trade
          </button>
        </div>

        {/* Table */}
        <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#121A2B" }}>
                {["Date", "Actif", "Direction", "Résultat", "Gain / Perte", "Commentaire"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "14px 16px", fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", borderBottom: "1px solid #263247" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {journalEntries.map((entry) => (
                <tr key={entry.id} style={{ borderBottom: "1px solid #263247" }}>
                  <td style={{ padding: "14px 16px", fontSize: 13, color: "#94A3B8" }}>{entry.date}</td>
                  <td style={{ padding: "14px 16px", fontSize: 13, fontWeight: 700 }}>{entry.asset}</td>
                  <td style={{ padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {entry.direction === "LONG" ? <TrendingUp size={14} color="#10B981" /> : <TrendingDown size={14} color="#EF4444" />}
                      <span style={{ fontSize: 13, fontWeight: 600, color: entry.direction === "LONG" ? "#10B981" : "#EF4444" }}>{entry.direction}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, backgroundColor: entry.result === "WIN" ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)", color: entry.result === "WIN" ? "#10B981" : "#EF4444", border: `1px solid ${entry.result === "WIN" ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}` }}>
                      {entry.result === "WIN" ? "Gagné" : "Perdu"}
                    </span>
                  </td>
                  <td style={{ padding: "14px 16px", fontSize: 14, fontWeight: 700, color: entry.pnl > 0 ? "#10B981" : "#EF4444" }}>
                    {entry.pnl > 0 ? "+" : ""}{entry.pnl.toLocaleString()} €
                  </td>
                  <td style={{ padding: "14px 16px", fontSize: 13, color: "#94A3B8", maxWidth: 250 }}>{entry.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
