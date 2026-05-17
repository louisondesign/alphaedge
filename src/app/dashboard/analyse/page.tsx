"use client";
import { useState, useRef } from "react";
import Topbar from "@/components/Topbar";
import { TrendingUp, TrendingDown, Minus, RefreshCw, Bookmark, PlusCircle, ChevronDown, Upload, X, ImageIcon } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const assets = ["BTC/USD", "ETH/USD", "EUR/USD", "GBP/USD", "GOLD", "S&P 500", "NASDAQ", "US30", "AAPL", "SOL/USD"];
const timeframes = ["1M", "5M", "15M", "1H", "4H", "1D", "1W", "1M"];

const generateChartData = (base: number, points: number = 60) =>
  Array.from({ length: points }, (_, i) => ({
    t: i,
    v: base + (Math.random() - 0.48) * base * 0.02 * Math.sqrt(i + 1),
  }));

const analysis = {
  "BTC/USD": { signal: "BUY", confidence: 92, entry: 44120, sl: 42800, tp: 46500, summary: "Structure haussière confirmée sur 4H. Order block institutionnel respecté. Volume en hausse, RSI sorti de la zone de survente. Résistance clé à 45 000 $ en ligne de mire. Momentum favorable.", price: 44120, change: +4.18 },
  "ETH/USD": { signal: "SELL", confidence: 74, entry: 2740, sl: 2820, tp: 2540, summary: "Divergence baissière RSI sur 4H. Refus net sous résistance 2 850 $. Liquidité sous les plus bas à purger. Contexte BTC bearish à court terme.", price: 2740, change: -2.31 },
  "EUR/USD": { signal: "HOLD", confidence: 61, entry: 1.0798, sl: 1.0750, tp: 1.0870, summary: "Consolidation en range serré. Attente des données NFP vendredi. Pas de signal clair sur 4H. Privilégier l'attente d'une cassure.", price: 1.0798, change: -0.21 },
};

const screenshotAnalysis = [
  { signal: "BUY", confidence: 87, entry: 44250, sl: 43100, tp: 46800, summary: "Double bottom identifié sur la structure de prix. Confluence avec un order block haussier sur 4H. Volume en accumulation progressive. RSI en divergence positive. Cible primaire à 46 800 $, invalidation sous 43 100 $." },
  { signal: "SELL", confidence: 79, entry: 2810, sl: 2890, tp: 2580, summary: "Rejection nette sous une résistance majeure avec mèche baissière prononcée. Divergence baissière sur le MACD. La structure de marché suggère une continuation baissière vers la zone de liquidité à 2 580 $." },
  { signal: "HOLD", confidence: 55, entry: 1.0812, sl: 1.0760, tp: 1.0890, summary: "Contexte ambigu : range étroit sans catalyseur clair. Attente d'une cassure du canal de consolidation. Signal insuffisant pour entrer en position. Surveiller les publications macro de la semaine." },
  { signal: "BUY", confidence: 91, entry: 2340, sl: 2270, tp: 2520, summary: "Breakout confirmé au-dessus d'une résistance de long terme avec clôture de bougie solide. Momentum haussier fort, volume supérieur à la moyenne. Structure en higher highs / higher lows intacte." },
];

type AssetKey = keyof typeof analysis;

