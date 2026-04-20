import { useRef } from "react";

const tools = [
  {
    highlight: false,
    name: "Meta",
    logo: (
      <div className="flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#0668E1" />
          <circle cx="12" cy="12" r="4" fill="#0668E1" />
        </svg>
        <span className="text-sm font-medium text-gray-800">Meta</span>
      </div>
    ),
  },
  {
    highlight: false,
    name: "Google Search Console",
    logo: (
      <div className="flex flex-col items-center leading-tight gap-0.5">
        <div className="flex">
          {["G","o","o","g","l","e"].map((c, i) => (
            <span key={i} style={{ color: ["#4285F4","#EA4335","#FBBC05","#4285F4","#34A853","#EA4335"][i] }} className="text-sm font-bold">{c}</span>
          ))}
        </div>
        <span className="text-[11px] text-gray-400">Search Console</span>
      </div>
    ),
  },
  {
    highlight: false,
    name: "Screaming Frog",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-sm font-semibold text-gray-800">Scr</span>
        <svg width="14" height="14" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="9" fill="#5CB85C" />
          <circle cx="10" cy="7" r="3" fill="white" />
          <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="white" />
        </svg>
        <span className="text-sm font-semibold text-gray-800">mingfrog</span>
      </div>
    ),
  },
  {
    highlight: true,
    name: "SEMRUSH",
    logo: (
      <div className="flex flex-col items-center gap-1">
        <svg width="22" height="22" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="#FF6B2B" />
          <circle cx="20" cy="13" r="5" fill="white" />
          <path d="M8 34c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="white" />
        </svg>
        <span className="text-xs font-bold tracking-widest text-gray-900">SEMRUSH</span>
      </div>
    ),
  },
  {
    highlight: false,
    name: "ChatGPT",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-[#10A37F] rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">C</span>
        </div>
        <span className="text-sm font-medium text-gray-800">ChatGPT</span>
      </div>
    ),
  },
  {
    highlight: false,
    name: "Google Analytics 4",
    logo: (
      <div className="flex flex-col items-center leading-tight gap-0.5">
        <div className="flex">
          {["G","o","o","g","l","e"].map((c, i) => (
            <span key={i} style={{ color: ["#4285F4","#EA4335","#FBBC05","#4285F4","#34A853","#EA4335"][i] }} className="text-sm font-bold">{c}</span>
          ))}
        </div>
        <span className="text-[11px] text-gray-400">Analytics 4</span>
      </div>
    ),
  },
  {
    highlight: false,
    name: "ahrefs",
    logo: (
      <div className="flex items-center gap-0.5">
        <span className="text-base font-bold text-[#FF7A00]">a</span>
        <span className="text-sm font-semibold text-gray-800">hrefs</span>
      </div>
    ),
  },
  {
    highlight: false,
    name: "YouTube",
    logo: (
      <div className="flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#FF0000" />
          <polygon points="10,7 17,12 10,17" fill="white" />
        </svg>
        <span className="text-sm font-medium text-gray-800">YouTube</span>
      </div>
    ),
  },
  {
    highlight: false,
    name: "LinkedIn",
    logo: (
      <div className="flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#0077B5" />
          <path d="M6 8h2v8H6zM7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 5c0-1.1.9-2 2-2s2 .9 2 2v4h2v-4a4 4 0 0 0-8 0v4h2v-4z" fill="white" />
        </svg>
        <span className="text-sm font-medium text-gray-800">LinkedIn</span>
      </div>
    ),
  },
];

export default function ToolsWeUse() {
  const trackRef = useRef(null);

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <section className="py-16 text-center bg-white overflow-hidden">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-3 tracking-tight">
        <span className="text-[#F5A623]">TOOLS</span>{" "}
        <span className="text-[#1A2744]">WE USE</span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto mb-10">
        We use industry-leading tools to deliver the best results for SEO, PPC, and social media marketing.
        <br />
        These tools help us analyze, optimize, and scale your business efficiently.
      </p>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-3 w-max py-3"
          style={{ animation: "marquee-scroll 24s linear infinite" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center gap-1.5 px-6 py-3.5 rounded-full bg-white
                cursor-default whitespace-nowrap select-none
                transition-transform duration-200 hover:-translate-y-1
                ${tool.highlight
                  ? "border-2 border-[#F5A623]"
                  : "border border-gray-200 hover:border-gray-300"
                }`}
            >
              {tool.logo}
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe style */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}