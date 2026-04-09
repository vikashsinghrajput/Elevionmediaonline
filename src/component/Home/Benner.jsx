import { useEffect, useState } from "react";

const STARS = [
  { w: 2, h: 2, top: "10%", left: "5%", d: "0s" },
  { w: 2, h: 2, top: "20%", left: "15%", d: "0.4s" },
  { w: 1.5, h: 1.5, top: "70%", left: "8%", d: "0.9s" },
  { w: 2, h: 2, top: "40%", left: "3%", d: "1.4s" },
  { w: 2, h: 2, top: "80%", left: "18%", d: "0.7s" },
  { w: 1.5, h: 1.5, top: "15%", left: "55%", d: "0.2s" },
  { w: 2, h: 2, top: "85%", left: "60%", d: "1.1s" },
  { w: 2, h: 2, top: "10%", left: "78%", d: "0.6s" },
  { w: 1.5, h: 1.5, top: "75%", left: "90%", d: "1.3s" },
  { w: 2, h: 2, top: "30%", left: "95%", d: "0.3s" },
];

const FEATURES = ["Brand Identity", "Solar Healing", "Sacred Growth", "Divine Strategy"];
const LOTUS_PETALS_OUTER = [0, 40, 80, 120, 160, 200, 240, 280, 320];
const LOTUS_PETALS_INNER = [20, 60, 100, 140, 180, 220, 260, 300, 340];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

.sb-star {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,220,120,0.8);
  animation: sb-twinkle 3s ease-in-out infinite alternate;
}
.sb-cta {
  background: transparent;
  border: 1.5px solid rgba(210,160,60,0.8);
  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.sb-cta:hover {
  background: rgba(210,160,60,0.15);
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(210,160,60,0.3);
}
.sb-cta:active { transform: scale(0.98); }

.sb-item { opacity: 0; animation: sb-up 0.7s ease-out forwards; }
.d1{animation-delay:0.1s} .d2{animation-delay:0.25s}
.d3{animation-delay:0.4s} .d4{animation-delay:0.55s} .d5{animation-delay:0.7s}

.sb-glow-ring {
  animation: sb-pulse 3s ease-in-out infinite alternate;
  transform-origin: 160px 150px;
}

.sb-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
  position: relative;
  z-index: 2;
}

.sb-text { flex: 0 1 380px; }

/* Figure — bada kar diya: 340x340 */
.sb-figure {
  flex: 0 0 340px;
  height: 340px;
  position: relative;
}

/* Tablet */
@media (max-width: 768px) {
  .sb-inner { gap: 24px; }
  .sb-figure {
    flex: 0 0 240px;
    height: 240px;
  }
}

/* Mobile: stack vertically */
@media (max-width: 540px) {
  .sb-inner {
    flex-direction: column;
    gap: 0;
    align-items: center;
    text-align: center;
  }
  .sb-figure {
    flex: 0 0 200px;
    height: 200px;
    width: 200px;
  }
  .sb-text {
    flex: none;
    width: 100%;
  }
  .sb-text p {
    margin-left: auto;
    margin-right: auto;
  }
  .sb-features { justify-content: center; }
  .sb-cta-wrap {
    display: flex;
    justify-content: center;
  }
}

