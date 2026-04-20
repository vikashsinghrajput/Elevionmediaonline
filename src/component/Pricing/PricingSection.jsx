import { useState, useEffect } from "react";
import ToolsWeUse from "./ToolsWeUse";
import ProjectsSection from "./ProjectsSection";

// ── Icons ──────────────────────────────────────────────────────────────────
const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#b8860b" opacity="0.15"/>
    <path d="M4.5 8.5L6.5 10.5L11.5 5.5" stroke="#b8860b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Cross = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="7" fill="#d4a0a0" opacity="0.2"/>
    <path d="M4.5 4.5L9.5 9.5M9.5 4.5L4.5 9.5" stroke="#c08080" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LotusDivider = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "6px 0 18px" }}>
    <div style={{ height: "1px", width: "40px", background: "linear-gradient(90deg, transparent, #b8860b)" }} />
    <span style={{ fontSize: "16px" }}>❀</span>
    <div style={{ height: "1px", width: "40px", background: "linear-gradient(90deg, #b8860b, transparent)" }} />
  </div>
);

const Mandala = ({ size = 80, opacity = 0.06 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity, pointerEvents: "none" }}>
    <circle cx="50" cy="50" r="48" stroke="#b8860b" strokeWidth="0.6" fill="none"/>
    <circle cx="50" cy="50" r="36" stroke="#b8860b" strokeWidth="0.6" fill="none"/>
    <circle cx="50" cy="50" r="24" stroke="#b8860b" strokeWidth="0.6" fill="none"/>
    {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
      <line key={a} x1="50" y1="50"
        x2={50+48*Math.cos(a*Math.PI/180)} y2={50+48*Math.sin(a*Math.PI/180)}
        stroke="#b8860b" strokeWidth="0.4"/>
    ))}
    {[0,45,90,135,180,225,270,315].map(a => (
      <circle key={a}
        cx={50+36*Math.cos(a*Math.PI/180)} cy={50+36*Math.sin(a*Math.PI/180)}
        r="2.5" fill="#b8860b" opacity="0.5"/>
    ))}
    <circle cx="50" cy="50" r="4" fill="#b8860b" opacity="0.5"/>
  </svg>
);

// ── Plan detail data ────────────────────────────────────────────────────────
const V = ({ children }) => <span style={{ color: "#8b6914", fontWeight: 700, fontSize: "11px" }}>{children}</span>;

