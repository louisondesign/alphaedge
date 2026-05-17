"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0B1020", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 420, backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 16, padding: 40 }}>
        <div style={{ marginBottom: 28 }}><Logo size={32} /></div>

        {!sent ? (
          <>
            <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Mot de passe oublié ?</h1>
            <p style={{ fontSize: 14, color: "#94A3B8", marginBottom: 28 }}>Entrez votre email pour recevoir un lien de réinitialisation.</p>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 12, color: "#94A3B8", marginBottom: 6 }}>Email</label>
              <div style={{ position: "relative" }}>
                <Mail size={16} color="#94A3B8" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                <input type="email" placeholder="jean@example.com" style={{ width: "100%", padding: "12px 14px 12px 40px", backgroundColor: "#0B1020", border: "1px solid #263247", borderRadius: 8, color: "#FFF", fontSize: 14, outline: "none" }} />
              </div>
            </div>
            <button onClick={() => setSent(true)} style={{ width: "100%", padding: "13px", borderRadius: 10, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 18 }}>
              Envoyer le lien
            </button>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📧</div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Email envoyé !</h2>
            <p style={{ fontSize: 14, color: "#94A3B8", marginBottom: 28 }}>Vérifiez votre boîte mail et cliquez sur le lien de réinitialisation.</p>
          </div>
        )}

        <Link href="/login" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#94A3B8", textDecoration: "none", fontSize: 13 }}>
          <ArrowLeft size={14} /> Retour à la connexion
        </Link>
      </div>
    </div>
  );
}
