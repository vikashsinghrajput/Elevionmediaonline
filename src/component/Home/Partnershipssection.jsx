import React from "react";

const partners = [
  {
    name: "Google AdSense",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path d="M24 4L4 40h40L24 4z" fill="#B8860B" opacity="0.15" />
        <path d="M24 10L8 38h32L24 10z" fill="#B8860B" opacity="0.3" />
        <path d="M24 18l-8 20h16L24 18z" fill="#B8860B" />
      </svg>
    ),
    label: "Google",
    sub: "AdSense",
  },
  {
    name: "Meta Business Partner",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path
          d="M6 24c0-6 4-12 10-12 3 0 5.5 1.5 8 5 2.5-3.5 5-5 8-5 6 0 10 6 10 12s-4 12-10 12c-3 0-5.5-1.5-8-5-2.5 3.5-5 5-8 5-6 0-10-6-10-12z"
          fill="none"
          stroke="#B8860B"
          strokeWidth="2.5"
        />
      </svg>
    ),
    label: "Meta",
    sub: "Business Partner",
  },
  {
    name: "PayU Money",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <text x="4" y="32" fontSize="22" fontWeight="800" fill="#B8860B" fontFamily="serif">
          Pay
        </text>
        <circle cx="38" cy="14" r="6" fill="#B8860B" opacity="0.25" />
        <circle cx="38" cy="14" r="3" fill="#C8780A" />
      </svg>
    ),
    label: "PayU",
    sub: "Money",
  },
  {
    name: "AiSensy",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect x="6" y="20" width="4" height="14" rx="2" fill="#B8860B" opacity="0.4" />
        <rect x="14" y="14" width="4" height="20" rx="2" fill="#B8860B" opacity="0.6" />
        <rect x="22" y="8" width="4" height="26" rx="2" fill="#C8780A" />
        <path d="M30 22 L44 22" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30 28 L44 28" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    label: "Ai",
    sub: "Sensy",
  },
];

function MandalaRing() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute opacity-[0.07] animate-[spin_80s_linear_infinite]"
      style={{ width: 260, height: 260 }}
    >
      {[0, 30, 60, 90, 120, 150].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 50 50)`}>
          <ellipse cx="50" cy="12" rx="5" ry="12" fill="#B8860B" />
          <ellipse cx="50" cy="88" rx="5" ry="12" fill="#B8860B" />
        </g>
      ))}
      <circle cx="50" cy="50" r="18" fill="none" stroke="#B8860B" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="6" fill="#B8860B" />
    </svg>
  );
}

export default function PartnershipsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FDFAF3] py-20 px-6">

      {/* Dot background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4A85A 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Mandala top-right */}
      <div className="absolute -top-16 -right-16 pointer-events-none flex items-center justify-center">
        <MandalaRing />
      </div>

      {/* Mandala bottom-left */}
      <div className="absolute -bottom-16 -left-16 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="opacity-[0.06]"
          style={{
            width: 200,
            height: 200,
            animation: "spin 100s linear infinite reverse",
          }}
        >
          {[0, 45, 90, 135].map((deg, i) => (
            <g key={i} transform={`rotate(${deg} 50 50)`}>
              <ellipse cx="50" cy="10" rx="4" ry="10" fill="#C8780A" />
            </g>
          ))}
          <circle cx="50" cy="50" r="14" fill="none" stroke="#C8780A" strokeWidth="1" />
        </svg>
      </div>

      {/* Warm glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#FFE090] opacity-[0.15] blur-[80px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 justify-center mb-5">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#E8C878]" />
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#B8860B] uppercase font-['Cinzel',serif]">
            🪷 Sacred Alliances 🪷
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#E8C878]" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-[clamp(20px,3.5vw,34px)] font-black text-[#1A1008] leading-tight mb-5 font-['Cinzel',serif] tracking-tight">
          Official Partnerships That Power{" "}
          <span className="italic text-[#B8860B] font-['Cormorant_Garamond',serif]">
            Our Digital Excellence
          </span>
        </h2>

        {/* Gold divider */}
        <div className="flex items-center gap-3 justify-center mb-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#E8C878]" />
          <svg viewBox="0 0 40 40" className="w-5 h-5 opacity-60">
            {[0, 45, 90, 135].map((deg, i) => (
              <g key={i} transform={`rotate(${deg} 20 20)`}>
                <ellipse cx="20" cy="5" rx="2.5" ry="6" fill="#B8860B" />
              </g>
            ))}
            <circle cx="20" cy="20" r="4" fill="#B8860B" />
          </svg>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#E8C878]" />
        </div>

        {/* Description */}
        <p className="text-center text-[#5C4020] text-[clamp(12px,1.3vw,14.5px)] leading-[1.85] max-w-3xl mx-auto mb-14 font-['Cormorant_Garamond',serif] italic">
          At Elevion Media, we work in partnership with industry-leading platforms like Google AdSense,
          Meta (Facebook &amp; Instagram), PayU Money, and AiSensy to deliver secure, scalable, and
          performance-driven digital marketing solutions. These trusted collaborations enable us to
          streamline advertising, boost campaign ROI, and offer reliable payment and analytics
          integrations for every client.
        </p>

        {/* Partner logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative flex flex-col items-center justify-center gap-3 
                         bg-[#FFFBF0] border border-[#E8C878] rounded-2xl px-6 py-8
                         transition-all duration-300 cursor-pointer
                         hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(184,134,11,0.18)]
                         hover:border-[#B8860B]"
            >
              {/* Top shimmer line */}
              <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#E8C878] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#FBF3DC] border border-[#E8C878] group-hover:bg-[#F5EDD8] transition-colors duration-300">
                {p.icon}
              </div>

              {/* Name */}
              <div className="text-center">
                <p className="font-black text-[15px] text-[#1A1008] leading-tight font-['Cinzel',serif] tracking-wide">
                  {p.label}
                </p>
                <p className="text-[11px] text-[#9E7840] mt-0.5 font-['Cormorant_Garamond',serif] italic tracking-wider">
                  {p.sub}
                </p>
              </div>

              {/* Bottom gold dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8C878] group-hover:bg-[#B8860B] transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom trust badge */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#E8C878]" />
          <div className="flex items-center gap-2 bg-[#FBF3DC] border border-[#E8C878] rounded-full px-5 py-2">
            <span className="text-sm">🕉️</span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#7B1D1D] uppercase font-['Cinzel',serif]">
              Trusted by 500+ Gurus &amp; Coaches
            </span>
            <span className="text-sm">🕉️</span>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#E8C878]" />
        </div>

      </div>
    </section>
  );
}