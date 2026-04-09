import { useState, useRef, useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Tulsi Green Tea Classic",
    price: "180",
    originalPrice: "239",
    tag: "BESTSELLER",
    description: "Support your immunity with nature's finest herbs",
    longDesc: "Experience the perfect blend of Tulsi and premium green tea. Rich in antioxidants, this certified organic tea supports your immune system, reduces stress, and promotes overall well-being. Made with whole herb Tulsi leaves for maximum benefit.",
    youtubeId: "dTu5dTEzVM4?si=eSSp8gGoZ3GIkN2d",
    thumb: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
  },
  {
    id: 2,
    title: "Gokshura Capsules",
    price: "228",
    originalPrice: "811",
    tag: "72% OFF",
    description: "Support your vitality with nature's purity",
    longDesc: "Gokshura (Tribulus terrestris) is an Ayurvedic herb known for supporting vitality and strength. Our certified organic capsules are made from whole herb extract for maximum potency and absorption.",
    youtubeId: "XNnHziCE-5Q?si=JKhJWb3VBS34kRFj",
    thumb: "https://img.youtube.com/vi/inpok4MKVLM/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Triphala Powder",
    price: "608",
    originalPrice: "780",
    tag: "SALE",
    description: "Purify your blood, rejuvenate your body",
    longDesc: "Triphala is one of Ayurveda's most revered formulas — a combination of three fruits: Amalaki, Bibhitaki, and Haritaki. Supports digestion, detoxification, and overall health.",
    youtubeId: "SEfs5TJZ6Nk",
    thumb: "https://img.youtube.com/vi/SEfs5TJZ6Nk/hqdefault.jpg",
  },
  {
    id: 4,
    title: "Psyllium Whole Husk",
    price: "208",
    originalPrice: "260",
    tag: "NEW",
    description: "For gut health and daily nourishment",
    longDesc: "Discover a natural source of dietary fiber with Organic Psyllium Whole Husk Isabgol. This organic supplement is a gentle addition to a balanced diet, helping to maintain regularity and support overall digestive function. Ideal for daily use.",
    youtubeId: "ZToicYcHIOU",
    thumb: "https://img.youtube.com/vi/ZToicYcHIOU/hqdefault.jpg",
  },
  {
    id: 5,
    title: "Arjuna Capsules",
    price: "220",
    originalPrice: "394",
    tag: "44% OFF",
    description: "Ancient wisdom for your heart's health",
    longDesc: "Arjuna (Terminalia arjuna) has been used in Ayurveda for centuries to support cardiovascular health. Our whole herb capsules provide natural support for a healthy heart and normal blood pressure.",
    youtubeId: "1ZYbU82GVz4",
    thumb: "https://img.youtube.com/vi/1ZYbU82GVz4/hqdefault.jpg",
  },
  {
    id: 6,
    title: "Ashwagandha Capsules",
    price: "159",
    originalPrice: "224",
    tag: "TOP RATED",
    description: "Nature has the calm your mind seeks",
    longDesc: "Ashwagandha is Ayurveda's premier adaptogen, known to help the body manage stress, support energy levels, and promote mental clarity. Our KSM-66 certified extract is the world's most studied ashwagandha root extract.",
    youtubeId: "qYcpQNlxHDQ",
    thumb: "https://img.youtube.com/vi/qYcpQNlxHDQ/hqdefault.jpg",
  },
  {
    id: 7,
    title: "Ashwagandha Capsules",
    price: "159",
    originalPrice: "224",
    tag: "TOP RATED",
    description: "Nature has the calm your mind seeks",
    longDesc: "Ashwagandha is Ayurveda's premier adaptogen, known to help the body manage stress, support energy levels, and promote mental clarity. Our KSM-66 certified extract is the world's most studied ashwagandha root extract.",
    youtubeId: "qYcpQNlxHDQ",
    thumb: "https://img.youtube.com/vi/qYcpQNlxHDQ/hqdefault.jpg",
  },
];

