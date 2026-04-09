export default function HowWeWork() {
  const steps = [
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
          <rect x="8" y="6" width="18" height="22" rx="2" stroke="#b8860b" strokeWidth="1.5"/>
          <line x1="11" y1="12" x2="23" y2="12" stroke="#b8860b" strokeWidth="1.2"/>
          <line x1="11" y1="16" x2="23" y2="16" stroke="#b8860b" strokeWidth="1.2"/>
          <line x1="11" y1="20" x2="19" y2="20" stroke="#b8860b" strokeWidth="1.2"/>
          <circle cx="28" cy="27" r="7" stroke="#b8860b" strokeWidth="1.5"/>
          <line x1="28" y1="24" x2="28" y2="30" stroke="#b8860b" strokeWidth="1.2"/>
          <line x1="25" y1="27" x2="31" y2="27" stroke="#b8860b" strokeWidth="1.2"/>
        </svg>
      ),
      title: "Strategy Call",
      desc: "We understand your vision & goals",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
          <path d="M20 8 L28 14 L28 26 L20 32 L12 26 L12 14 Z" stroke="#b8860b" strokeWidth="1.5"/>
          <circle cx="20" cy="20" r="5" stroke="#b8860b" strokeWidth="1.2"/>
          <line x1="20" y1="8" x2="20" y2="15" stroke="#b8860b" strokeWidth="1"/>
          <line x1="20" y1="25" x2="20" y2="32" stroke="#b8860b" strokeWidth="1"/>
          <line x1="12" y1="14" x2="17" y2="17" stroke="#b8860b" strokeWidth="1"/>
          <line x1="23" y1="23" x2="28" y2="26" stroke="#b8860b" strokeWidth="1"/>
          <line x1="28" y1="14" x2="23" y2="17" stroke="#b8860b" strokeWidth="1"/>
          <line x1="17" y1="23" x2="12" y2="26" stroke="#b8860b" strokeWidth="1"/>
        </svg>
      ),
      title: "Custom Plan",
      desc: "We build a tailored growth strategy",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
          <circle cx="20" cy="20" r="11" stroke="#b8860b" strokeWidth="1.5"/>
          <path d="M14 20 L18 24 L26 16" stroke="#b8860b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="6" stroke="#b8860b" strokeWidth="0.6" strokeDasharray="2 2"/>
        </svg>
      ),
      title: "Execution",
      desc: "We create, optimize & manage everything",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
          <path d="M10 30 Q15 10 20 18 Q25 26 30 8" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round"/>
          <polyline points="26,8 30,8 30,12" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="34" r="4" stroke="#b8860b" strokeWidth="1.2"/>
          <line x1="17" y1="34" x2="23" y2="34" stroke="#b8860b" strokeWidth="1"/>
          <line x1="20" y1="31" x2="20" y2="37" stroke="#b8860b" strokeWidth="1"/>
        </svg>
      ),
      title: "Scale & Grow",
      desc: "You get results, we scale further",
    },
  ];

  function SparkLine({ color, up }) {
    const pts = up
      ? "0,38 20,28 40,20 60,13 80,7 100,2"
      : "0,4 20,12 40,10 60,20 80,28 100,36";
    const id = "sp" + (up ? "u" : "d");
    return (
      <svg viewBox="0 0 100 42" className="w-full h-9" preserveAspectRatio="none">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.2"/>
            <stop offset="100%" stopColor={color} stopOpacity="0"/>
          </linearGradient>
        </defs>
        <polygon points={"0,42 " + pts + " 100,42"} fill={"url(#" + id + ")"}/>
        <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    );
  }

  function InsightMock({ visits, delta, positive, label }) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-3 w-32">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[9px] text-gray-400 font-medium">Insights</span>
            <span className="text-[9px] text-gray-300">⏱</span>
          </div>
          <div className="flex items-baseline gap-1 mb-0.5">
            <span className="text-sm font-bold text-gray-800">{visits}</span>
            <span className={"text-[9px] font-semibold " + (positive ? "text-green-500" : "text-red-400")}>{delta}</span>
          </div>
          <div className="text-[8px] text-gray-400 mb-1.5">profile visits</div>
          <SparkLine color={positive ? "#22c55e" : "#f87171"} up={positive}/>
          <div className={"text-[8px] font-semibold mt-1 " + (positive ? "text-green-500" : "text-red-400")}>
            {delta}
          </div>
        </div>
        <span className="text-[9px] text-amber-700 font-medium tracking-wide uppercase">{label}</span>
      </div>
    );
  }

  function YouTubeMock({ subs, label }) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-3 w-36">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-red-500 text-sm">▶</span>
            <span className="text-[10px] font-semibold text-gray-700">YouTube</span>
          </div>
          <div className="text-[11px] font-bold text-gray-800 mb-0.5">{subs}</div>
          <div className="text-[9px] text-gray-400 mb-1.5">Subscribers</div>
          <SparkLine color="#22c55e" up={true}/>
        </div>
        <span className="text-[9px] text-amber-700 font-medium tracking-wide uppercase">{label}</span>
      </div>
    );
  }

  return (
    <div className="min-h-90 bg-white" style={{ fontFamily: "sans-serif" }}>

      <section
        id="process"
        className="relative overflow-hidden py-20 px-6 bg-white"
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <div className="flex justify-center mb-5">
            <span className="text-[10px] tracking-[0.28em] uppercase px-5 py-1.5 rounded-full border border-amber-300 text-amber-600 bg-amber-50">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900" style={{ fontFamily: "Georgia,serif" }}>
            How We Work
          </h2>

          <p className="text-[13px] mb-14 text-gray-500 tracking-wide">
            Simple, Transparent & Result-Driven
          </p>

          {/* Steps — mobile: vertical stack, desktop: horizontal row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto">

                {/* Step card */}
                <div className="flex flex-col items-center text-center w-full md:w-36 lg:w-40 px-2 py-2 md:py-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-amber-50 border border-amber-200 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="text-[13px] font-semibold mb-1.5 text-gray-900" style={{ fontFamily: "Georgia,serif" }}>
                    {step.title}
                  </div>
                  <div className="text-[11px] leading-relaxed text-gray-500">
                    {step.desc}
                  </div>
                </div>

                {/* Arrow — horizontal on desktop, vertical on mobile */}
                {i < steps.length - 1 && (
                  <>
                    {/* Desktop: right arrow */}
                    <div className="hidden md:block mx-1 lg:mx-2 mb-10 opacity-40">
                      <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
                        <line x1="0" y1="7" x2="23" y2="7" stroke="#d4a84b" strokeWidth="1.2"/>
                        <polyline points="18,2 24,7 18,12" stroke="#d4a84b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Mobile: down arrow */}
                    <div className="block md:hidden my-2 opacity-40">
                      <svg width="14" height="30" viewBox="0 0 14 30" fill="none">
                        <line x1="7" y1="0" x2="7" y2="23" stroke="#d4a84b" strokeWidth="1.2"/>
                        <polyline points="2,18 7,24 12,18" stroke="#d4a84b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}