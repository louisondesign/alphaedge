"use client";
import { useState } from "react";
import Topbar from "@/components/Topbar";
import { economicEvents } from "@/lib/mock-data";

const impactColor = (impact: string) =>
  impact === "HIGH" ? "#EF4444" : impact === "MEDIUM" ? "#F59E0B" : "#94A3B8";

const impactDots = (impact: string) => (
  <div style={{ display: "flex", gap: 3 }}>
    {["HIGH", "MEDIUM", "LOW"].map((lvl, i) => (
      <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: i <= ["LOW", "MEDIUM", "HIGH"].indexOf(impact) ? impactColor(impact) : "#263247" }} />
    ))}
  </div>
);

const countries = ["Tous", "🇺🇸 USD", "🇪🇺 EUR", "🇬🇧 GBP", "🇨🇦 CAD"];

export default function CalendrierPage() {
  const [impactFilter, setImpactFilter] = useState("Tous");
  const [countryFilter, setCountryFilter] = useState("Tous");

  const filtered = economicEvents.filter(e => {
    if (impactFilter !== "Tous" && e.impact !== impactFilter) return false;
    return true;
  });

  return (
    <>
      <Topbar title="Calendrier Économique" />
      <div style={{ padding: 24 }}>
        {/* Filters */}
        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["Tous", "HIGH", "MEDIUM", "LOW"].map(f => (
              <button key={f} onClick={() => setImpactFilter(f)}
                style={{ padding: "8px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", backgroundColor: f === impactFilter ? "#3B82F6" : "#182235", color: f === impactFilter ? "#FFF" : "#94A3B8", border: "1px solid #263247" }}>
                {f === "Tous" ? "Tous les impacts" : f}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          {["HIGH", "MEDIUM", "LOW"].map(lvl => (
            <div key={lvl} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: impactColor(lvl) }} />
              <span style={{ fontSize: 12, color: "#94A3B8" }}>{lvl === "HIGH" ? "Élevé" : lvl === "MEDIUM" ? "Moyen" : "Faible"}</span>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#121A2B" }}>
                {["Date", "Heure", "Pays", "Événement", "Impact", "Précédent", "Prévision", "Actuel"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "14px 16px", fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #263247" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((event) => (
                <tr key={event.id} style={{ borderBottom: "1px solid #263247", transition: "background 0.15s" }}>
                  <td style={{ padding: "14px 16px", fontSize: 13, color: "#94A3B8" }}>{event.date}</td>
                  <td style={{ padding: "14px 16px", fontSize: 13, fontWeight: 600 }}>{event.time}</td>
                  <td style={{ padding: "14px 16px", fontSize: 16 }}>{event.country}</td>
                  <td style={{ padding: "14px 16px" }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{event.event}</div>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      {impactDots(event.impact)}
                      <span style={{ fontSize: 11, color: impactColor(event.impact), fontWeight: 600 }}>{event.impact}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 16px", fontSize: 13, color: "#94A3B8" }}>{event.previous}</td>
                  <td style={{ padding: "14px 16px", fontSize: 13, color: "#3B82F6" }}>{event.forecast}</td>
                  <td style={{ padding: "14px 16px" }}>
                    {event.actual ? (
                      <span style={{ fontSize: 13, fontWeight: 700, color: event.actual > event.forecast ? "#10B981" : "#EF4444" }}>
                        {event.actual}
                      </span>
                    ) : (
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>En attente</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
