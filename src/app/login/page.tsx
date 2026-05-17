"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0B1020", display: "flex" }}>
      {/* Left panel */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 48 }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <div style={{ marginBottom: 36 }}>
            <Logo size={36} />
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>Bon retour 👋</h1>
          <p style={{ fontSize: 14, color: "#94A3B8", marginBottom: 32 }}>Connectez-vous pour accéder à vos analyses.</p>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 12, color: "#94A3B8", marginBottom: 6 }}>Email</label>
            <input type="email" placeholder="jean@example.com" defaultValue="jean.dupont@gmail.com"
              style={{ width: "100%", padding: "12px 14px", backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 8, color: "#FFF", fontSize: 14, outline: "none" }} />
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <label style={{ fontSize: 12, color: "#94A3B8" }}>Mot de passe</label>
              <Link href="/forgot-password" style={{ fontSize: 12, color: "#3B82F6", textDecoration: "none" }}>Oublié ?</Link>
            </div>
            <div style={{ position: "relative" }}>
              <input type={showPwd ? "text" : "password"} placeholder="••••••••" defaultValue="password123"
                style={{ width: "100%", padding: "12px 44px 12px 14px", backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 8, color: "#FFF", fontSize: 14, outline: "none" }} />
              <button onClick={() => setShowPwd(!showPwd)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#94A3B8" }}>
                {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <Link href="/dashboard" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "13px", borderRadius: 10, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "#FFF", fontSize: 15, fontWeight: 700, textDecoration: "none", marginBottom: 20 }}>
            Se connecter <ArrowRight size={16} />
          </Link>

          <div style={{ position: "relative", textAlign: "center", marginBottom: 20 }}>
            <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, backgroundColor: "#263247" }} />
            <span style={{ position: "relative", backgroundColor: "#0B1020", padding: "0 12px", fontSize: 12, color: "#94A3B8" }}>ou continuer avec</span>
          </div>

          <button onClick={() => alert("Google OAuth — bientôt disponible !")} style={{ width: "100%", padding: "12px", borderRadius: 10, backgroundColor: "#182235", border: "1px solid #263247", color: "#FFF", fontSize: 14, cursor: "pointer", marginBottom: 24 }}>
            🔵 Google
          </button>

          <p style={{ textAlign: "center", fontSize: 13, color: "#94A3B8" }}>
            Pas encore de compte ?{" "}
            <Link href="/register" style={{ color: "#3B82F6", textDecoration: "none", fontWeight: 600 }}>Créer un compte</Link>
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ flex: 1, background: "linear-gradient(135deg, #121A2B 0%, #1a2744 100%)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 48, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "10%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "10%", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent)", filter: "blur(40px)" }} />
        <div style={{ textAlign: "center", zIndex: 1 }}>
          <div style={{ fontSize: 40, marginBottom: 24 }}>📈</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>L'IA au service de votre trading</h2>
          <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7, maxWidth: 320 }}>Rejoignez plus de 12 000 traders qui utilisent AlphaEdge pour prendre de meilleures décisions chaque jour.</p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 32 }}>
            {[["12K+", "Traders actifs"], ["68%", "Win rate moyen"], ["92/100", "Score IA"]].map(([v, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#3B82F6" }}>{v}</div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
