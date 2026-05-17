"use client";
import Link from "next/link";
import Logo from "@/components/Logo";
import { TrendingUp, Brain, Zap, Shield, BarChart2, Calendar, BookOpen, ChevronRight, Check, Star } from "lucide-react";

const features = [
  { icon: Brain, title: "Analyse IA Avancée", desc: "Notre IA analyse des milliers de données en temps réel pour vous donner des signaux ultra-précis.", color: "#8B5CF6" },
  { icon: Zap, title: "Signaux en Temps Réel", desc: "Recevez les meilleures opportunités du marché avant tout le monde avec nos alertes instantanées.", color: "#3B82F6" },
  { icon: BarChart2, title: "Stratégies Backtestées", desc: "Accédez à plus de 15 stratégies validées sur des milliers de trades historiques.", color: "#10B981" },
  { icon: Calendar, title: "Calendrier Économique", desc: "Ne ratez plus aucun événement macro avec notre calendrier complet et personnalisable.", color: "#F59E0B" },
  { icon: BookOpen, title: "Journal de Trading", desc: "Analysez vos performances, identifiez vos patterns et améliorez votre discipline.", color: "#EF4444" },
  { icon: Shield, title: "Gestion du Risque", desc: "Chaque signal inclut entry, stop-loss et take-profit calculés avec précision.", color: "#06B6D4" },
];

const stats = [
  { value: "12 400+", label: "Traders actifs" },
  { value: "68.4%", label: "Win rate moyen" },
  { value: "4.8/5", label: "Note utilisateurs" },
  { value: "2.4M€", label: "Profits générés" },
];

const testimonials = [
  { name: "Thomas M.", role: "Day Trader", text: "AlphaEdge a complètement changé ma façon de trader. Le score IA est incroyablement précis.", stars: 5, gain: "+34% ce mois" },
  { name: "Sophie L.", role: "Swing Trader", text: "Les stratégies backtestées m'ont fait économiser des mois d'essais et d'erreurs.", stars: 5, gain: "+22% ce mois" },
  { name: "Marc D.", role: "Investisseur", text: "L'interface est superbe et les signaux sont d'une qualité que je n'ai jamais vue ailleurs.", stars: 5, gain: "+18% ce mois" },
];

const plans = [
  { name: "Starter", price: "29", features: ["10 analyses/jour", "3 stratégies", "Dashboard"], highlighted: false },
  { name: "Pro", price: "79", features: ["Analyses illimitées", "Toutes stratégies", "Signaux temps réel", "Journal avancé", "Support prioritaire"], highlighted: true },
  { name: "Elite", price: "199", features: ["Tout du Pro", "Signaux prioritaires", "Support VIP 24/7", "API Access"], highlighted: false },
];

