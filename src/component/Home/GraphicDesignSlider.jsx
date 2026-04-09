import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function AppleProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const products = [
    {
      id: 1,
      title: "⁠The Thumb-Stop Architecture",
      subtitle: "Subtext: Most agencies create content; we create friction. In a world of infinite scrolling, we design visuals and motion graphics specifically engineered to make users stop their thumbs and pay attention to your brand.",
      price: "From ₹134900.00*",
      image: "https://pngimg.com/d/iphone_13_PNG2.png",
      bgColor: "bg-black",
      badge: null,
      imageStyle: "object-cover scale-110"
    },
    {
      id: 2,
      title: "MacBook Pro 14″",
      subtitle: "Supercharged by M5.",
      price: "From ₹169900.00*",
      image: "/api/placeholder/400/300",
      bgColor: "bg-black",
      badge: null,
      imageStyle: "object-contain"
    },
    {
      id: 3,
      title: "Apple Watch Black Unity Braided Solo Loop",
      subtitle: "Inspired by the power of connection.",
      price: "From ₹9500.00*",
      image: "/api/placeholder/400/400",
      bgColor: "bg-black",
      badge: "SPECIAL-EDITION STRAP",
      imageStyle: "object-contain scale-90"
    },
    {
      id: 4,
      title: "Apple Watch Series 11",
      subtitle: "The ultimate way to watch your health.",
      price: "From ₹46900.00*",
      image: "/api/placeholder/400/400",
      bgColor: "bg-white",
      badge: null,
      imageStyle: "object-contain",
      textColor: "text-black"
    },
    {
      id: 5,
      title: "AirTag",
      subtitle: "The must-have accessory.",
      price: "From ₹3190.00*",
      image: "/api/placeholder/400/400",
      bgColor: "bg-white",
      badge: null,
      imageStyle: "object-contain",
      textColor: "text-black"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = products.length - itemsToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      return prev <= 0 ? 0 : prev - 1;
    });
  };

  const canScrollNext = currentIndex < products.length - itemsToShow;
  const canScrollPrev = currentIndex > 0;

  return (
    <div className="w-full min-h-screen bg-[#f5f5f7] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight">
            <span className="text-[#e50914]">The latest.</span>{" "}
            <span className="text-[#1d1d1f]">All-new and loveable.</span>
          </h1>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Products Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-3 sm:gap-4 lg:gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow + (itemsToShow === 1 ? 0 : itemsToShow === 2 ? 2 : 1.7))}%)`
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`flex-shrink-0 ${
                    itemsToShow === 1 ? 'w-full' : 
                    itemsToShow === 2 ? 'w-[calc(50%-8px)]' : 
                    'w-[calc(33.333%-14px)]'
                  } perspective-1000`}
                >
                  <div
                    className={`${product.bgColor} rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-6 sm:p-8 lg:p-10 h-[480px] sm:h-[520px] lg:h-[580px] flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transform-gpu`}
                    style={{
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-6 sm:top-8 lg:top-10 left-6 sm:left-8 lg:left-10 z-10">
                        <span className="text-[9px] sm:text-[10px] font-medium text-gray-500 tracking-[0.08em] uppercase">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Text Content */}
                    <div className={`${product.badge ? 'mt-6 sm:mt-8' : ''} z-10`}>
                      <h2 className={`text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-1 sm:mb-2 leading-tight tracking-tight ${
                        product.textColor === 'text-black' ? 'text-black' : 'text-white'
                      }`}>
                        {product.title}
                      </h2>
                      <p className={`text-base sm:text-lg lg:text-[21px] mb-2 sm:mb-3 font-normal ${
                        product.textColor === 'text-black' ? 'text-gray-800' : 'text-gray-300'
                      }`}>
                        {product.subtitle}
                      </p>
                      <p className={`text-xs sm:text-sm lg:text-[15px] ${
                        product.textColor === 'text-black' ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {product.price}
                      </p>
                    </div>

                    {/* Product Image */}
                    <div className="flex-1 flex items-end justify-center pb-0 relative">
                      <div className="w-full h-full flex items-end justify-center transition-transform duration-700 hover:scale-105 hover:translate-y-[-8px]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className={`max-w-full max-h-full ${product.imageStyle} transition-all duration-700 drop-shadow-2xl`}
                          style={{
                            filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button - Only show when can scroll */}
          {canScrollNext && (
            <button
              onClick={nextSlide}
              className="hidden lg:flex absolute -right-4 xl:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] items-center justify-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 active:scale-95 hover:-translate-y-1"
              aria-label="Next products"
            >
              <ChevronRight className="w-6 h-6 xl:w-7 xl:h-7 text-gray-800" strokeWidth={2} />
            </button>
          )}

          {/* Previous Button - Only show when can scroll back */}
          {canScrollPrev && (
            <button
              onClick={prevSlide}
              className="hidden lg:flex absolute -left-4 xl:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] items-center justify-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 active:scale-95 hover:-translate-y-1"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-6 h-6 xl:w-7 xl:h-7 text-gray-800" strokeWidth={2} />
            </button>
          )}

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden justify-center gap-4 mt-6">
            {canScrollPrev && (
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)] transition-all duration-300 active:scale-95"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" strokeWidth={2} />
              </button>
            )}
            {canScrollNext && (
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)] transition-all duration-300 active:scale-95"
                aria-label="Next products"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" strokeWidth={2} />
              </button>
            )}
          </div>

          {/* Dots Indicator - Desktop */}
          <div className="hidden lg:flex justify-center gap-2 mt-10">
            {Array.from({ length: Math.ceil(products.length / itemsToShow) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-gray-700 w-8'
                    : 'bg-gray-300 w-[6px] hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Dots Indicator - Mobile */}
          <div className="flex lg:hidden justify-center gap-2 mt-6">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-gray-700 w-8'
                    : 'bg-gray-300 w-[6px] hover:bg-gray-400'
                }`}
                aria-label={`Go to product ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* User Profile Badge */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_6px_20px_rgba(59,130,246,0.4)] flex items-center justify-center text-white font-semibold text-lg sm:text-xl cursor-pointer hover:scale-110 hover:shadow-[0_12px_40px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300">
          👤
        </div>
      </div>
    </div>
  );
}