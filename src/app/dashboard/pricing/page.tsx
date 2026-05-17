"use client";
import Topbar from "@/components/Topbar";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Idéal pour débuter dans le trading assisté par IA.",
    features: ["10 analyses par jour", "3 stratégies disponibles", "Dashboard basique", "Calendrier économique", "Support par email"],
    missing: ["Analyses illimitées", "Toutes les stratégies", "Journal avancé", "Signaux prioritaires", "Support VIP"],
    color: "#94A3B8",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "79",
    description: "Le choix des traders actifs qui veulent performer.",
    features: ["Analyses illimitées", "Toutes les stratégies", "Calendrier économique complet", "Journal de trading avancé", "Signaux en temps réel", "Support prioritaire", "Export PDF des analyses"],
    missing: ["Signaux prioritaires 1er accès", "Support VIP dédié", "Accès API"],
    color: "#3B82F6",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "199",
    description: "La solution complète pour les traders professionnels.",
    features: ["Tout du plan Pro", "Signaux prioritaires (1er accès)", "Support VIP dédié 24/7", "Accès API complet", "Backtesting avancé", "Alertes personnalisées", "Formations exclusives"],
    missing: [],
    color: "#8B5CF6",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Topbar title="Tarification" />
      <div style={{ padding: 24 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 10px" }}>Choisissez votre plan</h2>
          <p style={{ fontSize: 15, color: "#94A3B8", margin: 0 }}>Sans engagement. Annulez à tout moment.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{ position: "relative", backgroundColor: "#182235", border: `2px solid ${plan.highlighted ? plan.color : "#263247"}`, borderRadius: 16, padding: 28, transition: "transform 0.2s", boxShadow: plan.highlighted ? `0 0 30px ${plan.color}30` : "none" }}>
              {plan.highlighted && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", padding: "4px 16px", borderRadius: 20, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
                  ⭐ Le plus populaire
                </div>
              )}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: plan.color, marginBottom: 8 }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                  <span style={{ fontSize: 40, fontWeight: 800 }}>{plan.price} €</span>
                  <span style={{ fontSize: 14, color: "#94A3B8" }}>/mois</span>
                </div>
                <p style={{ fontSize: 13, color: "#94A3B8", margin: 0, lineHeight: 1.5 }}>{plan.description}</p>
              </div>

              <button onClick={() => alert(`Vous avez choisi le plan ${plan.name} !`)}
                style={{ width: "100%", padding: "12px", borderRadius: 10, border: plan.highlighted ? "none" : `1px solid ${plan.color}`, background: plan.highlighted ? "linear-gradient(135deg, #3B82F6, #8B5CF6)" : "transparent", color: "#FFF", fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                {plan.highlighted && <Zap size={16} />}
                Choisir {plan.name}
              </button>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Check size={16} color="#10B981" style={{ marginTop: 1, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#FFF" }}>{f}</span>
                  </div>
                ))}
                {plan.missing.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", opacity: 0.35 }}>
                    <Check size={16} color="#94A3B8" style={{ marginTop: 1, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#94A3B8", textDecoration: "line-through" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: 680, margin: "48px auto 0" }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>Questions fréquentes</h3>
          {[
            ["Puis-je annuler à tout moment ?", "Oui, sans frais ni engagement. Votre abonnement reste actif jusqu'à la fin de la période en cours."],
            ["Y a-t-il une période d'essai ?", "Oui, 7 jours gratuits sur tous les plans. Aucune carte bancaire requise."],
            ["Les signaux sont-ils garantis ?", "Les signaux sont basés sur des analyses algorithmiques. Toute décision d'investissement reste sous votre responsabilité."],
          ].map(([q, a]) => (
            <div key={q} style={{ marginBottom: 16, padding: 20, backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{q}</div>
              <div style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.5 }}>{a}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