const faqs = [
  ["Est-ce adapté aux débutants ?", "Oui, AlphaEdge est conçu pour tous les niveaux. Notre IA explique chaque signal de manière claire et pédagogique."],
  ["Les signaux sont-ils garantis ?", "Nos signaux sont basés sur des algorithmes avancés avec un win rate historique de 68.4%. Le trading comporte toujours des risques."],
  ["Comment fonctionne l'essai gratuit ?", "7 jours complets sans carte bancaire. Accès total à toutes les fonctionnalités du plan choisi."],
  ["Puis-je changer de plan ?", "Oui, à tout moment et sans frais. Le changement est immédiat."],
];

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: "#0B1020", color: "#FFF", fontFamily: "Inter, sans-serif" }}>
      {/* Navbar */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "rgba(11,16,32,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #263247", padding: "0 48px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo size={30} />
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {[["Fonctionnalités", "#features"], ["Pricing", "#pricing"], ["FAQ", "#faq"]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none" }}>{label}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Link href="/login" style={{ padding: "8px 18px", borderRadius: 8, border: "1px solid #263247", color: "#FFF", textDecoration: "none", fontSize: 14 }}>Connexion</Link>
          <Link href="/register" style={{ padding: "8px 18px", borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "#FFF", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Essai gratuit</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "90vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", left: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.12), transparent)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", top: "20%", right: "15%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent)", filter: "blur(60px)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 20, backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", fontSize: 13, color: "#3B82F6", marginBottom: 28 }}>
            <Zap size={13} /> Nouveau : Signaux IA v3.0 disponibles
          </div>

          <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.1, marginBottom: 20, maxWidth: 800, letterSpacing: "-0.03em" }}>
            Trade smarter with{" "}
            <span style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI-powered
            </span>{" "}
            market intelligence
          </h1>

          <p style={{ fontSize: 18, color: "#94A3B8", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Analysez les marchés, comparez des stratégies éprouvées et prenez des décisions plus éclairées grâce à notre IA de dernière génération.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 56 }}>
            <Link href="/register" style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "#FFF", textDecoration: "none", fontSize: 16, fontWeight: 700 }}>
              Commencer maintenant <ChevronRight size={16} />
            </Link>
            <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 10, backgroundColor: "#182235", border: "1px solid #263247", color: "#FFF", textDecoration: "none", fontSize: 16 }}>
              Voir la démo →
            </Link>
          </div>

          {/* Dashboard preview */}
          <div style={{ maxWidth: 860, margin: "0 auto", borderRadius: 16, overflow: "hidden", border: "1px solid #263247", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}>
            <div style={{ backgroundColor: "#121A2B", padding: "12px 16px", display: "flex", gap: 6 }}>
              {["#EF4444", "#F59E0B", "#10B981"].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: c }} />)}
              <div style={{ flex: 1, height: 12, backgroundColor: "#263247", borderRadius: 6, margin: "0 8px" }} />
            </div>
            <div style={{ backgroundColor: "#182235", padding: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
                {[["Profit Total", "+12 450 €", "#10B981"], ["Win Rate", "68.4%", "#3B82F6"], ["Trades", "247", "#8B5CF6"], ["Score IA", "92/100", "#F59E0B"]].map(([l, v, c]) => (
                  <div key={l} style={{ backgroundColor: "#0B1020", borderRadius: 8, padding: "14px 16px", border: "1px solid #263247" }}>
                    <div style={{ fontSize: 11, color: "#94A3B8", marginBottom: 4 }}>{l}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: c as string }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ height: 120, backgroundColor: "#0B1020", borderRadius: 8, border: "1px solid #263247", display: "flex", alignItems: "flex-end", padding: 12, gap: 3 }}>
                {[40, 55, 45, 65, 72, 60, 78, 68, 85, 75, 90, 88].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: `linear-gradient(to top, #3B82F6, #8B5CF6)`, opacity: 0.7 + i * 0.025 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "48px 48px", borderTop: "1px solid #263247", borderBottom: "1px solid #263247" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 36, fontWeight: 800, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div style={{ fontSize: 14, color: "#94A3B8", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.02em" }}>Tout ce dont vous avez besoin</h2>
            <p style={{ fontSize: 16, color: "#94A3B8" }}>Une plateforme complète, conçue pour les traders sérieux.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {features.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.title} style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: `${f.color}18`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Icon size={22} color={f.color} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "80px 48px", backgroundColor: "#121A2B" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Ce que disent nos traders</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {Array(t.stars).fill(0).map((_, i) => <Star key={i} size={14} color="#F59E0B" fill="#F59E0B" />)}
                </div>
                <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.6, marginBottom: 20 }}>"{t.text}"</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8" }}>{t.role}</div>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#10B981" }}>{t.gain}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Tarification simple & transparente</h2>
            <p style={{ fontSize: 15, color: "#94A3B8" }}>7 jours gratuits sur tous les plans. Aucune carte bancaire requise.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {plans.map(p => (
              <div key={p.name} style={{ backgroundColor: "#182235", border: `2px solid ${p.highlighted ? "#3B82F6" : "#263247"}`, borderRadius: 14, padding: 28, position: "relative", boxShadow: p.highlighted ? "0 0 30px rgba(59,130,246,0.2)" : "none" }}>
                {p.highlighted && (
                  <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", padding: "3px 14px", borderRadius: 20, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>Recommandé</div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#94A3B8", marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: 36, fontWeight: 800 }}>{p.price} €<span style={{ fontSize: 14, color: "#94A3B8", fontWeight: 400 }}>/mois</span></div>
                </div>
                <Link href="/register" style={{ display: "block", textAlign: "center", padding: "11px", borderRadius: 8, background: p.highlighted ? "linear-gradient(135deg, #3B82F6, #8B5CF6)" : "transparent", border: p.highlighted ? "none" : "1px solid #263247", color: "#FFF", textDecoration: "none", fontSize: 14, fontWeight: 600, marginBottom: 20 }}>
                  Commencer
                </Link>
                {p.features.map(f => (
                  <div key={f} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <Check size={14} color="#10B981" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#94A3B8" }}>{f}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "80px 48px", backgroundColor: "#121A2B" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 40 }}>Questions fréquentes</h2>
          {faqs.map(([q, a]) => (
            <div key={q} style={{ marginBottom: 14, padding: 20, backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 10 }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{q}</div>
              <div style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 48px", textAlign: "center", background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))", borderTop: "1px solid #263247" }}>
        <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16, letterSpacing: "-0.02em" }}>Prêt à trader plus intelligemment ?</h2>
        <p style={{ fontSize: 16, color: "#94A3B8", marginBottom: 32 }}>Rejoignez 12 000+ traders qui utilisent AlphaEdge.</p>
        <Link href="/register" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 36px", borderRadius: 12, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "#FFF", textDecoration: "none", fontSize: 18, fontWeight: 700 }}>
          Commencer gratuitement <ChevronRight size={20} />
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: "32px 48px", borderTop: "1px solid #263247", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Logo size={24} />
        <div style={{ display: "flex", gap: 24 }}>
          {["Mentions légales", "Confidentialité", "CGU", "Contact"].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div style={{ fontSize: 13, color: "#94A3B8" }}>© 2024 AlphaEdge. Tous droits réservés.</div>
      </footer>
    </div>
  );
}
