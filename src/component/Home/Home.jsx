// DigitalMarketingHero.jsx — Devotional & Spiritual Theme
import { useState, useRef } from "react";
import CarStudio from "./GraphicDesignSection";
import AppleProductCarousel from "./GraphicDesignSlider";
import CarFeatures from "./VideoFeatures";
import WhiteServicesUI from "../About/About";
import ProductVideoCarousel from "./Productvideocarousel";
import CaseStudySection from "./SocialMedia";
import HowWeWork from "./HowWeWork";
import PartnershipsSection from "./Partnershipssection";
import SpiritualHero from "./Benner";
import Footer from "../Layout/Footer";

const pillAnim = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');
  @keyframes ripple { to { transform: scale(4); opacity: 0; } }
  @keyframes ping { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.7); opacity: 0; } }
  @keyframes shimmer { 0% { left: -100%; } 100% { left: 160%; } }
  @keyframes divaFloat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
  @keyframes divaGlow { 0%,100% { box-shadow: 0 0 18px rgba(180,130,60,0.25); } 50% { box-shadow: 0 0 36px rgba(180,130,60,0.5); } }
  @keyframes mandalaRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .ping-ring {
    position: absolute; inset: 0; border-radius: 12px;
    border: 2px solid #c9963a;
    animation: ping 1.8s ease-out infinite;
    pointer-events: none;
  }
  .ripple {
    position: absolute; border-radius: 50%;
    background: rgba(255,255,255,0.35);
    transform: scale(0);
    animation: ripple 0.55s linear forwards;
    pointer-events: none;
  }
  .float-card-anim {
    animation: divaFloat 4s ease-in-out infinite, divaGlow 4s ease-in-out infinite;
  }
