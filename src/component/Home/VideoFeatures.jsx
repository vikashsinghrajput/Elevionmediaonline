import { useState } from "react";
import TestVideo from "../../assets/TestVideo.mp4"
import Imaggtest from "../../assets/ANURAG.png"

import ReactPlayer from 'react-player'

const icons = {
  scissors: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  hexagon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
};

// Each tab has its own image and badge
const tabs = [
  {
    id: "scissors",
    icon: "scissors",
    label: "Trim",
    badge: { label: "M Sport Trim", x: "55%", y: "60%" },
    image: TestVideo,
  },

  {
    id: "image",
    icon: "image",
    label: "Background",
    badge: { label: "Studio Background", x: "10%", y: "20%" },
   image: TestVideo,
  },
  {
    id: "layers",
    icon: "layers",
    label: "Number Plate",
    badge: { label: "Number Plate", x: "26%", y: "72%" },
      image: TestVideo,
  },
  {
    id: "hexagon",
    icon: "hexagon",
    label: "Rim Color",
    badge: { label: "Alloy Rims", x: "60%", y: "75%" },
      image: TestVideo,
  },
  {
    id: "droplet",
    icon: "droplet",
    label: "Paint",
    badge: { label: "Alpine White", x: "70%", y: "40%" },
    image: TestVideo,
  },
  
];

export default function CarFeatures() {
  const [active, setActive] = useState("layers");
  const [fade, setFade] = useState(true);

  const activeTab = tabs.find((t) => t.id === active);
  const activeIndex = tabs.findIndex((t) => t.id === active);

  const handleTabClick = (tabId) => {
    if (tabId === active) return;
    setFade(false);
    setTimeout(() => {
      setActive(tabId);
      setFade(true);
    }, 200);
  };
  console.log(TestVideo)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-7xl rounded-1xl overflow-hidden bg-white">

        {/* Header */}
        <div className="bg-orange-500 py-4 text-center">
          <h2 className="text-white text-xl font-bold tracking-wide">Our Features</h2>
        </div>

        {/* Car Image Area */}
        <div
          className="relative bg-gradient-to-b from-gray-200 to-gray-400 overflow-hidden"
          style={{ minHeight: 550 }}
        >
          {/* Studio ceiling lights */}
          <div className="absolute top-3 left-8 w-3 h-10 bg-white opacity-90 rounded-full blur-sm rotate-12" />
          <div className="absolute top-3 right-8 w-3 h-10 bg-white opacity-90 rounded-full blur-sm -rotate-12" />
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-10 bg-white opacity-80 rounded-full blur-sm" />

          {/* Light glow */}
          <div className="absolute top-0 left-10 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl" />
          <div className="absolute top-0 right-10 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-40 bg-white opacity-15 rounded-full blur-3xl" />

          {/* Car Image with fade transition */}
          <div className="flex items-center justify-center py-5 px-2">
            <video 
          
              src={activeTab.image}
              alt={activeTab.label}
              autoPlay
              controls
              className="w-full object-contain"
              style={{
                maxHeight: 500,
                opacity: fade ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
              }}
           >
              
            </video>
          </div>

          {/* Floating Feature Badge */}
          {activeTab.badge && (
            <div
              className="absolute"
              style={{
                left: activeTab.badge.x,
                top: activeTab.badge.y,
                opacity: fade ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
              }}
            >
              <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                {activeTab.badge.label}
              </span>
            </div>
          )}
        </div>

        {/* Tab Bar */}
        <div className="bg-white px-6 py-4">
          <div className="relative flex items-center justify-between">
            {/* Background track */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            {/* Orange progress fill */}
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-orange-500 -translate-y-1/2 z-0 transition-all duration-500"
              style={{
                width: `${(activeIndex / (tabs.length - 1)) * 100}%`,
              }}
            />

            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                title={tab.label}
                style={{ width: 52, height: 52 }}
                className={`relative z-10 flex items-center justify-center rounded-xl border-2 transition-all duration-300 cursor-pointer
                  ${active === tab.id
                    ? "bg-orange-500 border-orange-500 text-white scale-110"
                    : "bg-white border-gray-200 text-gray-500 hover:border-orange-300 hover:text-orange-400"
                  }`}
              >
                {icons[tab.icon]}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}