import { Link } from "react-router-dom";

const quickLinks = [
  { icon: "🕉️", title: "Dealerships",  sub: "AI-powered visual perfection" },
  { icon: "🪷", title: "Marketplaces", sub: "Consistent pro-grade listings" },
  { icon: "🪔", title: "Partners",     sub: "Scale together with AI" },
];

const features = [
  ". Social Media Marketing",
  "Search Engine Optimization ",
  "Paid Ads (Advertising)",
  "Content Creation",
  "Graphics banana ",
  "Email Marketing",
  "Website Management",
  "Digital Marketing Jobs",

];

const resources = ["Blogs", "How it works",  "FAQ's"];
const legal     = ["Terms and Conditions", "Privacy Policy", "Data Protection"];

/* ── tiny Om divider ── */
const OmDivider = () => (
  <div className="flex items-center gap-2 mb-5">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E8C878]/60" />
    <span className="text-[#B8860B] text-[10px] tracking-[0.3em] font-['Cinzel',serif]">✦</span>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E8C878]/60" />
  </div>
);

/* ── section heading ── */
const FooterHeading = ({ children }) => (
  <h3 className="text-2xl font-black text-[#E2C87A]/40 mb-1
    [font-family:'Cinzel',serif] tracking-wide leading-tight">
    {children}
  </h3>
);

