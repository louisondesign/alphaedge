"use client";
import { use } from "react";
import Topbar from "@/components/Topbar";
import { strategies } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle, Zap } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function StrategyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const strat = strategies.find(s => s.id === parseInt(id)) || strategies[0];
  const equityData = strat.equityCurve.map((v, i) => ({ t: i + 1, v }));

  return (
    <>
      <Topbar title={strat.name} />
      <div style={{ padding: 24 }}>
        <Link href="/dashboard/strategies" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#94A3B8", textDecoration: "none", fontSize: 14, marginBottom: 24 }}>
          <ArrowLeft size={16} /> Retour aux stratégies
        </Link>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Header */}
            <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>{strat.name}</h2>
                  <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, backgroundColor: "rgba(59,130,246,0.15)", color: "#3B82F6" }}>{strat.style}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, color: "#94A3B8" }}>Win Rate</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#10B981" }}>{strat.winRate}%</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>{strat.description}</p>
            </div>

            {/* Equity Curve */}
            <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 16px" }}>Courbe d'Equity</h3>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={equityData}>
                  <defs>
                    <linearGradient id="eg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#263247" />
                  <XAxis dataKey="t" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k€`} />
                  <Tooltip contentStyle={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 8, color: "#FFF" }} formatter={(v) => [`${Number(v).toLocaleString()} €`, "Capital"]} />
                  <Area type="monotone" dataKey="v" stroke="#10B981" strokeWidth={2} fill="url(#eg)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Conditions */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10B981", marginBottom: 12 }}>Conditions d'Entrée</h3>
                {strat.entryConditions.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <CheckCircle size={14} color="#10B981" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#94A3B8" }}>{c}</span>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#EF4444", marginBottom: 12 }}>Conditions de Sortie</h3>
                {strat.exitConditions.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <XCircle size={14} color="#EF4444" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#94A3B8" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Stats */}
            <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Statistiques</h3>
              {[
                ["Win Rate", `${strat.winRate}%`, "#10B981"],
                ["Max Drawdown", `-${strat.maxDrawdown}%`, "#EF4444"],
                ["Trades testés", strat.tradesBacktested.toLocaleString(), "#3B82F6"],
                ["Niveau de risque", strat.riskLevel, "#F59E0B"],
              ].map(([label, value, color]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #263247" }}>
                  <span style={{ fontSize: 13, color: "#94A3B8" }}>{label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: color as string }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Pros & Cons */}
            <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Points Forts</h3>
              {strat.pros.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: "#10B981" }}>+</span>
                  <span style={{ fontSize: 13, color: "#94A3B8" }}>{p}</span>
                </div>
              ))}
              <h3 style={{ fontSize: 14, fontWeight: 600, marginTop: 14, marginBottom: 12 }}>Limites</h3>
              {strat.cons.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: "#EF4444" }}>—</span>
                  <span style={{ fontSize: 13, color: "#94A3B8" }}>{c}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button onClick={() => alert(`Stratégie "${strat.name}" activée !`)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", borderRadius: 10, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
              <Zap size={18} /> Utiliser cette stratégie
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