/* ─── SPIRITUAL THEME TOKENS ─── */
const T = {
  bg:          "#FDFAF3",
  bgDeep:      "#F5EDD8",
  bgCard:      "#FFFDF7",
  gold:        "#B8860B",
  goldLight:   "#E8C878",
  goldPale:    "#FBF3DC",
  saffron:     "#C8780A",
  maroon:      "#7B1D1D",
  maroonLight: "#A83232",
  ivory:       "#FFFBF0",
  textDark:    "#1A1008",
  textMid:     "#5C4020",
  textLight:   "#9E7840",
  border:      "#E8D4A0",
  green:       "#2d6a3f",
};

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

  @keyframes divaFloat {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-6px); }
  }
  @keyframes goldPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(184,134,11,0.0); }
    50%      { box-shadow: 0 0 0 6px rgba(184,134,11,0.18); }
  }
  @keyframes mandala {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes fadeSlideUp {
    from { opacity:0; transform: translateY(16px); }
    to   { opacity:1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { left: -100%; }
    100% { left: 160%; }
  }

  .spiritual-card-active {
    box-shadow: 0 0 0 2.5px #B8860B, 0 18px 44px rgba(184,134,11,0.22) !important;
  }
  .spiritual-btn-primary {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #C8780A, #B8860B);
    color: #fff; border: none; cursor: pointer; font-family: 'Cinzel', serif;
    font-weight: 700; border-radius: 999px;
    transition: transform 0.18s, box-shadow 0.18s;
  }
  .spiritual-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(200,120,10,0.45);
  }
  .spiritual-btn-primary::after {
    content: '';
    position: absolute; top:0; left:-100%; width:60%; height:100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.28), transparent);
    transition: left 0.4s;
  }
  .spiritual-btn-primary:hover::after { left: 160%; }

  .spiritual-btn-ghost {
    background: ${T.ivory}; border: 1.5px solid ${T.border};
    color: ${T.textMid}; cursor: pointer; font-family: 'Cinzel', serif;
    font-weight: 600; border-radius: 999px;
    transition: all 0.18s;
  }
  .spiritual-btn-ghost:hover {
    border-color: ${T.gold}; color: ${T.gold};
    background: ${T.goldPale};
  }

  .card-float { animation: divaFloat 4.5s ease-in-out infinite; }

  .dot-pattern {
    background-image: radial-gradient(circle, #D4A85A 1.2px, transparent 1.2px);
    background-size: 28px 28px;
  }
`;

/* ── MANDALA SVG (decorative) ── */
function Mandala({ size = 120, opacity = 0.08, speed = "60s", reverse = false }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 120 120"
      style={{
        animation: `mandala ${speed} linear infinite ${reverse ? "reverse" : ""}`,
        opacity,
        pointerEvents: "none",
      }}
    >
      {[0,30,60,90,120,150].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 60 60)`}>
          <ellipse cx="60" cy="18" rx="7" ry="18" fill="#B8860B" />
          <ellipse cx="60" cy="102" rx="7" ry="18" fill="#B8860B" />
        </g>
      ))}
      {[0,45,90,135].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 60 60)`}>
          <ellipse cx="60" cy="10" rx="4" ry="10" fill="#C8780A" opacity="0.6" />
        </g>
      ))}
      <circle cx="60" cy="60" r="16" fill="none" stroke="#B8860B" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="6" fill="#B8860B" />
    </svg>
  );
}

/* ── TAG BADGE ── */
function SpiritualTag({ label }) {
  const isDiscount = label.includes("%") || label === "SALE";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      background: isDiscount
        ? "linear-gradient(135deg, #C8780A, #B8860B)"
        : `linear-gradient(135deg, ${T.maroon}, ${T.maroonLight})`,
      color: "#FFF8E8",
      borderRadius: 5, fontWeight: 900, fontFamily: "'Cinzel', serif",
      fontSize: "clamp(5.5px,.78vw,8.5px)",
      padding: "2px 7px", letterSpacing: "0.06em",
      boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
    }}>
      {isDiscount ? "✦" : "🪷"} {label}
    </div>
  );
}

/* ── POPUP MODAL ── */
function ProductModal({ product, onClose }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(26,10,0,0.62)",
        backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", width: "100%", maxWidth: "880px",
          maxHeight: "90vh",
          background: T.ivory,
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
          boxShadow: "0 40px 100px rgba(26,10,0,0.35)",
          border: `1.5px solid ${T.border}`,
          animation: "fadeSlideUp 0.32s ease",
        }}
      >
        {/* ✕ Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "14px", right: "14px", zIndex: 20,
            width: "34px", height: "34px", borderRadius: "50%",
            background: T.maroon, border: "none", color: "#FFF8E8",
            fontSize: "15px", fontWeight: 900, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Cinzel', serif",
            boxShadow: "0 4px 14px rgba(123,29,29,0.4)",
          }}
        >✕</button>

        {/* ── LEFT: warm temple bg + video ── */}
        <div style={{
          width: "52%", flexShrink: 0,
          background: `linear-gradient(155deg, ${T.bgDeep} 0%, #E8D4A0 60%, #DCC080 100%)`,
          display: "flex", flexDirection: "column",
          minHeight: "500px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Mandala decorative top-right */}
          <div style={{ position: "absolute", top: -30, right: -30, pointerEvents: "none" }}>
            <Mandala size={130} opacity={0.12} speed="70s" />
          </div>

          {/* Top logos row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 18px 6px", position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "46px", height: "46px", borderRadius: "50%",
                background: T.ivory,
                boxShadow: `0 2px 10px rgba(184,134,11,0.22)`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px",
                border: `1.5px solid ${T.border}`,
              }}>🪷</div>
              <div>
                <div style={{ fontWeight: 900, fontSize: "9.5px", letterSpacing: "0.15em", color: T.maroon, lineHeight: 1.25, fontFamily: "'Cinzel', serif" }}>Elevion<br />Media</div>
                <div style={{ fontSize: "7.5px", color: T.textLight, letterSpacing: "0.05em", fontFamily: "'Cormorant Garamond', serif" }}>A TATA Product</div>
              </div>
            </div>
            {/* Certified badge */}
            <div style={{
              width: "50px", height: "50px", borderRadius: "50%",
              border: `2px solid ${T.gold}`,
              background: `rgba(253,243,220,0.7)`,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              fontSize: "7px", fontWeight: 700, color: T.maroon, textAlign: "center", lineHeight: 1.5,
              fontFamily: "'Cinzel', serif",
            }}>
              Made<br />with<br />🌿
            </div>
          </div>

          {/* Tagline */}
          <div style={{
            textAlign: "center", fontWeight: 600, fontSize: "14px",
            color: T.maroon, padding: "2px 20px 10px",
            fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.04em",
          }}>
            ✦ The power of whole herbs ✦
          </div>

          {/* Gold divider */}
          <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${T.goldLight}, transparent)`, margin: "0 20px 10px" }} />

          {/* YouTube iframe */}
          <div style={{ flex: 1, position: "relative", minHeight: "280px" }}>
            <iframe
              src={`https://www.youtube.com/embed/${product.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={product.title}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Bottom label */}
          <div style={{ padding: "8px 14px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "8px", color: T.textLight, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Cinzel', serif" }}>Creative Visualisation</span>
            <span style={{ fontSize: "12px" }}>🕉️</span>
          </div>
        </div>

        {/* ── RIGHT: product info ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflowY: "auto", background: T.ivory }}>

          {/* Product image area */}
          <div style={{
            background: T.bgDeep,
            padding: "28px 20px",
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: "210px", borderBottom: `1px solid ${T.border}`,
            position: "relative", overflow: "hidden",
          }}>
            {/* Mandala bg */}
            <div style={{ position: "absolute", bottom: -20, left: -20, pointerEvents: "none" }}>
              <Mandala size={100} opacity={0.1} speed="90s" reverse />
            </div>

            <div style={{ position: "absolute", top: "12px", right: "14px", color: T.goldLight, fontSize: "16px", letterSpacing: "2px", cursor: "pointer" }}>✦ ✦ ✦</div>

            {/* Product visual */}
            <div style={{
              width: "130px", height: "160px", borderRadius: "16px",
              background: `linear-gradient(135deg, ${T.goldPale} 0%, ${T.bgDeep} 100%)`,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px",
              boxShadow: `0 10px 30px rgba(184,134,11,0.2)`,
              border: `1.5px solid ${T.border}`,
              animation: "divaFloat 4s ease-in-out infinite",
              position: "relative", zIndex: 2,
            }}>
              <span style={{ fontSize: "46px" }}>🌿</span>
              <div style={{
                fontSize: "8.5px", fontWeight: 900, color: T.maroon,
                textAlign: "center", letterSpacing: "0.08em", lineHeight: 1.4,
                fontFamily: "'Cinzel', serif",
              }}>
                Elevion<br />Media
              </div>
            </div>
          </div>

          {/* Info */}
          <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>

            {/* Slim gold bar */}
            <div style={{ width: "40px", height: "3px", background: `linear-gradient(90deg, ${T.saffron}, ${T.gold})`, borderRadius: "2px" }} />

            {/* Title */}
            <div style={{
              fontWeight: 700, fontSize: "16.5px", color: T.textDark,
              lineHeight: 1.35, fontFamily: "'Cinzel', serif",
            }}>
              {product.title}
            </div>

            {/* Price */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontWeight: 900, fontSize: "18px", color: T.maroon, fontFamily: "'Cinzel', serif" }}>{product.price}</span>
              <span style={{ fontWeight: 500, fontSize: "14px", color: T.textLight, textDecoration: "line-through", fontFamily: "'Cormorant Garamond', serif" }}>{product.originalPrice}</span>
            </div>

            {/* Gold divider */}
            <div style={{ height: 1, background: `linear-gradient(90deg, ${T.border}, transparent)` }} />

            {/* Description */}
            <div>
              <div style={{ fontWeight: 700, fontSize: "12.5px", color: T.textMid, marginBottom: "5px", fontFamily: "'Cinzel', serif", letterSpacing: "0.04em" }}>Description</div>
              <div style={{ fontSize: "13px", color: T.textMid, lineHeight: 1.75, fontFamily: "'Cormorant Garamond', serif" }}>
                {expanded ? product.longDesc : product.longDesc.slice(0, 160) + "..."}
              </div>
              <button
                onClick={() => setExpanded(x => !x)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: T.gold, fontWeight: 700, fontSize: "12.5px",
                  padding: "4px 0 0", fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.03em",
                }}
              >
                {expanded ? "↑ Show less" : "Read more →"}
              </button>
            </div>

            <div style={{ flex: 1 }} />

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button className="spiritual-btn-ghost" style={{ flex: 1, padding: "13px 0", fontSize: "12px" }}>
                More info
              </button>
              <button className="spiritual-btn-primary" style={{ flex: 1, padding: "13px 0", fontSize: "12px" }}>
                Add to cart
              </button>
              <button className="spiritual-btn-ghost" style={{
                width: "46px", height: "46px", borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                padding: 0,
              }}>
                <svg width="18" height="18" fill="none" stroke={T.textMid} strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── VIDEO CARD ── */
