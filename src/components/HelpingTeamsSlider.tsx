import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export interface SlideItem {
  id: string;
  category: string;
  categoryLabel: string;
  clientName: string;
  quote: string;
  author: string;
  role: string;
  metric: string;
  imageUrl: string;
  accentColor: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 'slide-design',
    category: 'design',
    categoryLabel: 'design',
    clientName: 'Purple',
    quote: '"In the past... we had to download all of the results and go through call by call... With Axeon, we designed a unified design system and now deploy features in a couple of hours."',
    author: 'Elena Vance',
    role: 'VP of Product Experience',
    metric: '+140% faster UI delivery',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#7C3AED',
  },
  {
    id: 'slide-operations',
    category: 'operations',
    categoryLabel: 'operations',
    clientName: 'Ollie',
    quote: '"Axeon re-engineered our internal fulfillment pipeline from the ground up. What used to take a team of eight full days is now fully orchestrated and error-free."',
    author: 'Marcus Chen',
    role: 'Chief Operating Officer',
    metric: '92% operational efficiency',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#2563EB',
  },
  {
    id: 'slide-systems',
    category: 'systems',
    categoryLabel: 'systems',
    clientName: 'Linearity',
    quote: '"Our distributed architecture was buckling under 10x traffic spikes. Axeon audited, hardened, and migrated our backend systems without a second of downtime."',
    author: 'David Sterling',
    role: 'Head of Infrastructure',
    metric: '99.99% uptime achieved',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#0EA5E9',
  },
  {
    id: 'slide-marketing',
    category: 'marketing',
    categoryLabel: 'marketing',
    clientName: 'Gusto Labs',
    quote: '"From interactive landing funnels to multi-channel attribution, the marketing engine Axeon built drove the highest qualified lead volume in our company history."',
    author: 'Sophia Ramirez',
    role: 'Chief Growth Officer',
    metric: '3.4x inbound pipeline',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F59E0B',
  },
  {
    id: 'slide-technology',
    category: 'technology',
    categoryLabel: 'technology',
    clientName: 'Chime Tech',
    quote: '"Their engineers integrated real-time analytics and predictive AI workflows into our core SaaS stack with breathtaking precision and speed."',
    author: 'Julian Reed',
    role: 'Director of Technology',
    metric: '<45ms latency benchmark',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#10B981',
  },
  {
    id: 'slide-workflow',
    category: 'workflow',
    categoryLabel: 'workflow',
    clientName: 'Wayfair Sync',
    quote: '"Axeon unified four disparate tools into one seamless workflow canvas. Team friction dropped immediately, and sprint output doubled in the first month."',
    author: 'Chloe Dupont',
    role: 'Head of Agile Delivery',
    metric: '2.2x sprint completion',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#6366F1',
  },
  {
    id: 'slide-growth',
    category: 'growth',
    categoryLabel: 'growth',
    clientName: 'WealthScale',
    quote: '"We scaled from Series A to Series B without hiring 15 extra headcount because Axeon built the growth leverage and high-converting systems we needed."',
    author: 'Alexander Wright',
    role: 'Managing Director',
    metric: '$18M ARR milestone',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#EC4899',
  },
];

interface HelpingTeamsSliderProps {
  onOpenProjects: () => void;
  onBookCall: () => void;
}