`;

// Color Palette — matching reference image: dark black text, gold accents
const C = {
  saffron: "#C8860A",
  gold: "#B8860B",
  goldLight: "#E8C87A",
  goldPale: "#FDF6E3",
  maroon: "#7B1D1D",
  maroonDeep: "#4A0E0E",
  maroonLight: "#B84040",
  ivory: "#FDFAF3",
  ivoryDark: "#F5EDD8",
  cream: "#FAF6ED",
  // Reference image style: near-black heading text
  textDark: "#111111",
  textMid: "#444444",
  textLight: "#888888",
  lotus: "#D4547E",
  teal: "#1D6B6B",
};

export default function DigitalMarketingHero() {
  const [activePill, setActivePill] = useState("SEO");
  const [btnHover, setBtnHover] = useState(false);
  const [pillHover, setPillHover] = useState(null);
  const pills = ["SEO", "Paid Ads", "Social Media"];
  const btnRef = useRef(null);

  const addRipple = (e) => {
    const btn = btnRef.current;
    const r = document.createElement("span");
    r.className = "ripple";
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(r);
    r.addEventListener("animationend", () => r.remove());
  };

  const marqueeItems = [
    "Community", "Development", "Mentor", "Websites", "Designing", "Graphics", "Animation"
  ];

  return (
    <>
      <div style={{
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
        background: C.ivory,
        position: "relative",
        overflow: "hidden",
      }}>

        <style>{pillAnim}</style>

        {/* Dot Background — warm saffron dots */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
          backgroundImage: `radial-gradient(circle, ${C.goldLight} 1.5px, transparent 1.5px)`,
          backgroundSize: "32px 32px",
        }} />

        {/* Mandala Pattern Top-Right (decorative SVG overlay) */}
        <div style={{
          position: "absolute", top: -60, right: "10%",
          width: 340, height: 340, opacity: 0.07,
          pointerEvents: "none",
        }}>
          <svg viewBox="0 0 200 200" style={{ animation: "mandalaRotate 60s linear infinite" }}>
            {[0,30,60,90,120,150].map((deg, i) => (
              <g key={i} transform={`rotate(${deg} 100 100)`}>
                <ellipse cx="100" cy="45" rx="12" ry="28" fill={C.gold} />
                <ellipse cx="100" cy="155" rx="12" ry="28" fill={C.gold} />
                <ellipse cx="45" cy="100" rx="28" ry="12" fill={C.gold} />
                <ellipse cx="155" cy="100" rx="28" ry="12" fill={C.gold} />
              </g>
            ))}
            <circle cx="100" cy="100" r="22" fill="none" stroke={C.gold} strokeWidth="2" />
            <circle cx="100" cy="100" r="10" fill={C.gold} />
          </svg>
        </div>

        {/* Mandala Bottom-Left */}
        <div style={{
          position: "absolute", bottom: -40, left: -40,
          width: 260, height: 260, opacity: 0.06,
          pointerEvents: "none",
        }}>
          <svg viewBox="0 0 200 200" style={{ animation: "mandalaRotate 80s linear infinite reverse" }}>
            {[0,45,90,135].map((deg, i) => (
              <g key={i} transform={`rotate(${deg} 100 100)`}>
                <ellipse cx="100" cy="40" rx="10" ry="24" fill={C.saffron} />
                <ellipse cx="100" cy="160" rx="10" ry="24" fill={C.saffron} />
              </g>
            ))}
            <circle cx="100" cy="100" r="28" fill="none" stroke={C.saffron} strokeWidth="1.5" />
          </svg>
        </div>

        {/* Glow Orbs — warm tones */}
        <div style={{ position: "absolute", width: 420, height: 420, background: "#FFE8B0", opacity: 0.55, top: -80, right: "20%", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 300, height: 300, background: "#F5C07A", opacity: 0.35, bottom: 0, right: 0, borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 250, height: 250, background: "#FFD6A5", opacity: 0.3, top: "30%", left: -60, borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

        {/* ── HERO SECTION ── */}
        <section style={{
          maxWidth: 1240, margin: "0 auto", padding: "50px 40px 80px",
          display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 50,
          alignItems: "center", position: "relative", zIndex: 10,
        }}>

          {/* ── LEFT ── */}
          <div>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: C.goldPale, border: `1px solid ${C.goldLight}`,
              borderRadius: 999, padding: "5px 16px 5px 10px",
              fontSize: 12, fontWeight: 600, color: C.maroon,
              letterSpacing: ".3px", marginBottom: 22,
              fontFamily: "'Cinzel', serif",
            }}>
              {/* Om symbol dot */}
              <span style={{
                width: 16, height: 16, borderRadius: "50%",
                background: `linear-gradient(135deg, ${C.saffron}, ${C.gold})`,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, color: "white", fontWeight: 900,
              }}>ॐ</span>
              #1 Digital Marketing Agency
            </div>

            {/* Heading — dark black like reference, only key word in gold italic */}
            <h1 style={{
              fontFamily: "'Cinzel', 'Georgia', serif",
              fontSize: "clamp(30px, 3.8vw, 50px)",
              fontWeight: 900, lineHeight: 1.2, color: "#111111",
              marginBottom: 18, letterSpacing: "-0.5px",
            }}>
              We Grow Your<br />
              <span style={{ color: C.gold, fontStyle: "italic" }}>Brand Online</span><br />
              With Strategy
            </h1>

            {/* Decorative Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ height: 1, flex: 1, background: `linear-gradient(90deg, transparent, ${C.gold})` }} />
              <span style={{ color: C.gold, fontSize: 14 }}>✦</span>
              <span style={{ color: C.saffron, fontSize: 18 }}>🪷</span>
              <span style={{ color: C.gold, fontSize: 14 }}>✦</span>
              <div style={{ height: 1, flex: 1, background: `linear-gradient(90deg, ${C.gold}, transparent)` }} />
            </div>

            {/* Description */}
            <p style={{
              color: C.textMid, fontSize: 16, lineHeight: 1.9,
              maxWidth: 420, marginBottom: 26, fontWeight: 400,
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            }}>
              Data-driven digital marketing that delivers real results. SEO, paid ads,
              social media & content that converts visitors into loyal customers.
            </p>

            {/* Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
              {pills.map((pill) => {
                const isActive = activePill === pill;
                const isHovered = pillHover === pill;
                return (
                  <button
                    key={pill}
                    onClick={() => setActivePill(pill)}
                    onMouseEnter={() => setPillHover(pill)}
                    onMouseLeave={() => setPillHover(null)}
                    style={{
                      position: "relative", overflow: "hidden",
                      display: "inline-flex", alignItems: "center", gap: 6,
                      border: `1.5px solid ${isActive || isHovered ? C.gold : C.goldLight}`,
                      borderRadius: 999, padding: "6px 18px", fontSize: 12, fontWeight: 600,
                      cursor: "pointer",
                      background: isActive || isHovered
                        ? `linear-gradient(135deg, ${C.saffron}, ${C.gold})`
                        : C.ivory,
                      color: isActive || isHovered ? "white" : C.maroon,
                      fontFamily: "'Cinzel', serif",
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                      transition: "all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      boxShadow: isActive ? `0 4px 14px rgba(201,150,58,0.35)` : "none",
                    }}
                  >
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: isActive || isHovered ? "rgba(255,255,255,0.8)" : C.gold,
                      display: "inline-block", flexShrink: 0,
                    }} />
                    {pill}
                  </button>
                );
              })}
            </div>

            {/* Search Card */}
            <div style={{
              background: C.cream,
              borderRadius: 20, padding: "16px 22px",
              display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4,
              boxShadow: `0 4px 32px rgba(201,150,58,0.15), 0 1px 4px rgba(0,0,0,0.06)`,
              border: `1px solid ${C.goldLight}`,
            }}>

              {/* Location */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 110 }}>
                <span style={{ fontSize: 20 }}>🪔</span>
                <div>
                  <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".6px", color: C.textLight, fontWeight: 600, margin: 0, fontFamily: "'Cinzel', serif" }}>Location</p>
                  <p style={{ fontSize: 13, color: C.textDark, fontWeight: 600, margin: 0, marginTop: 2 }}>Delhi, India</p>
                </div>
              </div>

              <div style={{ width: 1, height: 36, background: C.goldLight, margin: "0 14px" }} />

              {/* Start Date */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 120 }}>
                <span style={{ fontSize: 20 }}>📿</span>
                <div>
                  <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".6px", color: C.textLight, fontWeight: 600, margin: 0, fontFamily: "'Cinzel', serif" }}>Start Date</p>
                  <p style={{ fontSize: 13, color: C.textDark, fontWeight: 600, margin: 0, marginTop: 2 }}>March 2025</p>
                </div>
              </div>

              <div style={{ width: 1, height: 36, background: C.goldLight, margin: "0 14px" }} />

              {/* Goal */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 100 }}>
                <span style={{ fontSize: 20 }}>🕉️</span>
                <div>
                  <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".6px", color: C.textLight, fontWeight: 600, margin: 0, fontFamily: "'Cinzel', serif" }}>Goal</p>
                  <p style={{ fontSize: 13, color: C.textDark, fontWeight: 600, margin: 0, marginTop: 2 }}>10x ROAS</p>
                </div>
              </div>

              {/* ── GET STARTED BUTTON ── */}
              <button
                ref={btnRef}
                onClick={addRipple}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
                style={{
                  position: "relative", overflow: "hidden",
                  background: `linear-gradient(135deg, ${C.saffron}, ${C.gold})`,
                  color: "white", border: "none", borderRadius: 12,
                  padding: "10px 22px", fontSize: 13, fontWeight: 700,
                  cursor: "pointer", display: "flex", alignItems: "center",
                  gap: 8, marginLeft: "auto",
                  fontFamily: "'Cinzel', serif",
                  boxShadow: btnHover
                    ? `0 12px 32px rgba(232,101,26,0.5)`
                    : `0 4px 16px rgba(201,150,58,0.4)`,
                  transform: btnHover ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
                  transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease",
                }}
              >
                <div className="ping-ring" />
                {btnHover && (
                  <span style={{
                    position: "absolute", top: 0, left: "-100%", width: "60%", height: "100%",
                    background: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                    animation: "shimmer 0.5s ease forwards",
                    pointerEvents: "none",
                  }} />
                )}
                <span style={{
                  display: "inline-flex",
                  transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                  transform: btnHover ? "rotate(-15deg) scale(1.2)" : "rotate(0) scale(1)",
                }}>🔍</span>
                Get Started
              </button>
            </div>

            {/* Trust Row */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 22 }}>
              <div style={{ display: "flex" }}>
                {[["🙏", "#FDF3DC", 0], ["🪷", "#FDE8E8", -10], ["✨", "#F5EDD8", -10]].map(([emoji, bg, ml], i) => (
                  <div key={i} style={{
                    width: 32, height: 32, borderRadius: "50%", background: bg,
                    border: `2px solid ${C.goldLight}`, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 14, marginLeft: ml,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}>{emoji}</div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: C.textMid, margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>
                Trusted by <strong style={{ color: C.textDark }}>2,400+</strong> clients worldwide
              </p>
              <span style={{ color: C.gold, fontSize: 14 }}>★★★★★</span>
              <p style={{ fontSize: 13, fontWeight: 600, color: C.textDark, margin: 0 }}>4.9</p>
            </div>

          </div>

          {/* ── RIGHT ── */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: 560 }}>

            {/* Hero Image — fades into background, no shape, no border — reference style */}
            <div style={{
              position: "relative",
              width: 480, height: 540,
              flexShrink: 0,
            }}>
              <img
                src="https://i.pinimg.com/1200x/f6/a5/3a/f6a53a1bdaefc7f5321fed93f2bafcf9.jpg"
                alt="Spiritual Brand Expert"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  filter: "sepia(8%) brightness(1.02) contrast(1.01)",
                  WebkitMaskImage: `
                    linear-gradient(to right,  transparent 0%, black 18%, black 82%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%)
                  `,
                  WebkitMaskComposite: "destination-in",
                  maskImage: `
                    linear-gradient(to right,  transparent 0%, black 18%, black 82%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%)
                  `,
                  maskComposite: "intersect",
                }}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=90&auto=format&fit=crop&crop=faces";
                }}
              />
            </div>

            {/* Float Card 1 — ROI */}
            <div className="float-card-anim" style={{
              position: "absolute", top: 24, left: -32, minWidth: 158,
              background: C.ivory, borderRadius: 16, padding: "12px 16px",
              display: "flex", alignItems: "center", gap: 10,
              boxShadow: `0 8px 32px rgba(201,150,58,0.2)`,
              border: `1px solid ${C.goldLight}`,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 12,
                background: C.goldPale, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 18, flexShrink: 0,
              }}>📈</div>
              <div>
                <p style={{ fontSize: 17, fontWeight: 700, color: C.maroon, lineHeight: 1, margin: 0, fontFamily: "'Cinzel', serif" }}>+340%</p>
                <p style={{ fontSize: 11, color: C.textLight, marginTop: 3, margin: 0 }}>Average ROI</p>
                <div style={{ height: 4, borderRadius: 2, background: C.ivoryDark, marginTop: 8, overflow: "hidden", width: 96 }}>
                  <div style={{ height: "100%", width: "85%", borderRadius: 2, background: `linear-gradient(90deg, ${C.saffron}, ${C.gold})` }} />
                </div>
              </div>
            </div>

            {/* Float Card 2 — Clients */}
            <div style={{
              position: "absolute", bottom: 90, left: -40, minWidth: 160,
              background: C.ivory, borderRadius: 16, padding: "12px 16px",
              display: "flex", alignItems: "center", gap: 10,
              boxShadow: `0 8px 32px rgba(201,150,58,0.18)`,
              border: `1px solid ${C.goldLight}`,
            }}>
              <div style={{ display: "flex" }}>
                {[["🙏", "#FDF3DC", 0], ["🪷", "#FDE8E8", -9], ["✨", "#F5EDD8", -9]].map(([emoji, bg, ml], i) => (
                  <div key={i} style={{
                    width: 30, height: 30, borderRadius: "50%", background: bg,
                    border: `2px solid ${C.goldLight}`, display: "flex",
                    alignItems: "center", justifyContent: "center", fontSize: 13, marginLeft: ml,
                  }}>{emoji}</div>
                ))}
              </div>
              <div>
                <p style={{ fontSize: 17, fontWeight: 700, color: C.maroon, lineHeight: 1, margin: 0, fontFamily: "'Cinzel', serif" }}>2.4K+</p>
                <p style={{ fontSize: 11, color: C.textLight, marginTop: 3, margin: 0 }}>Happy Clients</p>
              </div>
            </div>

            {/* Float Card 3 — Success */}
            <div style={{
              position: "absolute", bottom: 60, right: -36, minWidth: 155,
              background: C.ivory, borderRadius: 16, padding: "12px 16px",
              display: "flex", alignItems: "center", gap: 10,
              boxShadow: `0 8px 32px rgba(201,150,58,0.18)`,
              border: `1px solid ${C.goldLight}`,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 12,
                background: "#FDE8F0", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 18, flexShrink: 0,
              }}>🪷</div>
              <div>
                <p style={{ fontSize: 17, fontWeight: 700, color: "#B84040", lineHeight: 1, margin: 0, fontFamily: "'Cinzel', serif" }}>98.2%</p>
                <p style={{ fontSize: 11, color: C.textLight, marginTop: 3, margin: 0 }}>Campaign Success</p>
                <div style={{ height: 4, borderRadius: 2, background: C.ivoryDark, marginTop: 8, overflow: "hidden", width: 96 }}>
                  <div style={{ height: "100%", width: "98%", borderRadius: 2, background: `linear-gradient(90deg, ${C.maroonLight}, #E87A7A)` }} />
                </div>
              </div>
            </div>

            {/* Float Card 4 — Live */}
            <div style={{
              position: "absolute", top: 36, right: -28,
              background: C.ivory, borderRadius: 16, padding: "10px 14px",
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: `0 8px 32px rgba(201,150,58,0.18)`,
              border: `1px solid ${C.goldLight}`,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: C.saffron, display: "inline-block",
                boxShadow: `0 0 8px ${C.saffron}`, flexShrink: 0,
              }} />
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: C.textDark, margin: 0, fontFamily: "'Cinzel', serif" }}>Live Dashboard</p>
                <p style={{ fontSize: 10, color: C.textLight, marginTop: 2, margin: 0 }}>Tracking 12 campaigns</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── MARQUEE ── */}
       <div className="relative w-full bg-gray-50 border-t border-b border-gray-200 overflow-hidden py-5 p-10">
    <style>
      {`
        .marquee {
          display: flex;
          animation: scrollMarquee 22s linear infinite;
        }
        @keyframes scrollMarquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
      `}
    </style>
    <div className="flex items-center opacity-30 text-4xl font-semibold whitespace-nowrap text-gray-400 select-none">
      <div className="marquee min-w-full flex">
        {Array(2).fill(0).map((_, repeatIdx) => (
          <span key={repeatIdx} className="flex items-center">
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="mx-6">
                {item}
                {idx < marqueeItems.length - 1 ? (
                  <span className="mx-4 text-2xl align-middle">✦</span>
                ) : null}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  </div>

      </div>
      <WhiteServicesUI/>
            <ProductVideoCarousel/>
    <CarStudio/>
    <CaseStudySection/>
    <HowWeWork/>
        <PartnershipsSection/>
        <SpiritualHero/>
          <Footer/>

    </>
  );
}