export default function AnalysePage() {
  const [selectedAsset, setSelectedAsset] = useState<AssetKey>("BTC/USD");
  const [selectedTf, setSelectedTf] = useState("4H");
  const [showAssets, setShowAssets] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);
  const [loading, setLoading] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [screenshotAnalyzed, setScreenshotAnalyzed] = useState(false);
  const [screenshotLoading, setScreenshotLoading] = useState(false);
  const [screenshotResult, setScreenshotResult] = useState(screenshotAnalysis[0]);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const data = analysis[selectedAsset] || analysis["BTC/USD"];
  const chartData = generateChartData(data.price);

  const handleAnalyze = () => {
    setLoading(true);
    setAnalyzed(false);
    setTimeout(() => { setLoading(false); setAnalyzed(true); }, 1800);
  };

  const handleScreenshotUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setScreenshot(e.target?.result as string);
      setScreenshotAnalyzed(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleScreenshotUpload(file);
  };

  const handleScreenshotAnalyze = () => {
    setScreenshotLoading(true);
    setScreenshotAnalyzed(false);
    const random = screenshotAnalysis[Math.floor(Math.random() * screenshotAnalysis.length)];
    setTimeout(() => {
      setScreenshotResult(random);
      setScreenshotLoading(false);
      setScreenshotAnalyzed(true);
    }, 2400);
  };

  const screenshotSignalColor = screenshotResult.signal === "BUY" ? "#10B981" : screenshotResult.signal === "SELL" ? "#EF4444" : "#F59E0B";

  const signalColor = data.signal === "BUY" ? "#10B981" : data.signal === "SELL" ? "#EF4444" : "#F59E0B";

  return (
    <>
      <Topbar title="Analyse de Marché" />
      <div style={{ padding: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, alignItems: "start" }}>

          {/* Left: Chart */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Controls */}
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setShowAssets(!showAssets)}
                  style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 8, color: "#FFF", fontSize: 14, fontWeight: 600, cursor: "pointer", minWidth: 140 }}
                >
                  {selectedAsset} <ChevronDown size={14} color="#94A3B8" />
                </button>
                {showAssets && (
                  <div style={{ position: "absolute", top: 46, left: 0, width: 180, backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 10, padding: 8, zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
                    {assets.map(a => (
                      <button key={a} onClick={() => { setSelectedAsset(a as AssetKey); setShowAssets(false); setAnalyzed(false); }}
                        style={{ display: "block", width: "100%", textAlign: "left", padding: "8px 12px", borderRadius: 6, fontSize: 13, color: a === selectedAsset ? "#3B82F6" : "#94A3B8", backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
                        {a}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {timeframes.map(tf => (
                  <button key={tf} onClick={() => setSelectedTf(tf)}
                    style={{ padding: "8px 12px", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer", backgroundColor: tf === selectedTf ? "#3B82F6" : "#182235", color: tf === selectedTf ? "#FFF" : "#94A3B8", border: "1px solid #263247" }}>
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div>
                  <span style={{ fontSize: 22, fontWeight: 700 }}>{selectedAsset}</span>
                  <span style={{ marginLeft: 12, fontSize: 20, fontWeight: 700 }}>{data.price.toLocaleString()}</span>
                  <span style={{ marginLeft: 8, fontSize: 14, color: data.change > 0 ? "#10B981" : "#EF4444" }}>
                    {data.change > 0 ? "+" : ""}{data.change}%
                  </span>
                </div>
                <span style={{ fontSize: 12, color: "#94A3B8" }}>{selectedTf} • Données fictives</span>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={signalColor} stopOpacity={0.2} />
                      <stop offset="95%" stopColor={signalColor} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#263247" />
                  <XAxis dataKey="t" hide />
                  <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} domain={["auto", "auto"]} />
                  <Tooltip contentStyle={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 8, color: "#FFF" }} formatter={(v) => [Number(v).toFixed(2), "Prix"]} />
                  <ReferenceLine y={data.entry} stroke="#3B82F6" strokeDasharray="4 4" label={{ value: "Entry", fill: "#3B82F6", fontSize: 11 }} />
                  <ReferenceLine y={data.sl} stroke="#EF4444" strokeDasharray="4 4" label={{ value: "SL", fill: "#EF4444", fontSize: 11 }} />
                  <ReferenceLine y={data.tp} stroke="#10B981" strokeDasharray="4 4" label={{ value: "TP", fill: "#10B981", fontSize: 11 }} />
                  <Area type="monotone" dataKey="v" stroke={signalColor} strokeWidth={2} fill="url(#cg)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={handleAnalyze} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px", borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                {loading ? "Analyse en cours..." : "Analyser avec l'IA"}
              </button>
              <button onClick={() => alert("Analyse sauvegardée !")} style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 8, backgroundColor: "#182235", border: "1px solid #263247", color: "#FFF", fontSize: 14, cursor: "pointer" }}>
                <Bookmark size={16} /> Sauvegarder
              </button>
              <button onClick={() => alert(`${selectedAsset} ajouté à la watchlist !`)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 8, backgroundColor: "#182235", border: "1px solid #263247", color: "#FFF", fontSize: 14, cursor: "pointer" }}>
                <PlusCircle size={16} /> Watchlist
              </button>
            </div>
          </div>

          {/* Screenshot Analysis */}
          <div style={{ gridColumn: "1 / -1", backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <ImageIcon size={16} color="#3B82F6" />
              Analyse de capture d&apos;écran
            </div>

            <div style={{ display: "grid", gridTemplateColumns: screenshot ? "1fr 1fr" : "1fr", gap: 16 }}>
              {/* Upload zone */}
              <div
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onClick={() => !screenshot && fileInputRef.current?.click()}
                style={{
                  border: `2px dashed ${dragOver ? "#3B82F6" : "#263247"}`,
                  borderRadius: 10,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  cursor: screenshot ? "default" : "pointer",
                  backgroundColor: dragOver ? "#1e2d45" : "#0B1020",
                  transition: "all 0.2s",
                  minHeight: 220,
                  position: "relative",
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleScreenshotUpload(f); }}
                />
                {screenshot ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={screenshot} alt="chart" style={{ maxWidth: "100%", maxHeight: 220, borderRadius: 8, objectFit: "contain" }} />
                    <button
                      onClick={(e) => { e.stopPropagation(); setScreenshot(null); setScreenshotAnalyzed(false); }}
                      style={{ position: "absolute", top: 10, right: 10, backgroundColor: "#EF4444", border: "none", borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                    >
                      <X size={14} color="#FFF" />
                    </button>
                  </>
                ) : (
                  <>
                    <Upload size={32} color="#3B82F6" />
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#FFF", marginBottom: 4 }}>Importer une capture d&apos;écran</div>
                      <div style={{ fontSize: 12, color: "#64748B" }}>Glisse ton chart ici ou clique pour choisir un fichier</div>
                    </div>
                    <div style={{ fontSize: 11, color: "#475569", padding: "4px 10px", border: "1px solid #263247", borderRadius: 6 }}>PNG, JPG, WEBP</div>
                  </>
                )}
              </div>

              {/* Result panel */}
              {screenshot && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {!screenshotAnalyzed && !screenshotLoading && (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column", gap: 12 }}>
                      <div style={{ fontSize: 13, color: "#64748B", textAlign: "center" }}>Image importée. Lance l&apos;analyse pour obtenir un signal.</div>
                      <button
                        onClick={handleScreenshotAnalyze}
                        style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#FFF", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
                      >
                        <RefreshCw size={16} /> Analyser avec l&apos;IA
                      </button>
                    </div>
                  )}

                  {screenshotLoading && (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column", gap: 16 }}>
                      <div style={{ width: 40, height: 40, border: "3px solid #263247", borderTop: "3px solid #3B82F6", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                      <div style={{ fontSize: 13, color: "#94A3B8" }}>Analyse du graphique en cours...</div>
                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </div>
                  )}

                  {screenshotAnalyzed && (
                    <>
                      {/* Signal */}
                      <div style={{ backgroundColor: "#0B1020", border: `1px solid ${screenshotSignalColor}40`, borderRadius: 10, padding: 16 }}>
                        <div style={{ fontSize: 11, color: "#94A3B8", marginBottom: 6 }}>Signal détecté</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                          <div style={{ fontSize: 28, fontWeight: 800, color: screenshotSignalColor }}>{screenshotResult.signal}</div>
                          {screenshotResult.signal === "BUY" ? <TrendingUp size={24} color="#10B981" /> : screenshotResult.signal === "SELL" ? <TrendingDown size={24} color="#EF4444" /> : <Minus size={24} color="#F59E0B" />}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                          <span style={{ fontSize: 11, color: "#94A3B8" }}>Confiance IA</span>
                          <span style={{ fontSize: 11, fontWeight: 600, color: screenshotSignalColor }}>{screenshotResult.confidence}%</span>
                        </div>
                        <div style={{ height: 5, backgroundColor: "#263247", borderRadius: 3 }}>
                          <div style={{ height: "100%", width: `${screenshotResult.confidence}%`, backgroundColor: screenshotSignalColor, borderRadius: 3 }} />
                        </div>
                      </div>

                      {/* Levels */}
                      <div style={{ backgroundColor: "#0B1020", border: "1px solid #263247", borderRadius: 10, padding: 16 }}>
                        {[
                          { label: "Entry", value: screenshotResult.entry, color: "#3B82F6" },
                          { label: "Stop Loss", value: screenshotResult.sl, color: "#EF4444" },
                          { label: "Take Profit", value: screenshotResult.tp, color: "#10B981" },
                        ].map((lvl) => (
                          <div key={lvl.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1e2d45" }}>
                            <span style={{ fontSize: 12, color: "#94A3B8" }}>{lvl.label}</span>
                            <span style={{ fontSize: 13, fontWeight: 700, color: lvl.color }}>{lvl.value.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>

                      {/* Summary */}
                      <div style={{ backgroundColor: "#0B1020", border: "1px solid #263247", borderRadius: 10, padding: 16 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Analyse IA</div>
                        <p style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>{screenshotResult.summary}</p>
                      </div>

                      <button
                        onClick={handleScreenshotAnalyze}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px", borderRadius: 8, backgroundColor: "#182235", border: "1px solid #263247", color: "#94A3B8", fontSize: 13, cursor: "pointer" }}
                      >
                        <RefreshCw size={14} /> Relancer l&apos;analyse
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Analysis Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Signal */}
            <div style={{ backgroundColor: "#182235", border: `1px solid ${signalColor}40`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 12, color: "#94A3B8", marginBottom: 8 }}>Signal IA Actuel</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: signalColor }}>{data.signal}</div>
                {data.signal === "BUY" ? <TrendingUp size={32} color="#10B981" /> : data.signal === "SELL" ? <TrendingDown size={32} color="#EF4444" /> : <Minus size={32} color="#F59E0B" />}
              </div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: "#94A3B8" }}>Confiance IA</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: signalColor }}>{data.confidence}%</span>
                </div>
                <div style={{ height: 6, backgroundColor: "#263247", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${data.confidence}%`, backgroundColor: signalColor, borderRadius: 3 }} />
                </div>
              </div>
            </div>

            {/* Levels */}
            <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Niveaux Clés</div>
              {[
                { label: "Entry", value: data.entry, color: "#3B82F6" },
                { label: "Stop Loss", value: data.sl, color: "#EF4444" },
                { label: "Take Profit", value: data.tp, color: "#10B981" },
              ].map((lvl) => (
                <div key={lvl.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #263247" }}>
                  <span style={{ fontSize: 13, color: "#94A3B8" }}>{lvl.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: lvl.color }}>{lvl.value.toLocaleString()}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, padding: "10px 14px", backgroundColor: "#0B1020", borderRadius: 8, border: "1px solid #263247" }}>
                <div style={{ fontSize: 11, color: "#94A3B8", marginBottom: 4 }}>Ratio Risque/Récompense</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#10B981" }}>1 : {(Math.abs(data.tp - data.entry) / Math.abs(data.entry - data.sl)).toFixed(1)}</div>
              </div>
            </div>

            {/* Summary */}
            {analyzed && (
              <div style={{ backgroundColor: "#182235", border: "1px solid #263247", borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Résumé IA</div>
                <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>{data.summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
