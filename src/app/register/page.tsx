"use client";
import Link from "next/link";
import Logo from "@/components/Logo";
import { ArrowRight, Check } from "lucide-react";

export default function RegisterPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0B1020", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 480, backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 16, padding: 40 }}>
        <div style={{ marginBottom: 28 }}>
          <Logo size={32} />
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>Créer un compte</h1>
        <p style={{ fontSize: 14, color: "#94A3B8", marginBottom: 28 }}>7 jours gratuits, sans carte bancaire.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          {[["Prénom", "Jean"], ["Nom", "Dupont"]].map(([label, placeholder]) => (
            <div key={label}>
              <label style={{ display: "block", fontSize: 12, color: "#94A3B8", marginBottom: 6 }}>{label}</label>
              <input placeholder={placeholder} style={{ width: "100%", padding: "11px 13px", backgroundColor: "#0B1020", border: "1px solid #263247", borderRadius: 8, color: "#FFF", fontSize: 14, outline: "none" }} />
            </div>
          ))}
        </div>

        {[["Email", "email", "jean@example.com"], ["Mot de passe", "password", "Minimum 8 caractères"]].map(([label, type, placeholder]) => (
          <div key={label} style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontSize: 12, color: "#94A3B8", marginBottom: 6 }}>{label}</label>
            <input type={type} placeholder={placeholder} style={{ width: "100%", padding: "11px 13px", backgroundColor: "#0B1020", border: "1px solid #263247", borderRadius: 8, color: "#FFF", fontSize: 14, outline: "none" }} />
          </div>
        ))}

        <div style={{ padding: 14, backgroundColor: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 8, marginBottom: 20 }}>
          {["7 jours gratuits", "Sans carte bancaire", "Résiliable à tout moment"].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <Check size={14} color="#10B981" />
              <span style={{ fontSize: 13, color: "#94A3B8" }}>{f}</span>
            </div>
          ))}
        </div>

        <Link href="/dashboard" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "13px", borderRadius: 10, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "#FFF", fontSize: 15, fontWeight: 700, textDecoration: "none", marginBottom: 18 }}>
          Créer mon compte <ArrowRight size={16} />
        </Link>

        <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8" }}>
          Déjà un compte ?{" "}
          <Link href="/login" style={{ color: "#3B82F6", textDecoration: "none", fontWeight: 600 }}>Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