@keyframes sb-twinkle {
  from { opacity: 0.2; transform: scale(0.7); }
  to   { opacity: 0.9; transform: scale(1.4); }
}
@keyframes sb-pulse {
  from { opacity: 0.6; transform: scale(0.96); }
  to   { opacity: 1;   transform: scale(1.04); }
}
@keyframes sb-up {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

function LotusFigureSVG() {
  return (
    <svg
      viewBox="0 0 320 280"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8c0" stopOpacity="1" />
          <stop offset="35%" stopColor="#f0c040" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c06010" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e09030" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#a04010" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1a0a1e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="figureGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a1004" stopOpacity="1" />
          <stop offset="100%" stopColor="#0e0602" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="petalOuter" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#c06010" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f0c060" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="petalInner" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#d08020" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffe090" stopOpacity="0.95" />
        </linearGradient>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="160" cy="148" rx="120" ry="110" fill="url(#outerGlow)" filter="url(#softBlur)" />

      <g className="sb-glow-ring">
        {LOTUS_PETALS_OUTER.map((angle, i) => (
          <ellipse key={`outer-${i}`} cx="160" cy="102" rx="12" ry="32"
            fill="url(#petalOuter)" transform={`rotate(${angle}, 160, 150)`} />
        ))}
      </g>

      {LOTUS_PETALS_INNER.map((angle, i) => (
        <ellipse key={`inner-${i}`} cx="160" cy="116" rx="9" ry="22"
          fill="url(#petalInner)" transform={`rotate(${angle}, 160, 150)`} />
      ))}

      <circle cx="160" cy="150" r="36" fill="url(#centerGlow)" filter="url(#glowFilter)" />
      <circle cx="160" cy="150" r="18" fill="#ffe090" opacity="0.95" />
      <circle cx="160" cy="150" r="9" fill="#fff8d0" opacity="1" />

      <ellipse cx="160" cy="198" rx="22" ry="48" fill="#e08020" opacity="0.15" filter="url(#softBlur)" />

      <path d="M150 225 Q150 202 156 193 Q160 188 164 193 Q170 202 170 225 Z" fill="url(#figureGrad)" />
      <circle cx="160" cy="180" r="12" fill="#1e0c04" />
      <path d="M152 208 Q138 216 130 225" fill="none" stroke="#1e0c04" strokeWidth="7" strokeLinecap="round" />
      <circle cx="129" cy="227" r="4.5" fill="#1e0c04" />
      <path d="M168 208 Q182 216 190 225" fill="none" stroke="#1e0c04" strokeWidth="7" strokeLinecap="round" />
      <circle cx="191" cy="227" r="4.5" fill="#1e0c04" />
      <path d="M150 225 Q142 237 126 242 Q143 246 160 244 Q177 246 194 242 Q178 237 170 225 Z" fill="#130802" />

      <circle cx="160" cy="215" r="2.2" fill="rgba(255,200,80,0.75)" />
      <circle cx="160" cy="205" r="1.8" fill="rgba(255,150,60,0.65)" />
      <circle cx="160" cy="195" r="1.5" fill="rgba(200,120,255,0.55)" />

      <circle cx="160" cy="150" r="68" fill="none" stroke="rgba(255,180,60,0.1)" strokeWidth="1" />
      <circle cx="160" cy="150" r="88" fill="none" stroke="rgba(255,180,60,0.06)" strokeWidth="0.8" />
    </svg>
  );
}

export default function SpiritualBanner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <style>{CSS}</style>
      <div
        style={{
          background: `linear-gradient(120deg, #0a0510 0%, #180c06 40%, #1e0e06 65%, #0e0510 100%)`,
          borderRadius: "0px",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "210px",
          padding: "3rem 3rem",
          fontFamily: "'Lato', sans-serif",
          boxSizing: "border-box",
        }}
      >
        {/* Stars */}
        {mounted &&
          STARS.map((s, i) => (
            <div key={i} className="sb-star"
              style={{ width: s.w, height: s.h, top: s.top, left: s.left, animationDelay: s.d }}
            />
          ))}

        <div className="sb-inner">

          {/* LEFT: Text */}
          <div className="sb-text">
            <h1
              className="sb-item d1"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(16px, 2.4vw, 28px)",
                fontWeight: 600,
                color: "#ffffff",
                lineHeight: 1.4,
                marginBottom: "10px",
                textShadow: "0 0 40px rgba(255,160,40,0.2)",
              }}
            >
              Ready to Transform Your<br />
              <span style={{ color: "#f0c060" }}>Spiritual Business?</span>
            </h1>

            <p
              className="sb-item d2"
              style={{
                fontSize: "13px",
                color: "rgba(210,190,175,0.72)",
                lineHeight: 1.75,
                maxWidth: "320px",
                marginBottom: "22px",
              }}
            >
              Let's build your brand, attract more clients &amp; take your impact to the next level.
            </p>

            <div className="sb-item d3 sb-cta-wrap">
              <button
                className="sb-cta"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: "10.5px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#e8b840",
                  padding: "10px 22px",
                  borderRadius: "3px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Book Your Free Strategy Call
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"
                  stroke="#e8b840" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>

            <div className="sb-item d5 sb-features"
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "18px" }}>
              {FEATURES.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "rgba(200,175,150,0.58)" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c89030", display: "inline-block", flexShrink: 0 }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Lotus Figure — BADA */}
          <div className="sb-figure">
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: "35%", height: "100%",
              background: "linear-gradient(to right, #180c06, transparent)",
              zIndex: 2, pointerEvents: "none",
            }} />
            <LotusFigureSVG />
          </div>

        </div>
      </div>
    </>
  );
}