export const HelpingTeamsSlider: React.FC<HelpingTeamsSliderProps> = ({
  onOpenProjects,
  onBookCall,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTextAnimating, setIsTextAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const activeSlide = SLIDES[activeIndex];

  // Silky smooth interval timer with pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIsTextAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % SLIDES.length);
        setIsTextAnimating(false);
      }, 220);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleSelectSlide = (index: number) => {
    if (index === activeIndex) return;
    setIsTextAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTextAnimating(false);
    }, 180);
  };

  const handleNext = () => {
    setIsTextAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
      setIsTextAnimating(false);
    }, 180);
  };

  const handlePrev = () => {
    setIsTextAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
      setIsTextAnimating(false);
    }, 180);
  };

  // Touch Swipe gestures for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="helping-teams-section"
      className="w-full min-h-[100dvh] flex flex-col justify-center py-8 xs:py-10 sm:py-16 lg:py-20 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        {/* CENTERED DYNAMIC HEADLINE */}
        <ScrollReveal direction="up" distance={20} duration={500} className="mb-4 xs:mb-6 sm:mb-12 text-center flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 xs:gap-2 sm:gap-4 flex-wrap">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-gray-900 tracking-tight font-display">
              Helping teams improve
            </h2>

            {/* Changing Word Container with silky smooth vertical fade/slide flip */}
            <div className="inline-flex items-center">
              <div
                id="active-category-pill"
                className="inline-flex items-center justify-center min-w-[130px] xs:min-w-[160px] sm:min-w-[240px] h-[42px] xs:h-[48px] sm:h-[68px] px-3.5 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 rounded-xl xs:rounded-2xl bg-gray-100/95 hover:bg-gray-200/80 border border-gray-200 text-gray-900 text-lg xs:text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-tight shadow-xs transition-all duration-300 overflow-hidden"
              >
                <span
                  key={activeSlide.category}
                  className={`inline-block font-display capitalize transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                    isTextAnimating
                      ? 'opacity-0 -translate-y-3 scale-95 blur-[1px]'
                      : 'opacity-100 translate-y-0 scale-100 blur-none'
                  }`}
                >
                  {activeSlide.categoryLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Category Quick-Selector (Horizontal touch-scrollable chip bar) */}
          <div className="md:hidden mt-3 xs:mt-4 w-full flex items-center justify-center overflow-x-auto no-scrollbar py-1 gap-1.5 px-1">
            {SLIDES.map((slide, idx) => (
              <button
                key={`mob-tab-${slide.id}`}
                type="button"
                onClick={() => handleSelectSlide(idx)}
                className={`text-[11px] xs:text-xs px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full whitespace-nowrap font-medium transition-all cursor-pointer ${
                  idx === activeIndex
                    ? 'bg-[#2563EB] text-white shadow-xs font-semibold'
                    : 'bg-white/80 text-gray-600 border border-gray-200/80 hover:bg-white'
                }`}
              >
                {slide.category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ENLARGED SLIDER SHOWCASE WRAPPER */}
        <ScrollReveal direction="up" distance={28} delay={100} duration={600}>
          <div
            className="relative flex items-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* DESKTOP LEFT ARROW */}
            <button
              id="slider-prev-arrow-left"
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="hidden md:flex absolute -left-3 sm:-left-6 lg:-left-7 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/95 hover:bg-white text-gray-800 hover:text-gray-950 border border-gray-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.16)] items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md group cursor-pointer"
            >
              <ChevronLeft size={28} className="stroke-[2.5] group-hover:-translate-x-1 transition-transform duration-200" />
            </button>

            {/* MOBILE ONLY: Single Featured Slide Card with Smooth Swipe */}
            <div className="md:hidden w-full h-[380px] xs:h-[420px] sm:h-[460px] relative rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-gray-900/10">
              <img
                src={activeSlide.imageUrl}
                alt={activeSlide.clientName}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />

              {/* Top Row on Mobile Card */}
              <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-white font-extrabold tracking-tight text-xl font-display">
                    {activeSlide.clientName.toLowerCase()}
                  </span>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/20">
                    {activeSlide.category}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[11px] font-semibold border border-white/20">
                  <Sparkles size={11} className="text-amber-300" />
                  <span>{activeSlide.metric}</span>
                </div>
              </div>

              {/* Mobile Arrows Floating Overlay */}
              <div className="absolute inset-y-0 inset-x-2 z-20 flex items-center justify-between pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center pointer-events-auto border border-white/20 active:scale-95 transition-transform"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center pointer-events-auto border border-white/20 active:scale-95 transition-transform"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Bottom Quote on Mobile Card */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex flex-col justify-end">
                <p className="text-white text-sm xs:text-[15px] font-medium leading-relaxed line-clamp-4 drop-shadow-md">
                  {activeSlide.quote}
                </p>

                <div className="mt-3.5 pt-3 border-t border-white/20 flex items-center justify-between gap-2 text-white">
                  <div>
                    <div className="font-bold text-sm text-white font-display">
                      {activeSlide.author}
                    </div>
                    <div className="text-[11px] text-white/80 font-normal">
                      {activeSlide.role}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onBookCall}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-gray-900 text-xs font-bold shadow-md active:scale-95 transition-transform shrink-0"
                  >
                    <span>Partner</span>
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP ONLY: EXPANDING HORIZONTAL ACCORDION */}
            <div
              id="testimonial-accordion-container"
              className="hidden md:flex gap-3.5 sm:gap-4 h-[500px] sm:h-[560px] lg:h-[600px] w-full"
            >
              {SLIDES.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={slide.id}
                    id={`testimonial-panel-${slide.category}`}
                    onClick={() => handleSelectSlide(index)}
                    className={`relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? 'flex-[6] sm:flex-[7] md:flex-[5.5] shadow-[0_24px_55px_rgba(0,0,0,0.18)] ring-1 ring-black/5'
                        : 'flex-[1] opacity-75 hover:opacity-100 hover:flex-[1.4] brightness-90 hover:brightness-100 shadow-xs'
                    }`}
                  >
                    {/* Photo Background with Gentle Zoom */}
                    <img
                      src={slide.imageUrl}
                      alt={slide.clientName}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        transform: isActive ? 'scale(1.03)' : 'scale(1.15)',
                      }}
                    />

                    {/* Gradient Scrim Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        isActive
                          ? 'bg-gradient-to-t from-black/90 via-black/45 to-black/25'
                          : 'bg-black/45 hover:bg-black/25'
                      }`}
                    />

                    {/* Top Client Logo / Brand Pill (Expanded Active Slide) */}
                    {isActive ? (
                      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 flex items-center justify-between right-6 sm:right-8 animate-in fade-in duration-500">
                        <div className="flex items-center gap-3">
                          <div className="text-white font-extrabold tracking-tight text-2xl sm:text-3xl font-display drop-shadow-md">
                            {slide.clientName.toLowerCase()}
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                            {slide.category}
                          </span>
                        </div>

                        {/* Key Metric Badge */}
                        <div className="hidden sm:inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold border border-white/20 shadow-md">
                          <Sparkles size={14} className="text-amber-300" />
                          <span>{slide.metric}</span>
                        </div>
                      </div>
                    ) : (
                      /* Inactive Collapsed Panel Vertical Category Label */
                      <div className="absolute inset-0 flex flex-col items-center justify-between p-5 z-10">
                        <span className="text-white font-bold text-xs sm:text-sm capitalize tracking-wider [writing-mode:vertical-lr] rotate-180 drop-shadow-sm">
                          {slide.category}
                        </span>
                        <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                      </div>
                    )}

                    {/* Bottom Testimonial Quote & Info (Active Slide) */}
                    {isActive && (
                      <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 lg:p-10 z-20 flex flex-col justify-end animate-in fade-in duration-500">
                        <p className="text-white text-lg sm:text-xl lg:text-[23px] font-medium leading-relaxed max-w-3xl drop-shadow-md">
                          {slide.quote}
                        </p>

                        <div className="mt-6 pt-4 border-t border-white/25 flex flex-wrap items-center justify-between gap-4 text-white">
                          <div>
                            <div className="font-bold text-base sm:text-lg text-white font-display">
                              {slide.author}
                            </div>
                            <div className="text-xs sm:text-sm text-white/85 font-normal mt-0.5">
                              {slide.role} • {slide.clientName}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onBookCall();
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 text-xs sm:text-sm font-bold hover:bg-gray-100 transition-all shadow-md hover:scale-105 active:scale-95"
                          >
                            <span>Partner with us</span>
                            <ArrowRight size={14} strokeWidth={2.5} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* DESKTOP RIGHT ARROW */}
            <button
              id="slider-next-arrow-right"
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="hidden md:flex absolute -right-3 sm:-right-6 lg:-right-7 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/95 hover:bg-white text-gray-800 hover:text-gray-950 border border-gray-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.16)] items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md group cursor-pointer"
            >
              <ChevronRight size={28} className="stroke-[2.5] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Bottom Controls Bar: Progress Dots + Case Studies Link */}
          <div className="mt-5 sm:mt-6 flex items-center justify-between">
            {/* Slide Index Progress Pill */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === activeIndex
                      ? 'w-6 sm:w-8 bg-gray-900'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs sm:text-sm text-gray-500 ml-2 font-medium">
                {activeIndex + 1} / {SLIDES.length}
              </span>
            </div>

            {/* "Explore case studies →" link */}
            <button
              id="explore-case-studies-btn"
              type="button"
              onClick={onOpenProjects}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base font-semibold text-gray-700 hover:text-[#2563EB] transition-colors group cursor-pointer"
            >
              <span>Explore case studies</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
