import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, ArrowUpRight, ChevronLeft, ChevronRight, Flame, BookOpen, Heart, Sparkles, Sun, Moon, Flower, X, Info } from 'lucide-react';

const SpiritualProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isClient, setIsClient] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const projects = [
    {
      id: 1,
      category: 'Divine Connection',
      title: 'Sacred Chants',
      subtitle: 'Mantra Meditation App',
      image: 'https://www.modulationdigital.com/assets/img/project/zoonixtv.png',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'bg-amber-400',
      gradient: 'from-amber-100 to-orange-50'
    },
    {
      id: 2,
      category: 'Spiritual Wellness',
      title: 'Gangotri Camphor',
      subtitle: 'Pure Divine Essence',
      image: 'https://www.modulationdigital.com/assets/img/project/zoonixtv.png',
      icon: <Flame className="w-5 h-5" />,
      color: 'bg-orange-400',
      gradient: 'from-orange-100 to-rose-50'
    },
    {
      id: 3,
      category: 'Sacred Knowledge',
      title: 'Vedic Wisdom',
      subtitle: 'Ancient Teachings Platform',
      image: 'https://www.modulationdigital.com/assets/img/project/zoonixtv.png',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'bg-rose-400',
      gradient: 'from-rose-100 to-pink-50'
    },
    {
      id: 4,
      category: 'Inner Peace',
      title: 'Bliss Institute',
      subtitle: 'Meditation & Yoga Center',
      image: 'https://www.modulationdigital.com/assets/img/project/zoonixtv.png',
      icon: <Flower className="w-5 h-5" />,
      color: 'bg-purple-400',
      gradient: 'from-purple-100 to-indigo-50'
    },
    {
      id: 5,
      category: 'Heart Centered',
      title: 'Devotion Path',
      subtitle: 'Bhakti Yoga Journey',
      image: 'https://www.modulationdigital.com/assets/img/project/zoonixtv.png',
      icon: <Heart className="w-5 h-5" />,
      color: 'bg-rose-400',
      gradient: 'from-rose-100 to-red-50'
    }
  ];

  // Handle responsive
  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, projects.length - visibleCount);

  useEffect(() => {
    if (activeSlide > maxSlide) {
      setActiveSlide(maxSlide);
    }
  }, [visibleCount, maxSlide, activeSlide]);

  // Auto-play
  useEffect(() => {
    if (isPaused || isModalOpen) return;
    
    autoPlayRef.current = setInterval(() => {
      setActiveSlide((prev) => {
        if (prev >= maxSlide) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(autoPlayRef.current);
  }, [isPaused, isModalOpen, maxSlide]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsPaused(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPaused(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  }, [maxSlide]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setTimeout(() => setIsPaused(false), 1000);
  };

  if (!isClient) return null;

  return (
    <>
      <section className="relative w-full min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-rose-200/30 rounded-full blur-[80px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px]"></div>
          
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 C50 30, 60 40, 40 70 C20 40, 30 30, 40 10' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3Cpath d='M40 10 C30 30, 20 40, 40 70 C60 40, 50 30, 40 10' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 lg:py-16">
          {/* Header - TEXT CHHOTA */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 text-center lg:text-left">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <Flower className="w-5 h-5 text-amber-600" />
                <span className="text-amber-700 text-xs font-medium tracking-[0.3em] uppercase">
                  Sacred Offerings
                </span>
                <Flower className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-700 to-rose-700 leading-tight max-w-3xl font-serif">
                DIVINE JOURNEYS OF<br />
                <span className="italic font-light text-amber-600">THE SOUL</span>
              </h2>
              <p className="mt-2 text-stone-600 text-sm lg:text-base max-w-xl">
                Transformative spiritual experiences crafted with devotion
              </p>
            </div>

            {/* Play Button with Hover Tooltip */}
            <div className="relative mx-auto lg:mx-0">
              <button 
                onClick={openModal}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="group relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-rose-300 rounded-full opacity-60 group-hover:opacity-80 transition-all duration-500 blur-md group-hover:blur-lg"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-amber-100 to-rose-200 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 border-2 border-white/50">
                  <Play className="w-6 h-6 lg:w-7 lg:h-7 text-amber-800 fill-amber-800 ml-0.5" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-amber-300/40 animate-ping"></div>
              </button>

              {/* Hover Tooltip */}
              {showTooltip && (
                <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-white rounded-xl shadow-xl border border-amber-200 p-4 w-64 animate-fade-in">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Info className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-800 text-sm mb-1">Watch Sacred Video</h4>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          Click to open our divine journey documentary. Experience spiritual wisdom and sacred practices.
                        </p>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-amber-200 rotate-45"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation - CHHOTA */}
          <div className="flex justify-between items-center mb-3 lg:hidden">
            <button 
              onClick={prevSlide}
              disabled={activeSlide === 0}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeSlide === 0 ? 'bg-stone-200 text-stone-400' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-stone-600 text-xs font-medium">
              {activeSlide + 1} / {maxSlide + 1}
            </span>
            <button 
              onClick={nextSlide}
              disabled={activeSlide >= maxSlide}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeSlide >= maxSlide ? 'bg-stone-200 text-stone-400' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Carousel - CARD SIZE SAME, TEXT CHHOTA */}
          <div 
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeSlide * (100 / visibleCount)}%)`,
              }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-amber-100/50 transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-200/50 hover:border-amber-300/50 group">
                    
                    <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10`}></div>

                    {/* IMAGE SIZE SAME */}
                    <div className="relative h-52 lg:h-60 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-40`}></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
                      
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-600 border border-amber-200/50 shadow-sm group-hover:bg-amber-100 group-hover:border-amber-300 transition-all duration-500">
                        {project.icon}
                      </div>
                    </div>

                    {/* CONTENT - TEXT CHHOTA */}
                    <div className="p-5 relative bg-white/50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-[1px] bg-amber-400"></span>
                        <span className="text-amber-700 text-[10px] font-medium tracking-widest uppercase">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-serif font-bold text-stone-800 mb-0.5 group-hover:text-amber-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-stone-500 text-xs mb-5">
                        {project.subtitle}
                      </p>

                      {/* ARROW BUTTON CHHOTA */}
                      <button className="absolute bottom-5 right-5 w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200/50 group-hover:bg-gradient-to-br group-hover:from-amber-300 group-hover:to-rose-300 group-hover:border-transparent transition-all duration-500 group-hover:scale-110 shadow-sm">
                        <ArrowUpRight className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors duration-300" />
                      </button>
                    </div>

                    <div className={`h-[2px] ${project.color} w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation - CHHOTA */}
          <div className="hidden lg:flex justify-center mt-6 gap-3">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 text-amber-600 border border-amber-200/50 hover:bg-amber-100 hover:border-amber-300 shadow-md transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-full border border-amber-200/30">
              <div className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-rose-400' : 'bg-green-400 animate-pulse'}`}></div>
              <span className="text-[10px] text-stone-600 uppercase tracking-wider">
                {isPaused ? 'Paused' : 'Auto'}
              </span>
            </div>

            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 text-amber-600 border border-amber-200/50 hover:bg-amber-100 hover:border-amber-300 shadow-md transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination - CHHOTA */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(maxSlide + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === activeSlide ? 'bg-gradient-to-r from-amber-400 to-rose-400 w-8' : 'bg-amber-200 w-1.5 hover:bg-amber-300'}`}
              />
            ))}
          </div>

          {/* Footer - CHHOTA */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 text-amber-600/60 text-xs">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-amber-400/50"></span>
              <Sun className="w-4 h-4" />
              <span className="tracking-widest uppercase font-medium">Namaste</span>
              <Moon className="w-4 h-4" />
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-amber-400/50"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all scale-100">
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-slate-600 hover:text-rose-500 hover:bg-white transition-all shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video bg-slate-900">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Spiritual Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-50 to-rose-50">
              <h3 className="text-xl font-serif font-bold text-amber-800 mb-1">
                Divine Journey Begins
              </h3>
              <p className="text-stone-600 text-sm">
                Experience the transformative power of spiritual wisdom and sacred practices.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpiritualProjectsSection;