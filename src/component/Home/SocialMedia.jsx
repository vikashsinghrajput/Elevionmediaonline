import { useState } from "react";

/* ── tiny sparkline ── */
function SparkLine({ color = "#22c55e", up = true }) {
  const pts = up
    ? "0,40 20,35 40,28 60,18 80,10 100,4"
    : "0,8 20,16 40,12 60,22 80,30 100,38";
  return (
    <svg viewBox="0 0 100 44" className="w-full h-9" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`g${up}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polygon points={`0,44 ${pts} 100,44`} fill={`url(#g${up})`}/>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Insight mock (Instagram style) ── */
function InsightMock({ visits, delta, positive, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 w-[130px]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] text-gray-400 font-medium">Insights</span>
          <span className="text-[10px] text-gray-300">⏱</span>
        </div>
        <div className="flex items-baseline gap-1 mb-0.5">
          <span className="text-sm font-bold text-gray-900">{visits}</span>
          <span className={`text-[10px] font-semibold ${positive ? "text-green-500" : "text-red-400"}`}>{delta}</span>
        </div>
        <div className="text-[9px] text-gray-400 mb-2">profile visits</div>
        <SparkLine color={positive ? "#22c55e" : "#f87171"} up={positive}/>
        <div className={`text-[9px] font-medium mt-1 ${positive ? "text-green-500" : "text-red-400"}`}>
          {positive ? `+${delta.replace("+","")}` : delta}
        </div>
      </div>
      <span className="text-[9px] text-gray-400">{label}</span>
    </div>
  );
}

/* ── YouTube mock ── */
function YouTubeMock({ subs, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 w-[140px]">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-red-500 text-sm">▶</span>
          <span className="text-[10px] font-semibold text-gray-700">YouTube</span>
        </div>
        <div className="text-[10px] font-bold text-gray-800 mb-0.5 leading-snug">{subs}</div>
        <div className="text-[9px] text-gray-400 mb-2">Subscribers</div>
        <SparkLine color="#22c55e" up={true}/>
      </div>
      <span className="text-[9px] text-gray-400">{label}</span>
    </div>
  );
}

/* ── Reel phone mock ── */
function ReelMock({ views, emoji, bg }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden flex-1 aspect-[9/16] max-h-44 ${bg} flex items-center justify-center`}>
      <span className="text-4xl">{emoji}</span>
      <div className="absolute bottom-2 left-2 bg-black/65 text-white rounded-lg px-2 py-1 flex items-center gap-1">
        <span className="text-[9px]">▶</span>
        <span className="text-[10px] font-bold">{views}</span>
      </div>
    </div>
  );
}

export default function ElevionMedia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ed] via-white to-[#fffaf0] ">
      {/* 2-row × 3-col grid */}
         <section className="text-center px-6 pt-16 pb-14 border-b border-amber-50">
       
        <h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Elevion Media
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-10">
          Digital Growth for Gurus &amp; Spiritual Brands
        </p>
         {/* Om divider */}
     <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-amber-200"/>
          <span className="text-amber-500 text-base font-serif">ॐ</span>
          <div className="h-px w-12 bg-amber-200"/>
        </div>
        {/* mini stats */}
 
      </section>

      {/* ── SECTION LABEL ── */}
      <div id="results" className="flex items-center gap-4 px-8 py-8">
        <div className="h-px flex-1 bg-amber-100"/>
        <span className="text-[10px] text-amber-600 tracking-[0.3em] uppercase font-medium">Sacred Transformations</span>
        <div className="h-px flex-1 bg-amber-100"/>
      </div>

      {/* ── 2×3 CARD GRID ── */}
      <section className="max-w-5xl mx-auto px-5 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 hover:shadow-md hover:border-amber-200 transition-all">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-amber-500 text-xs font-serif">✦</span>
            <h3 className="text-[16px] font-bold text-gray-900" style={{ fontFamily:"Georgia,serif" }}>10K → 150K Followers</h3>
          </div>
          <p className="text-[12px] text-amber-600 mb-5 pl-4">for Spiritual Coach</p>
          <div className="flex gap-3">
            {[
              { n:"10,245", k:"10.0K", emoji:"🧑", pct:"↑ 0.5%", bg:"bg-orange-50", border:"border-orange-100" },
              { n:"150,382", k:"150K", emoji:"🧘", pct:"↑ 28%", bg:"bg-green-50", border:"border-green-100" },
            ].map((d,i) => (
              <div key={i} className={"flex-1 rounded-xl p-3 border " + d.bg + " " + d.border}>
                <div className="text-[9px] font-bold text-gray-600 mb-2">{d.n} <span className="font-normal text-gray-400">Followers</span></div>
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs shadow-sm">{d.emoji}</div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-800">{d.k}</div>
                    <div className="text-[8px] text-gray-400">followers</div>
                  </div>
                </div>
                <div className="h-px bg-gray-200 mb-1"/>
                <div className="text-[9px] text-green-600 font-semibold">{d.pct}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 hover:shadow-md hover:border-amber-200 transition-all">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-amber-500 text-xs font-serif">✦</span>
            <h3 className="text-[16px] font-bold text-gray-900" style={{ fontFamily:"Georgia,serif" }}>5x Growth in 90 Days</h3>
          </div>
          <p className="text-[12px] text-amber-600 mb-5 pl-4">Instagram Profile Visits</p>
          <div className="flex justify-center gap-4">
            <InsightMock visits="3,251" delta="-30.26" positive={false} label="Before"/>
            <InsightMock visits="15,820" delta="+312K" positive={true} label="After"/>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 hover:shadow-md hover:border-amber-200 transition-all">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-amber-500 text-xs font-serif">✦</span>
            <h3 className="text-[16px] font-bold text-gray-900" style={{ fontFamily:"Georgia,serif" }}>1M+ Views on Reels</h3>
          </div>
          <div className="flex gap-3">
            {[
              { views:"1.2M", emoji:"🧘‍♂️", bg:"from-amber-900 to-stone-900", count:"1,200,534" },
              { views:"1.05M", emoji:"🌿", bg:"from-green-900 to-stone-900", count:"1,051,876" },
            ].map((r,i) => (
              <div key={i} className="flex-1 flex flex-col">
                <div className={"relative rounded-xl overflow-hidden bg-gradient-to-b " + r.bg + " flex items-center justify-center"} style={{ height:"150px" }}>
                  <span className="text-4xl">{r.emoji}</span>
                  <div className="absolute bottom-2 left-2 bg-black/65 text-white rounded-lg px-2 py-0.5 flex items-center gap-1">
                    <span className="text-[8px]">▶</span>
                    <span className="text-[10px] font-bold">{r.views}</span>
                  </div>
                </div>
                <span className="text-[8px] text-gray-400 mt-1 text-center">{r.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 hover:shadow-md hover:border-amber-200 transition-all">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-amber-500 text-xs font-serif">✦</span>
            <h3 className="text-[16px] font-bold text-gray-900" style={{ fontFamily:"Georgia,serif" }}>YouTube: 5K → 120K</h3>
          </div>
          <p className="text-[12px] text-amber-600 mb-5 pl-4">Channel Growth</p>
          <div className="flex justify-center gap-4">
            <YouTubeMock subs="5,200" label="Before"/>
            <YouTubeMock subs="120,527" label="After"/>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 hover:shadow-md hover:border-amber-200 transition-all">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-amber-500 text-xs font-serif">✦</span>
            <h3 className="text-[16px] font-bold text-gray-900" style={{ fontFamily:"Georgia,serif" }}>High-Converting Sales Page</h3>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100">
            <div className="bg-stone-900 px-4 pt-5 pb-4 text-center">
              <div className="text-white text-[10px] font-bold mb-1 leading-snug">Unlock Your True Potential</div>
              <div className="text-white text-[10px] font-bold mb-3 leading-snug">7-Figure Spiritual Blueprint</div>
              <button className="bg-amber-500 text-white text-[9px] font-semibold px-4 py-1.5 rounded-full">Get Started Now</button>
            </div>
            <div className="bg-white px-4 py-3">
              <div className="text-[9px] font-bold text-gray-700 mb-2">7-Figure Spiritual Blueprint</div>
              {["Sacred Foundation","Divine Outreach","Mission Monetisation"].map(t => (
                <div key={t} className="flex items-center gap-2 mb-1.5">
                  <div className="w-4 h-4 rounded bg-amber-50 border border-amber-100 flex-shrink-0"/>
                  <div className="text-[8px] text-gray-400">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 hover:shadow-md hover:border-amber-200 transition-all">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-amber-500 text-xs font-serif">✦</span>
            <h3 className="text-[16px] font-bold text-gray-900" style={{ fontFamily:"Georgia,serif" }}>Website Redesign for Guru</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <div className="text-[8px] text-amber-600 tracking-widest uppercase text-center mb-1">Before</div>
              <div className="rounded-xl overflow-hidden border border-amber-100">
                <div className="bg-amber-50 px-2 pt-2.5 pb-2">
                  <div className="text-[8px] font-bold text-amber-900 mb-1 leading-snug">Wakeel Tree<br/>উপাৎ Surrender</div>
                  <div className="text-[7px] text-gray-400 mb-2 leading-relaxed">Spiritual teachings for seekers on the sacred path.</div>
                  <span className="inline-block bg-amber-400 text-white text-[6px] px-2 py-0.5 rounded font-semibold">Online Session</span>
                </div>
              </div>
            </div>
            <div className="text-amber-400 text-lg font-bold flex-shrink-0 pb-4">›</div>
            <div className="flex-1">
              <div className="text-[8px] text-amber-600 tracking-widest uppercase text-center mb-1">After</div>
              <div className="rounded-xl overflow-hidden border border-gray-800">
                <div className="bg-gray-900 px-2 pt-2.5 pb-2">
                  <div className="text-[8px] font-bold text-white mb-1 leading-snug">Work Your Way<br/>Towards Remember</div>
                  <div className="text-[7px] text-gray-400 mb-2 leading-relaxed">Sacred abundance through divine transformative guidance.</div>
                  <span className="inline-block bg-white text-gray-900 text-[6px] px-2 py-0.5 rounded font-semibold">Online Session</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}