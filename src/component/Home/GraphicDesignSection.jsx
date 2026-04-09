import React, { useState } from "react";

const carData = {
  PosterDesign : [
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/04.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/05.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
    "https://autobg.ai/home/main-solution/preview-images/hatchback/background2/06.jpg",
  ],
  BannerDesign: [
    "https://i.pinimg.com/736x/19/a2/a6/19a2a62fc73896ed69326dad4ef1744f.jpg",  
    "https://i.pinimg.com/736x/d7/68/45/d7684589217920e4cba59497397f62a7.jpg",
    "https://images.pexels.com/photos/7026427/pexels-photo-7026427.jpeg",
    "https://autobg.ai/home/main-solution/preview-images/sedan/background2/03.jpg",
  ],
  SocialMediaCreatives: [
    "/images/suv1.jpg",
    "/images/suv2.jpg",
    "/images/suv3.jpg",
  ],
};

const CarStudio = () => {
  const [selectedCar, setSelectedCar] = useState("PosterDesign");
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div
      className="min-h-screen p-6 py-12"
      style={{
        backgroundColor: "#faf7f2",
        backgroundImage:
          "radial-gradient(#e5d3b3 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      {/* HEADING */}
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1 rounded-full text-xs tracking-widest bg-[#f3e8d9] text-[#a16207] mb-3">
          ✨ CREATIVE SOLUTIONS
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1f1f1f] leading-tight">
          We Design Your <br />
          <span className="text-[#c08400]">Brand Creatives</span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Elegant, premium and high-converting designs crafted with strategy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

        {/* LEFT SIDEBAR */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-5 shadow-sm border border-[#f1e5d0]">

            <h3 className="font-semibold text-[#1f1f1f] mb-4">
              Select Design Type
            </h3>

            {Object.keys(carData).map((car) => (
              <button
                key={car}
                onClick={() => {
                  setSelectedCar(car);
                  setActiveImage(0);
                }}
                className={`w-full flex items-center gap-3 p-3 mb-3 rounded-xl transition-all
                ${
                  selectedCar === car
                    ? "bg-[#fff7ed] border border-[#fbbf24] shadow-sm"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="w-14 h-10 rounded-md bg-[#f3e8d9]" />
                <span className="text-sm font-medium text-gray-800">
                  {car}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-12 lg:col-span-9">

          {/* MAIN IMAGE */}
          <div className="relative bg-white rounded-3xl p-6 shadow-md border border-[#f1e5d0]">

            <div className="rounded-2xl overflow-hidden bg-[#faf7f2]">
              <img
                src={carData[selectedCar][activeImage]}
                alt="Design"
                className="w-full h-[420px] object-contain"
              />
            </div>

            {/* FLOATING CARD (like your hero UI) */}
            <div className="absolute bottom-6 right-6 bg-white rounded-xl px-4 py-2 shadow-md border border-[#f1e5d0]">
              <p className="text-sm font-semibold text-[#c08400]">
                Premium Design
              </p>
              <span className="text-xs text-gray-500">
                High Conversion Ready
              </span>
            </div>
          </div>

          {/* THUMBNAILS */}
          <div className="mt-6 flex gap-4 overflow-x-auto">
            {carData[selectedCar].map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(index)}
                className={`min-w-[100px] h-16 rounded-xl overflow-hidden cursor-pointer transition-all
                ${
                  activeImage === index
                    ? "ring-2 ring-[#c08400] scale-105"
                    : "opacity-80"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarStudio;