import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [slide, setSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1542365887-4d1d1f7e6c8f",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1493238792000-8113da705763",
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? "backdrop-blur-xl bg-[#FDFAF3]/80 shadow-[0_4px_24px_rgba(184,134,11,0.12)] border-b border-[#E8C878]/60"
          : "bg-[#FDFAF3] border-b border-[#E8C878]/50"
        }`}
    >
      {/* Top gold shimmer line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E8C878] to-transparent" />

      <div
        className={`mx-auto transition-all duration-300
          ${scrolled ? "max-w-[1200px] px-4 py-3" : "max-w-[1400px] px-6 py-4"}`}
      >
        <div className="flex items-center justify-between">

          {/* Logo + Om */}
          <div className="flex items-center gap-2">
            <img className="w-28" src={logo} alt="logo" />
            <span className="text-[#E8C878] text-lg font-serif leading-none mt-0.5">ॐ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative">

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowSolutions(true)}
            >
              <button
                className={`flex items-center gap-1.5 font-semibold tracking-wide text-xs transition-colors duration-200
                  ${showSolutions ? "text-[#B8860B]" : "text-[#5C4020] hover:text-[#B8860B]"}
                  [font-family:'Cinzel',serif]`}
              >
                {/* Mini mandala dot */}
                <span className={`w-2 h-2 rounded-full border transition-colors duration-200
                  ${showSolutions ? "border-[#B8860B] bg-[#B8860B]/20" : "border-[#E8C878] bg-transparent"}`}
                />
                Solutions
                <span className={`text-[8px] text-[#E8C878] transition-transform duration-200 inline-block
                  ${showSolutions ? "rotate-180" : "rotate-0"}`}>
                  ▼
                </span>
              </button>

              {showSolutions && (
                <div
                  onMouseLeave={() => setShowSolutions(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-12 w-screen
                    bg-[#F5EDD8] border-t-2 border-[#E8C878]
                    shadow-[0_20px_60px_rgba(26,10,0,0.13)]
                    animate-[fadeDown_0.22s_ease]"
                  style={{ animation: "fadeDown 0.22s ease" }}
                >
                  {/* Gold shimmer line */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#E8C878] to-transparent" />

                  <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 p-8">

                    {/* LEFT */}
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-black text-[#E2C87A]/40 mb-4
                        [font-family:'Cinzel',serif] tracking-wide">
                        Solutions
                      </h2>

                      {/* Gold divider */}
                      <div className="flex items-center gap-2 mb-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-[#E8C878] to-transparent" />
                        <span className="text-[#B8860B] text-xs">✦</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-[#E8C878] to-transparent" />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Card icon="🕉️" title="Dealerships"   text="AI-powered visual perfection"   />
                        <Card icon="🪷" title="Marketplaces"  text="Consistent pro-grade listings"  />
                        <Card icon="🪔" title="Partners"      text="Scale together with AI"         />
                        <Card icon="📿" title="Got Questions?" text="Connect with us"               />
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-[#FFFBF0] p-4 rounded-2xl border border-[#E8C878]
                      shadow-[0_4px_20px_rgba(184,134,11,0.1)] flex flex-col justify-between">

                      <div className="rounded-xl overflow-hidden mb-4 h-[200px] border border-[#E8C878]/50 relative">
                        <img
                          src={images[slide]}
                          className="w-full h-full object-cover"
                          style={{ filter: "sepia(8%) brightness(0.97)" }}
                          alt="slide"
                        />
                        {/* Gold fade bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-10
                          bg-gradient-to-t from-[#F5EDD8]/60 to-transparent" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-lg text-[#1A1008] [font-family:'Cinzel',serif]">
                            Unlock{" "}
                            <span className="text-[#C8780A] italic [font-family:'Cormorant_Garamond',serif]">
                              3×
                            </span>
                          </h4>
                          <p className="text-sm text-[#9E7840] italic [font-family:'Cormorant_Garamond',serif]">
                            Engagement Rate
                          </p>
                        </div>

                        <button className="bg-gradient-to-r from-[#C8780A] to-[#B8860B] text-[#FFF8E8]
                          px-4 py-2 rounded-full text-xs font-bold tracking-wide
                          [font-family:'Cinzel',serif]
                          hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(200,120,10,0.4)]
                          transition-all duration-200">
                          Try us Now →
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link className="text-[#5C4020] hover:text-[#B8860B] transition-colors duration-200
              text-xs font-semibold tracking-wide [font-family:'Cinzel',serif]
              relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1.5px]
              after:bg-gradient-to-r after:from-[#C8780A] after:to-[#B8860B]
              hover:after:w-full after:transition-all after:duration-250">
              Pricing
            </Link>

            <Link className="text-[#5C4020] hover:text-[#B8860B] transition-colors duration-200
              text-xs font-semibold tracking-wide [font-family:'Cinzel',serif]
              relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1.5px]
              after:bg-gradient-to-r after:from-[#C8780A] after:to-[#B8860B]
              hover:after:w-full after:transition-all after:duration-250">
              Client
            </Link>

            <Link className="text-[#5C4020] hover:text-[#B8860B] transition-colors duration-200
              text-xs font-semibold tracking-wide [font-family:'Cinzel',serif]
              relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1.5px]
              after:bg-gradient-to-r after:from-[#C8780A] after:to-[#B8860B]
              hover:after:w-full after:transition-all after:duration-250">
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden md:block
            bg-gradient-to-r from-[#C8780A] to-[#B8860B] text-[#FFF8E8]
            px-6 py-2.5 rounded-full text-xs font-bold tracking-widest
            [font-family:'Cinzel',serif]
            hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,120,10,0.4)]
            transition-all duration-200">
            ✦ Try Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden bg-[#FBF3DC] border border-[#E8C878]
              rounded-xl p-2 text-[#5C4020] transition-colors duration-200
              hover:bg-[#F5EDD8] hover:border-[#B8860B]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#F5EDD8] border-t border-[#E8C878] min-h-screen">

          {/* Gold shimmer */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#E8C878] to-transparent" />

          <div className="px-5 py-6">

            {/* Solutions Accordion */}
            <div>
              <button
                onClick={() => setShowSolutions(!showSolutions)}
                className="flex items-center justify-between w-full text-left
                  font-bold text-[#1A1008] text-sm tracking-wide [font-family:'Cinzel',serif]"
              >
                <span className="flex items-center gap-2">
                  <span className="text-[#B8860B] text-xs">✦</span>
                  Solutions
                </span>
                <span className="text-[#E8C878] text-[10px]">
                  {showSolutions ? "▲" : "▼"}
                </span>
              </button>

              {showSolutions && (
                <div className="mt-4 space-y-3">
                  <Card icon="🕉️" title="Dealerships"   text="AI-powered visual perfection" />
                  <Card icon="🪷" title="Marketplaces"  text="Consistent pro-grade listings" />
                  <Card icon="🪔" title="Partners"      text="Scale together with AI" />
                  <Card icon="📿" title="API"           text="For Developers" />
                </div>
              )}
            </div>

            {/* Gold divider */}
            <div className="h-px my-5 bg-gradient-to-r from-[#E8C878] to-transparent" />

            {/* Pricing */}
            <div onClick={() => setOpen(false)} className="mb-5">
              <Link className="flex items-center gap-2 text-[#5C4020] font-semibold text-sm
                [font-family:'Cinzel',serif] tracking-wide hover:text-[#B8860B] transition-colors">
                <span className="text-[#E8C878] text-[9px]">✦</span>
                Pricing
              </Link>
            </div>

            {/* Resources */}
            <div onClick={() => setOpen(false)} className="mb-5">
              <Link className="flex items-center gap-2 text-[#5C4020] font-semibold text-sm
                [font-family:'Cinzel',serif] tracking-wide hover:text-[#B8860B] transition-colors">
                <span className="text-[#E8C878] text-[9px]">✦</span>
                Resources
              </Link>
            </div>

            {/* Mobile Buttons */}
            <div className="flex gap-3 mt-8">
              <button className="flex-1 border border-[#E8C878] bg-[#FFFBF0]
                rounded-xl py-2.5 text-xs font-bold text-[#5C4020]
                [font-family:'Cinzel',serif] tracking-wide
                hover:border-[#B8860B] hover:text-[#B8860B] transition-all duration-200">
                Book Demo
              </button>

              <button className="flex-1 bg-gradient-to-r from-[#C8780A] to-[#B8860B]
                text-[#FFF8E8] rounded-xl py-2.5 text-xs font-bold
                [font-family:'Cinzel',serif] tracking-wide
                hover:shadow-[0_6px_20px_rgba(200,120,10,0.4)] hover:-translate-y-0.5
                transition-all duration-200">
                ✦ Sign In
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};

const Card = ({ icon, title, text }) => (
  <div className="flex items-center gap-4 bg-[#FFFBF0] p-4 rounded-xl
    border border-[#E8C878]
    hover:shadow-[0_6px_24px_rgba(184,134,11,0.18)] hover:-translate-y-0.5
    hover:border-[#B8860B] transition-all duration-220 cursor-pointer group">

    <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center
      text-xl bg-gradient-to-br from-[#C8780A] to-[#B8860B]
      shadow-[0_4px_12px_rgba(200,120,10,0.25)]
      group-hover:shadow-[0_6px_18px_rgba(200,120,10,0.4)] transition-shadow duration-200">
      {icon}
    </div>

    <div>
      <h4 className="font-bold text-[13px] text-[#1A1008] [font-family:'Cinzel',serif] tracking-wide">
        {title}
      </h4>
      <p className="text-[11px] text-[#9E7840] mt-0.5 italic [font-family:'Cormorant_Garamond',serif]">
        {text}
      </p>
    </div>

  </div>
);

export default Navbar;