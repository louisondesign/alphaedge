"use client";
import { useState } from "react";
import Topbar from "@/components/Topbar";
import { User, Bell, CreditCard, Palette, Globe, Shield, Save } from "lucide-react";

const sections = [
  { id: "profil", label: "Profil", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "abonnement", label: "Abonnement", icon: CreditCard },
  { id: "theme", label: "Thème", icon: Palette },
  { id: "langue", label: "Langue", icon: Globe },
  { id: "securite", label: "Sécurité", icon: Shield },
];

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button onClick={() => setOn(!on)} style={{ width: 44, height: 24, borderRadius: 12, backgroundColor: on ? "#3B82F6" : "#263247", border: "none", cursor: "pointer", position: "relative", transition: "background 0.2s" }}>
      <div style={{ position: "absolute", top: 3, left: on ? 23 : 3, width: 18, height: 18, borderRadius: "50%", backgroundColor: "#FFF", transition: "left 0.2s" }} />
    </button>
  );
}

function Input({ label, defaultValue, type = "text" }: { label: string; defaultValue: string; type?: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, color: "#94A3B8", marginBottom: 6 }}>{label}</label>
      <input type={type} defaultValue={defaultValue}
        style={{ width: "100%", padding: "10px 14px", backgroundColor: "#0B1020", border: "1px solid #263247", borderRadius: 8, color: "#FFF", fontSize: 14, outline: "none" }} />
    </div>
  );
}

export default function ParametresPage() {
  const [active, setActive] = useState("profil");

  return (
    <>
      <Topbar title="Paramètres" />
      <div style={{ padding: 24, display: "grid", gridTemplateColumns: "220px 1fr", gap: 20 }}>
        {/* Sidebar nav */}
        <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 12, height: "fit-content" }}>
          {sections.map(s => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button key={s.id} onClick={() => setActive(s.id)}
                style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 8, border: "none", cursor: "pointer", marginBottom: 2, backgroundColor: isActive ? "rgba(59,130,246,0.15)" : "transparent", color: isActive ? "#3B82F6" : "#94A3B8", fontSize: 14, fontWeight: isActive ? 600 : 400, textAlign: "left" }}>
                <Icon size={16} /> {s.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 28 }}>
          {active === "profil" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>Informations du Profil</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, padding: 20, backgroundColor: "#0B1020", borderRadius: 12, border: "1px solid #263247" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700 }}>JD</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>Jean Dupont</div>
                  <div style={{ fontSize: 13, color: "#8B5CF6" }}>Pro Plan</div>
                  <button onClick={() => alert("Upload photo !")} style={{ marginTop: 8, padding: "4px 12px", borderRadius: 6, border: "1px solid #263247", backgroundColor: "transparent", color: "#94A3B8", fontSize: 12, cursor: "pointer" }}>Changer la photo</button>
                </div>
              </div>
              <Input label="Prénom" defaultValue="Jean" />
              <Input label="Nom" defaultValue="Dupont" />
              <Input label="Email" defaultValue="jean.dupont@gmail.com" type="email" />
              <Input label="Téléphone" defaultValue="+33 6 12 34 56 78" />
              <button onClick={() => alert("Profil sauvegardé !")} style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                <Save size={15} /> Sauvegarder
              </button>
            </div>
          )}

          {active === "notifications" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>Notifications</h3>
              {[
                ["Signaux de trading", "Recevez une alerte à chaque nouveau signal IA", true],
                ["Calendrier économique", "Rappel 1h avant les événements à fort impact", true],
                ["Objectifs atteints", "Notification quand vos positions atteignent le TP", true],
                ["News de marché", "Résumé quotidien des actualités importantes", false],
                ["Rapport hebdomadaire", "Récap de vos performances chaque lundi", true],
                ["Emails marketing", "Offres et nouveautés AlphaEdge", false],
              ].map(([label, desc, on]) => (
                <div key={label as string} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #263247" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{label as string}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>{desc as string}</div>
                  </div>
                  <Toggle defaultOn={on as boolean} />
                </div>
              ))}
            </div>
          )}

          {active === "abonnement" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>Mon Abonnement</h3>
              <div style={{ padding: 24, backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: 12, marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700 }}>Plan Pro</div>
                    <div style={{ fontSize: 14, color: "#94A3B8", marginTop: 4 }}>Prochain renouvellement : 15 février 2024</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 24, fontWeight: 800 }}>79 €</div>
                    <div style={{ fontSize: 12, color: "#94A3B8" }}>/ mois</div>
                  </div>
                </div>
              </div>
              <button onClick={() => alert("Redirection vers la gestion des paiements...")} style={{ padding: "10px 20px", borderRadius: 8, backgroundColor: "#182235", border: "1px solid #263247", color: "#FFF", fontSize: 14, cursor: "pointer", marginRight: 10 }}>Gérer le paiement</button>
              <button onClick={() => alert("Passez à Elite pour débloquer tous les signaux !")} style={{ padding: "10px 20px", borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Passer à Elite</button>
            </div>
          )}

          {active === "theme" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>Apparence</h3>
              {["Sombre (par défaut)", "Sombre Intense", "Sombre Bleu"].map((theme, i) => (
                <div key={theme} onClick={() => alert(`Thème "${theme}" activé !`)} style={{ display: "flex", alignItems: "center", gap: 12, padding: 16, borderRadius: 10, border: `2px solid ${i === 0 ? "#3B82F6" : "#263247"}`, marginBottom: 12, cursor: "pointer" }}>
                  <div style={{ width: 40, height: 28, borderRadius: 6, background: ["#0B1020", "#060d1a", "#0a1628"][i], border: "1px solid #263247" }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{theme}</div>
                    {i === 0 && <div style={{ fontSize: 12, color: "#3B82F6" }}>Actuel</div>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === "langue" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>Langue & Région</h3>
              {[["🇫🇷", "Français", true], ["🇺🇸", "English", false], ["🇪🇸", "Español", false]].map(([flag, lang, active]) => (
                <div key={lang as string} onClick={() => alert(`Langue changée : ${lang}`)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 10, border: `2px solid ${active ? "#3B82F6" : "#263247"}`, marginBottom: 10, cursor: "pointer" }}>
                  <span style={{ fontSize: 24 }}>{flag as string}</span>
                  <span style={{ fontSize: 14, fontWeight: active ? 600 : 400 }}>{lang as string}</span>
                  {active && <span style={{ marginLeft: "auto", fontSize: 12, color: "#3B82F6" }}>Actuel</span>}
                </div>
              ))}
            </div>
          )}

          {active === "securite" && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>Sécurité</h3>
              <Input label="Mot de passe actuel" defaultValue="" type="password" />
              <Input label="Nouveau mot de passe" defaultValue="" type="password" />
              <Input label="Confirmer le nouveau mot de passe" defaultValue="" type="password" />
              <div style={{ padding: 16, backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 8, marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#10B981", marginBottom: 4 }}>Authentification 2FA</div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>Renforcez la sécurité de votre compte avec la double authentification.</div>
                <button onClick={() => alert("Activer la 2FA !")} style={{ marginTop: 10, padding: "8px 16px", borderRadius: 6, border: "1px solid #10B981", backgroundColor: "transparent", color: "#10B981", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Activer la 2FA</button>
              </div>
              <button onClick={() => alert("Mot de passe mis à jour !")} style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                <Save size={15} /> Mettre à jour
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