/* ── link item ── */
const FooterLink = ({ children }) => (
  <li>
    <Link className="flex items-center gap-2 text-[#7A5C2E] text-[13px]
      [font-family:'Cormorant_Garamond',serif] font-medium
      hover:text-[#B8860B] transition-colors duration-200 group">
      <span className="w-1 h-1 rounded-full bg-[#E8C878]/50 group-hover:bg-[#B8860B]
        transition-colors duration-200 flex-shrink-0" />
      {children}
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#FDFAF3] border-t border-[#E8C878]/50 overflow-hidden">

      {/* Top gold shimmer */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E8C878] to-transparent" />

      {/* Dot pattern bg */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4A85A 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Mandala top-right */}
      <div className="absolute -top-12 -right-12 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 120 120" className="w-52 h-52 animate-[spin_90s_linear_infinite]">
          {[0,30,60,90,120,150].map((d, i) => (
            <g key={i} transform={`rotate(${d} 60 60)`}>
              <ellipse cx="60" cy="14" rx="5" ry="13" fill="#B8860B" />
              <ellipse cx="60" cy="106" rx="5" ry="13" fill="#B8860B" />
            </g>
          ))}
          <circle cx="60" cy="60" r="16" fill="none" stroke="#B8860B" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="6" fill="#B8860B" />
        </svg>
      </div>

      {/* Mandala bottom-left */}
      <div className="absolute -bottom-10 -left-10 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-40 h-40 animate-[spin_120s_linear_infinite_reverse]">
          {[0,45,90,135].map((d, i) => (
            <g key={i} transform={`rotate(${d} 50 50)`}>
              <ellipse cx="50" cy="10" rx="4" ry="11" fill="#C8780A" />
            </g>
          ))}
          <circle cx="50" cy="50" r="12" fill="none" stroke="#C8780A" strokeWidth="1" />
        </svg>
      </div>

      {/* Warm glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-40
        bg-[#FFE090]/10 blur-[80px] rounded-full pointer-events-none" />

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 py-14
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ── COL 1: Quick Links ── */}
        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <OmDivider />

          <div className="flex flex-col gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                className="flex items-center gap-3 bg-[#FFFBF0] border border-[#E8C878]/70
                  rounded-xl p-3.5 group
                  hover:border-[#B8860B] hover:-translate-y-0.5
                  hover:shadow-[0_6px_20px_rgba(184,134,11,0.15)]
                  transition-all duration-200 cursor-pointer"
              >
                {/* Icon box */}
                <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center
                  text-xl bg-gradient-to-br from-[#C8780A] to-[#B8860B]
                  shadow-[0_3px_10px_rgba(200,120,10,0.25)]
                  group-hover:shadow-[0_5px_16px_rgba(200,120,10,0.4)]
                  transition-shadow duration-200">
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[13px] text-[#1A1008]
                    [font-family:'Cinzel',serif] tracking-wide leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-[#9E7840] mt-0.5 italic
                    [font-family:'Cormorant_Garamond',serif]">
                    {item.sub}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-[#E8C878] text-xs group-hover:text-[#B8860B]
                  transition-colors duration-200 flex-shrink-0">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── COL 2: Features ── */}
        <div>
          <FooterHeading>Features</FooterHeading>
          <OmDivider />

          <ul className="space-y-2.5">
            {features.map((f) => (
              <FooterLink key={f}>{f}</FooterLink>
            ))}
          </ul>
        </div>

        {/* ── COL 3: Resources + Legal ── */}
        <div className="flex flex-col gap-8">
          <div>
            <FooterHeading>Resources</FooterHeading>
            <OmDivider />
            <ul className="space-y-2.5">
              {resources.map((r) => (
                <FooterLink key={r}>{r}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Legal</FooterHeading>
            <OmDivider />
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <FooterLink key={l}>{l}</FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* ── COL 4: CTA + Platform ── */}
        <div className="flex flex-col gap-6">

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full border-2 border-[#B8860B] bg-transparent
              text-[#B8860B] font-bold text-sm py-3 rounded-xl
              [font-family:'Cinzel',serif] tracking-wider
              hover:bg-[#FBF3DC] hover:shadow-[0_4px_16px_rgba(184,134,11,0.2)]
              hover:-translate-y-0.5 transition-all duration-200">
              ✦ Book Demo
            </button>

            <button className="w-full bg-gradient-to-r from-[#C8780A] to-[#B8860B]
              text-[#FFF8E8] font-bold text-sm py-3 rounded-xl
              [font-family:'Cinzel',serif] tracking-wider
              hover:shadow-[0_8px_24px_rgba(200,120,10,0.45)]
              hover:-translate-y-0.5 transition-all duration-200">
              🪷 Sign Up
            </button>
          </div>

          {/* Gold divider */}
          <div className="h-px bg-gradient-to-r from-[#E8C878]/60 to-transparent" />

          {/* Platform */}
          <div>
            <FooterHeading>Platform</FooterHeading>
            <OmDivider />

            <Link className="flex items-center gap-2 text-[#7A5C2E] text-[13px]
              [font-family:'Cormorant_Garamond',serif] font-medium mb-4
              hover:text-[#B8860B] transition-colors duration-200 group">
              <span className="w-1 h-1 rounded-full bg-[#E8C878]/50 group-hover:bg-[#B8860B]
                transition-colors duration-200" />
              Dashboard Login
            </Link>

            {/* Store badges */}
            <div className="flex flex-col gap-2.5">

              {/* Google Play */}
              <a href="#" className="flex items-center gap-3 bg-[#FFFBF0]
                border border-[#E8C878]/70 rounded-xl px-3 py-2.5
                hover:border-[#B8860B] hover:-translate-y-0.5
                hover:shadow-[0_4px_16px_rgba(184,134,11,0.15)]
                transition-all duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C8780A] to-[#B8860B]
                  flex items-center justify-center text-base flex-shrink-0">
                  ▶
                </div>
                <div>
                  <p className="text-[9px] text-[#9E7840] uppercase tracking-[0.15em]
                    [font-family:'Cinzel',serif]">
                    Get it on
                  </p>
                  <p className="text-[13px] font-bold text-[#1A1008]
                    [font-family:'Cinzel',serif] leading-tight">
                  Instragam
                  </p>
                </div>
              </a>

              {/* App Store */}
              <a href="#" className="flex items-center gap-3 bg-[#FFFBF0]
                border border-[#E8C878]/70 rounded-xl px-3 py-2.5
                hover:border-[#B8860B] hover:-translate-y-0.5
                hover:shadow-[0_4px_16px_rgba(184,134,11,0.15)]
                transition-all duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1A1008] to-[#3A2510]
                  flex items-center justify-center text-base flex-shrink-0 text-[#FFF8E8]">
                  
                </div>
                <div>
                  <p className="text-[9px] text-[#9E7840] uppercase tracking-[0.15em]
                    [font-family:'Cinzel',serif]">
                    Download on the
                  </p>
                  <p className="text-[13px] font-bold text-[#1A1008]
                    [font-family:'Cinzel',serif] leading-tight">
                    App Store
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-10 border-t border-[#E8C878]/40">
        <div className="h-px bg-gradient-to-r from-transparent via-[#E8C878]/50 to-transparent" />

        <div className="max-w-[1300px] mx-auto px-6 py-5
          flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-[15px] text-[#9E7840] italic
            [font-family:'Cormorant_Garamond',serif] tracking-wide">
            © 2025   Elevion media Pvt. Crafted with 🪷 &amp; devotion.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[#E8C878] text-[9px]">✦</span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#7B1D1D] uppercase
              [font-family:'Cinzel',serif]">
             जय श्री राम
            </span>
            <span className="text-[#E8C878] text-[9px]">✦</span>
          </div>

        </div>
      </div>

    </footer>
  );
}