const planDetails = {
  LITE: { sections: [
    { title: "Resources", accent: true, rows: [
      ["Dedicated Resources","1"],["Digital Marketing Executive","1"],
      ["Asst. Digital Marketing Executive",<Cross/>],["Shared Resources","2"],
      ["Digital Marketing Manager","1"],["Project Manager",<Cross/>],
      ["Graphic Designer","1"],["Content Writer",<V>Client's side</V>],["Web Developer",<V>Client's side</V>],
    ]},
    { title: "Initial Setup & Analysis", rows: [
      ["WhatsApp Group Creation – Team Collaboration",<Check/>],["0 Day Report for MOM Growth Comparison",<Check/>],
      ["Analytics – Setup and Review",<Check/>],["Social Media – Setup and Review",<Check/>],
      ["Google Ads – Setup and Review",<Check/>],["GMB – Setup and Review",<Check/>],
      ["Website Indexing Check",<Check/>],["Business Brief Meeting",<Check/>],
    ]},
    { title: "SEO Services", rows: [
      ["Initial SEO Audit",<V>Basic</V>],["On-Page SEO",<V>20 Pages</V>],
      ["Off-Page SEO",<V>Basic Backlinks</V>],["Technical SEO",<V>Basic</V>],
      ["Keyword Research",<V>100 Keywords</V>],["SEO Content Optimization",<V>20 Pages</V>],
    ]},
    { title: "Local SEO", rows: [
      ["Listing",<V>Basic Listing</V>],["GMB Setup and Optimization",<Check/>],
      ["Google Map Integration on website",<Cross/>],["GMB Posts",<Cross/>],
      ["NAP Syndication & Local Citations","5"],["Local Classifieds","3"],
    ]},
    { title: "Google Ads Management", rows: [
      ["Google Ads Setup",<V>Basic</V>],["Ad Campaign Management",<V>1 Campaign</V>],
      ["Monthly Budget Handling",<V>Up to ₹15,000</V>],["Ad Performance Optimization",<V>Monthly Review</V>],
      ["Keyword Bidding Strategy",<V>Basic</V>],
    ]},
    { title: "Social Media Marketing (SMM)", rows: [
      ["Social Media Strategy",<V>Basic</V>],["Account Setup",<V>2 Platforms</V>],
      ["Content Posts",<V>8 Posts/Month</V>],["Engagement Tactics",<V>Basic Engagement</V>],
      ["Paid Social Campaigns",<Cross/>],["Social Media Analytics",<Cross/>],
    ]},
    { title: "Content Marketing", rows: [
      ["Blog Writing",<V>2/Month</V>],["Website Content",<Cross/>],["Infographic Creation",<Cross/>],
    ]},
    { title: "Email Marketing", rows: [
      ["Email Campaign Setup",<Cross/>],["Newsletter",<Cross/>],["Email Automation",<Cross/>],
    ]},
    { title: "Planning & Reporting", rows: [
      ["Monthly Strategy Planning",<Check/>],["Monthly Reporting",<Check/>],
      ["Bi-weekly Reporting",<Cross/>],["Monthly Consultation",<V>1 Hour</V>],
      ["PRP (Progress Review Presentation)",<Check/>],
    ]},
  ]},
  STANDARD: { sections: [
    { title: "Resources", accent: true, rows: [
      ["Dedicated Resources","2"],["Digital Marketing Executive","1"],
      ["Asst. Digital Marketing Executive","1"],["Shared Resources","3"],
      ["Digital Marketing Manager","1"],["Project Manager",<Cross/>],
      ["Graphic Designer","1"],["Content Writer",<V>Client's side</V>],["Web Developer",<V>Client's side</V>],
    ]},
    { title: "Initial Setup & Analysis", rows: [
      ["WhatsApp Group Creation – Team Collaboration",<Check/>],["0 Day Report for MOM Growth Comparison",<Check/>],
      ["Analytics – Setup and Review",<Check/>],["Social Media – Setup and Review",<Check/>],
      ["Google Ads – Setup and Review",<Check/>],["GMB – Setup and Review",<Check/>],
      ["Website Indexing Check",<Check/>],["Business Brief Meeting",<Check/>],
    ]},
    { title: "SEO Services", rows: [
      ["Initial SEO Audit",<V>Comprehensive</V>],["On-Page SEO",<V>40 Pages</V>],
      ["Off-Page SEO",<V>Standard Backlinks</V>],["Technical SEO",<V>Intermediate</V>],
      ["Keyword Research",<V>200 Keywords</V>],["SEO Content Optimization",<V>40 Pages</V>],
    ]},
    { title: "Local SEO", rows: [
      ["Listing",<V>Standard Listing</V>],["GMB Setup and Optimization",<Check/>],
      ["Google Map Integration on website",<Check/>],["GMB Posts",<V>4/Month</V>],
      ["NAP Syndication & Local Citations","10"],["Local Classifieds","5"],
    ]},
    { title: "Google Ads Management", rows: [
      ["Google Ads Setup",<V>Intermediate</V>],["Ad Campaign Management",<V>2 Campaigns</V>],
      ["Monthly Budget Handling",<V>Up to ₹30,000</V>],["Ad Performance Optimization",<V>Bi-weekly Review</V>],
      ["Keyword Bidding Strategy",<V>Intermediate</V>],
    ]},
    { title: "Social Media Marketing (SMM)", rows: [
      ["Social Media Strategy",<V>Intermediate</V>],["Account Setup",<V>3 Platforms</V>],
      ["Content Posts",<V>12 Posts/Month</V>],["Engagement Tactics",<V>Standard</V>],
      ["Paid Social Campaigns",<V>1 Campaign</V>],["Social Media Analytics",<Check/>],
    ]},
    { title: "Content Marketing", rows: [
      ["Blog Writing",<V>4/Month</V>],["Website Content",<V>Basic</V>],["Infographic Creation",<V>1/Month</V>],
    ]},
    { title: "Email Marketing", rows: [
      ["Email Campaign Setup",<V>Basic</V>],["Newsletter",<V>1/Month</V>],["Email Automation",<Cross/>],
    ]},
    { title: "Planning & Reporting", rows: [
      ["Monthly Strategy Planning",<Check/>],["Monthly Reporting",<Check/>],
      ["Bi-weekly Reporting",<Cross/>],["Monthly Consultation",<V>2 Hours</V>],
      ["PRP (Progress Review Presentation)",<Check/>],
    ]},
  ]},
  ADVANCE: { sections: [
    { title: "Resources", accent: true, rows: [
      ["Dedicated Resources","3"],["Digital Marketing Executive","1"],
      ["Asst. Digital Marketing Executive","1"],["Shared Resources","4"],
      ["Digital Marketing Manager","1"],["Project Manager","Shared"],
      ["Graphic Designer","1"],["Content Writer","1"],["Web Developer",<V>Client's side</V>],
    ]},
    { title: "Initial Setup & Analysis", rows: [
      ["WhatsApp Group Creation – Team Collaboration",<Check/>],["0 Day Report for MOM Growth Comparison",<Check/>],
      ["Analytics – Setup and Review",<Check/>],["Social Media – Setup and Review",<Check/>],
      ["Google Ads – Setup and Review",<Check/>],["GMB – Setup and Review",<Check/>],
      ["Website Indexing Check",<Check/>],["Business Brief Meeting",<Check/>],
    ]},
    { title: "SEO Services", rows: [
      ["Initial SEO Audit",<V>In-depth</V>],["On-Page SEO",<V>60 Pages</V>],
      ["Off-Page SEO",<V>Advanced Backlinks</V>],["Technical SEO",<V>Advanced</V>],
      ["Keyword Research",<V>400 Keywords</V>],["SEO Content Optimization",<V>60 Pages</V>],["Competitor Analysis",<Check/>],
    ]},
    { title: "Local SEO", rows: [
      ["Listing",<V>Advanced Listing</V>],["GMB Setup and Optimization",<Check/>],
      ["Google Map Integration on website",<Check/>],["GMB Posts",<V>8/Month</V>],
      ["NAP Syndication & Local Citations","20"],["Local Classifieds","10"],
    ]},
    { title: "Google Ads Management", rows: [
      ["Google Ads Setup",<V>Advanced</V>],["Ad Campaign Management",<V>3 Campaigns</V>],
      ["Monthly Budget Handling",<V>Up to ₹60,000</V>],["Ad Performance Optimization",<V>Weekly Review</V>],
      ["Keyword Bidding Strategy",<V>Advanced</V>],
    ]},
    { title: "Social Media Marketing (SMM)", rows: [
      ["Social Media Strategy",<V>Advanced</V>],["Account Setup",<V>4 Platforms</V>],
      ["Content Posts",<V>20 Posts/Month</V>],["Engagement Tactics",<V>Advanced</V>],
      ["Paid Social Campaigns",<V>2 Campaigns</V>],["Social Media Analytics",<Check/>],
    ]},
    { title: "Content Marketing", rows: [
      ["Blog Writing",<V>6/Month</V>],["Website Content",<V>Standard</V>],["Infographic Creation",<V>2/Month</V>],
    ]},
    { title: "Email Marketing", rows: [
      ["Email Campaign Setup",<V>Advanced</V>],["Newsletter",<V>2/Month</V>],["Email Automation",<V>Basic</V>],
    ]},
    { title: "Planning & Reporting", rows: [
      ["Monthly Strategy Planning",<Check/>],["Monthly Reporting",<Check/>],
      ["Bi-weekly Reporting",<Check/>],["Monthly Consultation",<V>4 Hours</V>],
      ["PRP (Progress Review Presentation)",<Check/>],
    ]},
  ]},
  ENTERPRISE: { sections: [
    { title: "Resources", accent: true, rows: [
      ["Dedicated Resources","5"],["Digital Marketing Executive","1"],
      ["Asst. Digital Marketing Executive","1"],["Shared Resources","Full Team"],
      ["Digital Marketing Manager","1"],["Project Manager","Dedicated"],
      ["Graphic Designer","1"],["Content Writer","1"],["Web Developer","1"],
    ]},
    { title: "Initial Setup & Analysis", rows: [
      ["WhatsApp Group Creation – Team Collaboration",<Check/>],["0 Day Report for MOM Growth Comparison",<Check/>],
      ["Analytics – Setup and Review",<Check/>],["Social Media – Setup and Review",<Check/>],
      ["Google Ads – Setup and Review",<Check/>],["GMB – Setup and Review",<Check/>],
      ["Website Indexing Check",<Check/>],["Business Brief Meeting",<Check/>],
    ]},
    { title: "SEO Services", rows: [
      ["Initial SEO Audit",<V>Enterprise</V>],["On-Page SEO",<V>Unlimited</V>],
      ["Off-Page SEO",<V>Premium Backlinks</V>],["Technical SEO",<V>Full Audit</V>],
      ["Keyword Research",<V>Unlimited</V>],["SEO Content Optimization",<V>Unlimited</V>],["Competitor Analysis",<Check/>],
    ]},
    { title: "Local SEO", rows: [
      ["Listing",<V>Premium Listing</V>],["GMB Setup and Optimization",<Check/>],
      ["Google Map Integration on website",<Check/>],["GMB Posts",<V>12/Month</V>],
      ["NAP Syndication & Local Citations","Unlimited"],["Local Classifieds","Unlimited"],
    ]},
    { title: "Google Ads Management", rows: [
      ["Google Ads Setup",<V>Enterprise</V>],["Ad Campaign Management",<V>Unlimited</V>],
      ["Monthly Budget Handling",<V>Custom Budget</V>],["Ad Performance Optimization",<V>Daily Review</V>],
      ["Keyword Bidding Strategy",<V>AI-driven</V>],
    ]},
    { title: "Social Media Marketing (SMM)", rows: [
      ["Social Media Strategy",<V>Enterprise</V>],["Account Setup",<V>All Platforms</V>],
      ["Content Posts",<V>30+ Posts/Month</V>],["Engagement Tactics",<V>Full Management</V>],
      ["Paid Social Campaigns",<V>Unlimited</V>],["Social Media Analytics",<Check/>],
    ]},
    { title: "Content Marketing", rows: [
      ["Blog Writing",<V>10+/Month</V>],["Website Content",<V>Premium</V>],["Infographic Creation",<V>4/Month</V>],
    ]},
    { title: "Email Marketing", rows: [
      ["Email Campaign Setup",<V>Enterprise</V>],["Newsletter",<V>4/Month</V>],["Email Automation",<V>Advanced</V>],
    ]},
    { title: "Planning & Reporting", rows: [
      ["Monthly Strategy Planning",<Check/>],["Monthly Reporting",<Check/>],
      ["Bi-weekly Reporting",<Check/>],["Monthly Consultation",<V>8 Hours</V>],
      ["PRP (Progress Review Presentation)",<Check/>],
    ]},
  ]},
};

// ── Plan cards data ─────────────────────────────────────────────────────────
const plans = [
  {
    name: "LITE", subtitle: "Starter Plan", emoji: "🪔",
    price: { Month: 60000, Quarterly: 55000, "Half Yearly": 50000, Yearly: 45000 },
    tag: null, featured: false,
    target: "Small Business",
    features: [
      "Dedicated Digital Marketing Executive",
      "Basic SEO Services",
      "Basic Strategy & Monthly Reporting",
      "1 Hour Monthly Consultation & PRP",
      "Initial Setup and Analysis",
    ],
  },
  {
    name: "STANDARD", subtitle: "Most Popular", emoji: "🌸",
    price: { Month: 85000, Quarterly: 78000, "Half Yearly": 72000, Yearly: 65000 },
    tag: "Most Popular", featured: true,
    target: "Moderate Competition",
    features: [
      "Dedicated Executive + Assistant",
      "Comprehensive SEO Services",
      "Intermediate Strategy & Reporting",
      "2 Hour Monthly Consultation & PRP",
      "Initial Setup and Analysis",
    ],
  },
  {
    name: "ADVANCE", subtitle: "Growth Plan", emoji: "🔱",
    price: { Month: 150000, Quarterly: 138000, "Half Yearly": 128000, Yearly: 115000 },
    tag: null, featured: false,
    target: "Ecommerce / High Competition",
    features: [
      "Executive + PM + Graphic + Content team",
      "In-depth SEO with Competitor Analysis",
      "Comprehensive Strategy & Bi-weekly Reports",
      "4 Hour Monthly Consultation & PRP",
      "Initial Setup and Analysis",
    ],
  },
  {
    name: "ENTERPRISE", subtitle: "Brand Plan", emoji: "☀️",
    price: { Month: 300000, Quarterly: 275000, "Half Yearly": 250000, Yearly: 220000 },
    tag: null, featured: false,
    target: "Brands / High Competition",
    features: [
      "Full Dedicated Team — PM, Designer, Writer",
      "In-depth SEO with Competitor Analysis",
      "Comprehensive Strategy & Bi-weekly Reports",
      "8 Hour Monthly Consultation & PRP",
      "Initial Setup and Analysis",
    ],
  },
];

const periods = ["Month", "Quarterly", "Half Yearly", "Yearly"];
const periodSub = { Month: "1 Month", Quarterly: "3 Months", "Half Yearly": "6 Months", Yearly: "12 Months" };

function formatINR(n) { return new Intl.NumberFormat("en-IN").format(n); }

// ── Modal ────────────────────────────────────────────────────────────────────
function DetailRow({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #f0e8d0", gap: "8px" }}>
      <span style={{ color: "#7a6040", fontSize: "11px", lineHeight: 1.4 }}>{label}</span>
      <span style={{ fontSize: "11px", fontWeight: 600, flexShrink: 0 }}>{value}</span>
    </div>
  );
}

function SectionCard({ section }) {
  return (
    <div style={{ borderRadius: "12px", padding: "14px", border: section.accent ? "1.5px solid #b8860b" : "1px solid #e8dcc8", background: "#fffdf7", marginBottom: "2px" }}>
      <div style={{ fontSize: "12px", fontWeight: 700, color: "#5c3d00", letterSpacing: "0.5px", marginBottom: section.accent ? "3px" : "8px" }}>{section.title}</div>
      {section.accent && <div style={{ width: "28px", height: "2px", background: "#b8860b", borderRadius: "2px", marginBottom: "8px" }} />}
      {section.rows.map(([label, value], i) => <DetailRow key={i} label={label} value={value} />)}
    </div>
  );
}

function Modal({ plan, onClose }) {
  const details = planDetails[plan.name];
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <div onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(60,30,0,0.55)", padding: "16px", backdropFilter: "blur(6px)" }}>
      <div style={{ background: "#fffcf5", borderRadius: "24px", width: "100%", maxWidth: "920px", maxHeight: "90vh", display: "flex", flexDirection: "column", border: "1px solid #e8dcc0", boxShadow: "0 24px 64px rgba(100,60,0,0.18)" }}>

        {/* Modal header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 28px 16px", borderBottom: "1px solid #f0e4c8" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #f5e6b0, #e8c860)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>{plan.emoji}</div>
            <div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#2a1800", letterSpacing: "2px", fontFamily: "Georgia, serif" }}>{plan.name}</div>
              <div style={{ fontSize: "11px", color: "#b8860b", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>{plan.subtitle}</div>
            </div>
          </div>
          <button onClick={onClose} style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #e0d0b0", background: "#fdf8ee", color: "#8b6914", cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>×</button>
        </div>

        {/* Scrollable content */}
        <div style={{ overflowY: "auto", flex: 1, padding: "20px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
            {details.sections.map((s, i) => <SectionCard key={i} section={s} />)}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "14px 28px", borderTop: "1px solid #f0e4c8", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button onClick={onClose} style={{ padding: "9px 20px", borderRadius: "50px", border: "1px solid #e0d0b0", background: "transparent", color: "#8b6914", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Close</button>
          <button style={{ padding: "9px 24px", borderRadius: "50px", border: "none", background: "linear-gradient(135deg, #b8860b, #d4a017)", color: "#fff", fontSize: "13px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px" }}>🙏 Get Started</button>
        </div>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function PricingTable() {
  const [activePeriod, setActivePeriod] = useState("Month");
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <> <div style={{ background: "linear-gradient(160deg, #fdf8ed 0%, #fef9f0 50%, #fdf5e6 100%)", minHeight: "100vh", padding: "60px 20px 80px", position: "relative", overflow: "hidden", fontFamily: "system-ui, sans-serif" }}>

      {/* Background mandala decoration */}
      <div style={{ position: "absolute", top: -20, right: -20, opacity: 0.05 }}><Mandala size={200} opacity={1} /></div>
      <div style={{ position: "absolute", bottom: -20, left: -20, opacity: 0.04 }}><Mandala size={180} opacity={1} /></div>

      {/* Section header — matches homepage style */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#fdf0d0", border: "1px solid #e8c860", borderRadius: "50px", padding: "5px 14px", marginBottom: "16px" }}>
          <span style={{ fontSize: "13px" }}>☸️</span>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#8b6914", letterSpacing: "2px", textTransform: "uppercase" }}>#1 Digital Marketing Agency</span>
        </div>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, color: "#1a1000", margin: "0 0 4px", fontFamily: "Georgia, serif", lineHeight: 1.2 }}>
          Choose Your <span style={{ color: "#b8860b", fontStyle: "italic" }}>Sacred Plan</span>
        </h2>
        <LotusDivider />
        <p style={{ color: "#7a6040", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7, fontStyle: "italic" }}>
          Data-driven digital marketing that delivers real results. SEO, paid ads, social media &amp; content that converts visitors into loyal customers.
        </p>
      </div>

      {/* Period tabs — pill style like homepage service tags */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "44px" }}>
        {periods.map((p) => (
          <button key={p} onClick={() => setActivePeriod(p)}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              padding: "10px 24px", borderRadius: "50px", cursor: "pointer", transition: "all .2s",
              background: activePeriod === p ? "linear-gradient(135deg, #b8860b, #d4a017)" : "#fff",
              color: activePeriod === p ? "#fff" : "#5c3d00",
              border: activePeriod === p ? "1.5px solid #b8860b" : "1.5px solid #e8dcc0",
              boxShadow: activePeriod === p ? "0 4px 16px rgba(184,134,11,0.30)" : "0 1px 4px rgba(0,0,0,0.06)",
              fontWeight: 700, fontSize: "13px",
            }}>
            {p}
            <span style={{ fontSize: "10px", fontWeight: 500, opacity: 0.75, marginTop: "2px" }}>({periodSub[p]})</span>
          </button>
        ))}
      </div>

      {/* Cards grid — 4 fixed columns, no shrinking */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "22px", maxWidth: "1320px", margin: "0 auto" }}>
        {plans.map((plan) => {
          const f = plan.featured;
          /* light cards: warm cream with visible dark text
             featured card: rich saffron-maroon with bright gold text */
          return (
            <div key={plan.name} style={{
              position: "relative", borderRadius: "22px",
              padding: f ? "36px 26px 26px" : "30px 26px 26px",
              display: "flex", flexDirection: "column", overflow: "hidden",
              background: f
                ? "linear-gradient(160deg, #6b3300 0%, #4a2000 60%, #3a1800 100%)"
                : "linear-gradient(160deg, #fffef8 0%, #fff9ec 100%)",
              border: f ? "2px solid #d4a017" : "1.5px solid #e2d0a0",
              boxShadow: f
                ? "0 16px 56px rgba(184,134,11,0.30), inset 0 1px 0 rgba(255,220,100,0.15)"
                : "0 6px 28px rgba(120,80,0,0.10)",
            }}>

              {/* Corner mandala */}
              <div style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none" }}>
                <Mandala size={90} opacity={f ? 0.14 : 0.07} />
              </div>

              {/* Popular badge */}
              {plan.tag && (
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(90deg, #b8860b, #f0c040)", color: "#3a1800", fontSize: "10px", fontWeight: 800, padding: "5px 18px", borderRadius: "0 0 14px 14px", letterSpacing: "1.5px", whiteSpace: "nowrap", textTransform: "uppercase" }}>
                  ★ {plan.tag} ★
                </div>
              )}

              {/* Plan icon + name */}
              <div style={{ textAlign: "center", fontSize: "28px", marginBottom: "8px" }}>{plan.emoji}</div>
              <div style={{ textAlign: "center", fontSize: "18px", fontWeight: 900, letterSpacing: "3px", color: f ? "#f8dc70" : "#2a1400", fontFamily: "Georgia, serif", marginBottom: "3px" }}>{plan.name}</div>
              <div style={{ textAlign: "center", fontSize: "12px", color: f ? "#e0b060" : "#9a6c10", fontWeight: 600, marginBottom: "20px", letterSpacing: "0.5px" }}>{plan.subtitle}</div>

              {/* Price */}
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "34px", fontWeight: 900, color: f ? "#f8dc70" : "#1e1000", fontFamily: "Georgia, serif" }}>
                  ₹{formatINR(plan.price[activePeriod])}
                </span>
                <span style={{ fontSize: "13px", color: f ? "#c8a050" : "#7a5810", marginLeft: "5px" }}>/month</span>
              </div>

              {/* Primary CTA */}
              <button style={{
                width: "100%", padding: "12px", borderRadius: "50px", border: "none", cursor: "pointer",
                fontWeight: 700, fontSize: "13px", marginBottom: "20px", letterSpacing: "0.5px",
                background: f ? "linear-gradient(135deg, #e8b020, #f8dc70)" : "linear-gradient(135deg, #b8860b, #d4a017)",
                color: f ? "#2a1000" : "#fff",
                boxShadow: f ? "0 6px 20px rgba(232,176,32,0.50)" : "0 4px 14px rgba(184,134,11,0.35)",
              }}>🙏 Get Quote</button>

              {/* Divider */}
              <div style={{ height: "1px", background: f ? "rgba(220,170,80,0.35)" : "#ead8a8", marginBottom: "14px" }} />

              {/* Target label */}
              <div style={{ textAlign: "center", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: f ? "#daa84a" : "#9a6c10", marginBottom: "16px" }}>
                ❀ {plan.target} ❀
              </div>

              {/* Features */}
              <ul style={{ flex: 1, margin: "0 0 20px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {plan.features.map((feat, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13px", color: f ? "#f0d090" : "#3a2200", lineHeight: 1.55, fontWeight: 500 }}>
                    <span style={{ flexShrink: 0, marginTop: "2px" }}><Check /></span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* View Details CTA */}
              <button onClick={() => setSelectedPlan(plan)}
                style={{
                  width: "100%", padding: "11px", borderRadius: "50px", cursor: "pointer",
                  fontWeight: 700, fontSize: "13px", letterSpacing: "0.5px",
                  border: f ? "1.5px solid rgba(220,170,80,0.6)" : "1.5px solid #d4b870",
                  background: f ? "rgba(220,170,80,0.14)" : "transparent",
                  color: f ? "#f8dc70" : "#8b6000",
                }}>
                View Details →
              </button>
            </div>
          );
        })}
      </div>

      {/* Trust bar — matches homepage */}
      <div style={{ textAlign: "center", marginTop: "48px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "20px" }}>🙏🌸☀️</span>
        <span style={{ color: "#7a6040", fontSize: "13px" }}>Trusted by <strong style={{ color: "#2a1800" }}>2,400+</strong> clients worldwide</span>
        <span style={{ color: "#d4a017", fontSize: "16px", letterSpacing: "2px" }}>★★★★★</span>
        <span style={{ color: "#5c3d00", fontSize: "13px", fontWeight: 700 }}>4.9</span>
      </div>

      {selectedPlan && <Modal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
    </div>
    <ToolsWeUse/>
    <ProjectsSection/>
     <ToolsWeUse/>
    </>
   
  );
}