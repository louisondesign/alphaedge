"use client";
import Topbar from "@/components/Topbar";
import { performanceData, recentPositions, signals, marketNews } from "@/lib/mock-data";
import { TrendingUp, TrendingDown, Minus, Brain, DollarSign, Target, BarChart2, ExternalLink } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const kpis = [
  { label: "Profit Total", value: "+12 450 €", change: "+8.4%", icon: DollarSign, color: "#10B981", bg: "rgba(16,185,129,0.1)" },
  { label: "Win Rate", value: "68.4%", change: "+2.1%", icon: Target, color: "#3B82F6", bg: "rgba(59,130,246,0.1)" },
  { label: "Trades Réalisés", value: "247", change: "+12 ce mois", icon: BarChart2, color: "#8B5CF6", bg: "rgba(139,92,246,0.1)" },
  { label: "Score IA", value: "92/100", change: "Excellent", icon: Brain, color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
];

function SignalBadge({ signal }: { signal: string }) {
  const colors: Record<string, string> = { BUY: "#10B981", SELL: "#EF4444", HOLD: "#F59E0B" };
  return (
    <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, backgroundColor: `${colors[signal]}20`, color: colors[signal], border: `1px solid ${colors[signal]}40` }}>
      {signal}
    </span>
  );
}

export default function Dashboard() {
  return (
    <>
      <Topbar title="Dashboard" />
      <div style={{ padding: 24 }}>

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div key={kpi.label} style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: 12, color: "#94A3B8", marginBottom: 8 }}>{kpi.label}</div>
                    <div style={{ fontSize: 26, fontWeight: 700, color: "#FFF" }}>{kpi.value}</div>
                    <div style={{ fontSize: 12, color: kpi.color, marginTop: 4 }}>{kpi.change}</div>
                  </div>
                  <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: kpi.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={20} color={kpi.color} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 16 }}>
          {/* Chart */}
          <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Performance du Capital</h3>
                <p style={{ fontSize: 13, color: "#94A3B8", margin: "4px 0 0" }}>Évolution sur 12 mois</p>
              </div>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#10B981" }}>+44.5%</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#263247" />
                <XAxis dataKey="date" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 8, color: "#FFF" }} formatter={(v) => [`${Number(v).toLocaleString()} €`, "Capital"]} />
                <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} fill="url(#grad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Signals */}
          <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>Signaux du Jour</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {signals.map((s) => (
                <div key={s.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", backgroundColor: "#0B1020", borderRadius: 8, border: "1px solid #263247" }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{s.asset}</div>
                    <div style={{ fontSize: 11, color: "#94A3B8" }}>{s.timeframe} • {s.confidence}% conf.</div>
                  </div>
                  <SignalBadge signal={s.signal} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Positions */}
          <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>Positions Récentes</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #263247" }}>
                  {["Actif", "Direction", "P&L", ""].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "4px 8px", fontSize: 11, color: "#94A3B8", fontWeight: 500, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentPositions.map((p) => (
                  <tr key={p.id} style={{ borderBottom: "1px solid #263247" }}>
                    <td style={{ padding: "10px 8px", fontSize: 13, fontWeight: 600 }}>{p.asset}</td>
                    <td style={{ padding: "10px 8px" }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: p.direction === "LONG" ? "#10B981" : "#EF4444" }}>
                        {p.direction === "LONG" ? "▲" : "▼"} {p.direction}
                      </span>
                    </td>
                    <td style={{ padding: "10px 8px", fontSize: 13, fontWeight: 600, color: p.pnl > 0 ? "#10B981" : "#EF4444" }}>
                      {p.pnl > 0 ? "+" : ""}{p.pnl} € <span style={{ fontSize: 11 }}>({p.pnlPct > 0 ? "+" : ""}{p.pnlPct}%)</span>
                    </td>
                    <td style={{ padding: "10px 8px" }}>
                      {p.pnl > 0 ? <TrendingUp size={14} color="#10B981" /> : <TrendingDown size={14} color="#EF4444" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* News */}
          <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>News Marché</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {marketNews.map((n) => {
                const impactColor = n.impact === "HIGH" ? "#EF4444" : n.impact === "MEDIUM" ? "#F59E0B" : "#94A3B8";
                return (
                  <div key={n.id} style={{ padding: "12px", backgroundColor: "#0B1020", borderRadius: 8, border: "1px solid #263247" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: impactColor, fontWeight: 600 }}>{n.impact} IMPACT</span>
                      <span style={{ fontSize: 11, color: "#94A3B8" }}>{n.time}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#FFF", lineHeight: 1.4 }}>{n.title}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                      <span style={{ fontSize: 11, color: "#94A3B8" }}>{n.source}</span>
                      <span style={{ fontSize: 11, color: "#3B82F6" }}>{n.category}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