function VideoCard({ product, isActive, onCardClick, onPlayClick }) {
  return (
    <div
      style={{ width: "clamp(150px,22vw,255px)", flexShrink: 0, cursor: "pointer", position: "relative" }}
      onClick={onCardClick}
    >
      <div style={{ paddingBottom: "177.78%", position: "relative", width: "100%" }}>
        <div
          className={isActive ? "spiritual-card-active" : ""}
          style={{
            position: "absolute", inset: 0, borderRadius: "18px", overflow: "hidden",
            boxShadow: "0 4px 20px rgba(26,10,0,0.14)",
            transition: "box-shadow 0.3s",
            border: isActive ? `1.5px solid ${T.gold}` : "1.5px solid transparent",
          }}
        >
          <img src={product.thumb} alt={product.title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              filter: "sepia(10%) brightness(0.96)",
            }} />

          {/* Warm spiritual overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(26,10,0,0.22) 0%, rgba(26,10,0,0) 38%, rgba(26,10,0,0.82) 100%)"
          }} />

          {/* Top golden shimmer line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "3px",
            background: `linear-gradient(90deg, transparent, ${T.gold}, transparent)`,
            opacity: isActive ? 1 : 0.5,
          }} />

          {/* Logo */}
          <div style={{ position: "absolute", top: "5%", left: "5%", display: "flex", alignItems: "center", gap: "5px", zIndex: 2 }}>
            <div style={{
              width: "clamp(20px,3vw,28px)", height: "clamp(20px,3vw,28px)", borderRadius: "50%",
              background: T.ivory,
              border: `1px solid ${T.goldLight}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(9px,1.1vw,11px)",
            }}>🪷</div>
            <div style={{
              fontSize: "clamp(4.5px,0.65vw,7.5px)", fontWeight: 900, color: "#FFF8E8",
              letterSpacing: "0.1em", lineHeight: 1.3,
              textShadow: "0 1px 4px rgba(0,0,0,.8)",
              fontFamily: "'Cinzel', serif",
            }}>ORGANIC<br />INDIA</div>
          </div>

          {/* Play button */}
          <button
            style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
              width: "clamp(40px,6vw,58px)", height: "clamp(40px,6vw,58px)", borderRadius: "50%",
              background: T.ivory,
              border: `2px solid ${T.goldLight}`,
              cursor: "pointer", zIndex: 3,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 4px 20px rgba(184,134,11,0.35)`,
              animation: isActive ? "goldPulse 2.5s ease-in-out infinite" : "none",
            }}
            onClick={(e) => { e.stopPropagation(); onPlayClick(); }}
          >
            <svg fill={T.saffron} viewBox="0 0 24 24" style={{ width: "clamp(13px,2vw,20px)", height: "clamp(13px,2vw,20px)", marginLeft: "12%" }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          {/* Bottom info */}
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 2, padding: "4% 5% 5%" }}>
            <div style={{ marginBottom: "4px" }}>
              <SpiritualTag label={product.tag} />
            </div>
            <div style={{
              color: "#FFF8E8", fontWeight: 700,
              fontSize: "clamp(9px,1.3vw,13px)", lineHeight: 1.3, marginBottom: "3px",
              textShadow: "0 1px 8px rgba(0,0,0,.9)",
              overflow: "hidden", display: "-webkit-box",
              WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
              fontFamily: "'Cinzel', serif",
            }}>{product.title}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
              <span style={{ color: T.goldLight, fontWeight: 900, fontSize: "clamp(10px,1.5vw,14px)", fontFamily: "'Cinzel', serif" }}>{product.price}</span>
              <span style={{ color: "rgba(255,240,200,.45)", fontSize: "clamp(7px,1vw,10px)", textDecoration: "line-through" }}>{product.originalPrice}</span>
            </div>
            <button
              className="spiritual-btn-primary"
              style={{ width: "100%", fontSize: "clamp(7px,.9vw,10px)", padding: "5px 0" }}
              onClick={(e) => { e.stopPropagation(); onPlayClick(); }}
            >▶ Watch &amp; Shop</button>
          </div>
        </div>

        {/* Active gold glow behind card */}
        {isActive && (
          <div style={{
            position: "absolute", inset: "-6px", borderRadius: "24px", zIndex: -1,
            background: T.gold, filter: "blur(16px)", opacity: 0.2,
          }} />
        )}
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export default function ProductVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modal, setModal] = useState(null);
  const ref = useRef(null);
  const drag = useRef(false), sx = useRef(0), ss = useRef(0), tx = useRef(0);

  const slide = (d) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: d * ((ref.current.children[0]?.offsetWidth || 220) + 14), behavior: "smooth" });
  };
  const mD = (e) => { drag.current = true; sx.current = e.pageX - ref.current.offsetLeft; ss.current = ref.current.scrollLeft; };
  const mM = (e) => { if (!drag.current) return; ref.current.scrollLeft = ss.current - (e.pageX - ref.current.offsetLeft - sx.current); };
  const mU = () => { drag.current = false; };
  const tS = (e) => { tx.current = e.touches[0].clientX; };
  const tE = (e) => { const d = tx.current - e.changedTouches[0].clientX; if (Math.abs(d) > 40) slide(d > 0 ? 1 : -1); };

  const active = products[activeIndex];

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      {modal && <ProductModal product={modal} onClose={() => setModal(null)} />}

      <div style={{
        minHeight: "100vh",
        background: T.bg,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        display: "flex", flexDirection: "column",
        position: "relative", overflow: "hidden",
      }}>

        {/* Background dot pattern */}
        <div className="dot-pattern" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />

        {/* Decorative mandala top-right */}
        <div style={{ position: "absolute", top: -50, right: -50, pointerEvents: "none" }}>
          <Mandala size={220} opacity={0.07} speed="80s" />
        </div>
        {/* Decorative mandala bottom-left */}
        <div style={{ position: "absolute", bottom: -60, left: -60, pointerEvents: "none" }}>
          <Mandala size={180} opacity={0.06} speed="100s" reverse />
        </div>

        {/* Glow orbs */}
        <div style={{ position: "absolute", width: 360, height: 360, background: "#FFE090", opacity: 0.18, top: -80, right: "15%", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 260, height: 260, background: "#F5C07A", opacity: 0.12, bottom: 60, left: "10%", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

        {/* ── HEADER ── */}
        <div style={{ padding: "32px 36px 10px", position: "relative", zIndex: 2 }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <div style={{ height: "1px", flex: 1, background: `linear-gradient(90deg, transparent, ${T.goldLight})` }} />
            <span style={{
              fontSize: "10px", fontWeight: 700, letterSpacing: "0.45em",
              color: T.gold, textTransform: "uppercase",
              fontFamily: "'Cinzel', serif",
            }}>🪷 Featured Video 🪷</span>
            <div style={{ height: "1px", flex: 1, background: `linear-gradient(90deg, ${T.goldLight}, transparent)` }} />
          </div>

          {/* Heading */}
          <h1 style={{
            fontWeight: 900, fontSize: "clamp(22px,4vw,46px)",
            color: T.textDark, lineHeight: 1.1, margin: 0,
            fontFamily: "'Cinzel', serif", letterSpacing: "-0.3px",
          }}>
            Sacred Picks,{" "}
            <span style={{
              color: T.gold,
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', serif",
            }}>For You.</span>
          </h1>

          {/* Sub */}
          <p style={{ color: T.textLight, fontSize: "clamp(11px,1.1vw,14px)", marginTop: "8px", fontStyle: "italic", letterSpacing: "0.02em" }}>
            ✦ Click ▶ on any card to watch the sacred video
          </p>
        </div>

        {/* ── CAROUSEL ── */}
        <div style={{ position: "relative", flex: 1, zIndex: 2 }}>

          {/* Left arrow */}
          <button
            onClick={() => slide(-1)}
            style={{
              position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: "38px", height: "38px", borderRadius: "50%",
              background: T.ivory, border: `1.5px solid ${T.border}`,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 2px 12px rgba(184,134,11,0.18)`,
              transition: "all 0.18s",
            }}
          >
            <svg width="15" height="15" fill="none" stroke={T.textMid} strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable carousel */}
          <div
            ref={ref}
            style={{
              display: "flex", gap: "14px", overflowX: "auto",
              padding: "24px 52px", scrollbarWidth: "none", cursor: "grab",
            }}
            onMouseDown={mD} onMouseMove={mM} onMouseUp={mU} onMouseLeave={mU}
            onTouchStart={tS} onTouchEnd={tE}
          >
            {products.map((p, i) => (
              <VideoCard
                key={p.id} product={p} isActive={activeIndex === i}
                onCardClick={() => setActiveIndex(i)}
                onPlayClick={() => setModal(p)}
              />
            ))}
            <div style={{ flexShrink: 0, width: "8px" }} />
          </div>

          {/* Right arrow */}
          <button
            onClick={() => slide(1)}
            style={{
              position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: "38px", height: "38px", borderRadius: "50%",
              background: T.ivory, border: `1.5px solid ${T.border}`,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 2px 12px rgba(184,134,11,0.18)`,
            }}
          >
            <svg width="15" height="15" fill="none" stroke={T.textMid} strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── DOTS ── */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", paddingBottom: "16px", zIndex: 2 }}>
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                border: "none", cursor: "pointer", borderRadius: "999px", height: "8px",
                width: activeIndex === i ? "28px" : "8px",
                background: activeIndex === i
                  ? `linear-gradient(90deg, ${T.saffron}, ${T.gold})`
                  : T.border,
                transition: "all 0.3s", padding: 0,
              }}
            />
          ))}
        </div>

        {/* ── FOOTER BAR ── */}
        <div style={{
          borderTop: `1px solid ${T.border}`,
          background: `linear-gradient(135deg, ${T.bgDeep} 0%, ${T.ivory} 100%)`,
          padding: "14px 36px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "16px", flexWrap: "wrap",
          position: "relative", zIndex: 2,
        }}>
          {/* Bottom gold line top */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: `linear-gradient(90deg, transparent, ${T.goldLight}, transparent)`,
          }} />

          <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
            <div style={{
              width: "42px", height: "42px", borderRadius: "12px",
              background: T.goldPale,
              border: `1.5px solid ${T.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px", flexShrink: 0,
              animation: "divaFloat 4s ease-in-out infinite",
            }}>🌿</div>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontWeight: 700, fontSize: "14px", color: T.textDark,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                fontFamily: "'Cinzel', serif",
              }}>{active.title}</div>
              <div style={{
                fontSize: "12px", color: T.textLight,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                fontStyle: "italic",
              }}>{active.description}</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 900, fontSize: "20px", color: T.maroon, fontFamily: "'Cinzel', serif" }}>{active.price}</div>
              <div style={{ fontSize: "12px", color: T.textLight, textDecoration: "line-through" }}>{active.originalPrice}</div>
            </div>
            <button
              className="spiritual-btn-primary"
              onClick={() => setModal(active)}
              style={{ fontSize: "13px", padding: "11px 24px", display: "flex", alignItems: "center", gap: "8px" }}
            >
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}