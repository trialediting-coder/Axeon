import React from 'react';
import { ArrowRight, Check, Calendar, Sparkles, Clock, ShieldCheck, Rocket } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HowItWorksSectionProps {
  onBookCall: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onBookCall }) => {
  return (
    <section
      id="how-it-works-section"
      className="w-full min-h-[100dvh] flex flex-col justify-center py-8 xs:py-10 sm:py-16 lg:py-20 px-2 xs:px-4 sm:px-6 lg:px-8 relative z-20 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Eyebrow & Main Section Headline with Scroll Animation */}
        <ScrollReveal direction="up" distance={24} duration={600} className="text-center mb-6 xs:mb-8 sm:mb-16">
          <p className="text-[11px] xs:text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-1 sm:mb-2.5 font-display">
            HOW IT WORKS
          </p>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] font-extrabold text-gray-950 tracking-tight font-display max-w-3xl mx-auto">
            <span className="font-serif-italic font-normal text-[#2563EB]">Great design</span>, done simply &amp;{' '}
            <span className="font-serif-italic font-normal text-[#2563EB]">delivered fast.</span>
          </h2>
        </ScrollReveal>

        {/* 3 Step Cards with Crisp Alignment & Pure Light Aesthetics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-8 items-stretch">
          {/* Card 1: Let's talk! */}
          <ScrollReveal
            direction="up"
            distance={28}
            delay={0}
            duration={600}
            className="w-full h-full"
          >
            <div
              id="step-card-talk"
              className="group bg-white/95 rounded-2xl sm:rounded-[34px] border border-gray-200/90 p-4 xs:p-6 sm:p-9 lg:p-10 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)] hover:border-blue-300/80 transition-all duration-300 min-h-[350px] xs:min-h-[400px] sm:min-h-[530px] h-full"
            >
              {/* Top Visual Graphic Box (Light Theme, Zero Dark Overlay) */}
              <div className="relative h-[160px] xs:h-[185px] sm:h-[225px] w-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-blue-50/80 via-blue-50/40 to-gray-50/60 border border-blue-100/90 p-4 sm:p-5 flex items-center justify-center overflow-hidden mb-5 sm:mb-7">
                {/* Subtle Dot Grid */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Interactive Discovery Call Card Widget */}
                <div className="relative w-full max-w-[250px] bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-sm border border-gray-200/90 flex flex-col gap-2.5 sm:gap-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center">
                        <Calendar size={14} strokeWidth={2.5} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-gray-900 font-display">Discovery Call</span>
                    </div>
                    <span className="text-[10px] sm:text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80 flex items-center gap-1">
                      <Clock size={10} />
                      30 mins
                    </span>
                  </div>

                  <div className="h-px bg-gray-100 w-full" />

                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-gray-700">
                    <div className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>Zero commitment needed</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-gray-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <ShieldCheck size={10} strokeWidth={3} />
                    </div>
                    <span>Direct founder consultation</span>
                  </div>
                </div>
              </div>

              {/* Step Content: Aligned Neatly with Number Badge */}
              <div className="text-left">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-[#2563EB] text-xs sm:text-sm font-extrabold flex items-center justify-center font-display shrink-0">
                    01
                  </span>
                  <h3 className="text-xl sm:text-[28px] font-extrabold text-gray-950 tracking-tight font-display">
                    Let&apos;s talk!
                  </h3>
                </div>
                <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-normal">
                  Book a 30-minute discovery call. It&apos;s simple, easy, and there&apos;s no commitment.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Request & Build */}
          <ScrollReveal
            direction="up"
            distance={28}
            delay={120}
            duration={600}
            className="w-full h-full"
          >
            <div
              id="step-card-request"
              className="group bg-white/95 rounded-2xl sm:rounded-[34px] border border-gray-200/90 p-5 xs:p-6 sm:p-9 lg:p-10 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)] hover:border-blue-300/80 transition-all duration-300 min-h-[380px] xs:min-h-[420px] sm:min-h-[530px] h-full"
            >
              {/* Top Visual Graphic Box (Light Theme, Zero Dark Overlay) */}
              <div className="relative h-[160px] xs:h-[185px] sm:h-[225px] w-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-gray-50/80 via-blue-50/30 to-gray-100/50 border border-gray-200/80 p-4 sm:p-5 flex items-center justify-center overflow-hidden mb-5 sm:mb-7">
                {/* Subtle Dot Grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Workflow Stack Widget */}
                <div className="relative w-full max-w-[250px] flex flex-col gap-2 group-hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-2xs border border-gray-200/90 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-gray-900">Custom Landing Build</div>
                      <div className="text-[10px] text-gray-400">⚡ Sprint In-Progress</div>
                    </div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full">
                      Building
                    </span>
                  </div>
                  <div className="bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-2xs border border-emerald-200/90 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-gray-900">Operations &amp; Systems</div>
                      <div className="text-[10px] text-gray-400">✨ Ready for QA</div>
                    </div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                      Review
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Content: Aligned Neatly with Number Badge */}
              <div className="text-left">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-[#2563EB] text-xs sm:text-sm font-extrabold flex items-center justify-center font-display shrink-0">
                    02
                  </span>
                  <h3 className="text-xl sm:text-[28px] font-extrabold text-gray-950 tracking-tight font-display">
                    Request &amp; Build
                  </h3>
                </div>
                <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-normal">
                  Share your design needs, systems setup, or marketing goals. We get straight to work.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Launch & Scale */}
          <ScrollReveal
            direction="up"
            distance={28}
            delay={240}
            duration={600}
            className="w-full h-full"
          >
            <div
              id="step-card-launch"
              className="group bg-white/95 rounded-2xl sm:rounded-[34px] border border-gray-200/90 p-5 xs:p-6 sm:p-9 lg:p-10 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)] hover:border-blue-300/80 transition-all duration-300 min-h-[380px] xs:min-h-[420px] sm:min-h-[530px] h-full"
            >
              {/* Top Visual Graphic Box */}
              <div className="relative h-[160px] xs:h-[185px] sm:h-[225px] w-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-blue-50/90 via-indigo-50/40 to-gray-50/60 border border-blue-100/90 p-4 sm:p-5 flex items-center justify-center overflow-hidden mb-5 sm:mb-7">
                {/* Subtle Dot Grid */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Production Ready Light Widget */}
                <div className="relative w-full max-w-[250px] bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-sm border border-blue-100 flex flex-col items-center group-hover:scale-105 transition-transform duration-300 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-100 text-[#2563EB] flex items-center justify-center mb-2 shadow-xs">
                    <Rocket size={20} className="stroke-[2.2]" />
                  </div>
                  <div className="text-gray-950 font-extrabold text-xs sm:text-base font-display">
                    Production Ready
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                    Fast turnaround &amp; continuous scale
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-[10.5px] font-bold border border-emerald-200/70">
                    <Sparkles size={10} className="text-emerald-600" />
                    <span>Active Deployment</span>
                  </div>
                </div>
              </div>

              {/* Step Content: Aligned Neatly with Number Badge */}
              <div className="text-left">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-[#2563EB] text-xs sm:text-sm font-extrabold flex items-center justify-center font-display shrink-0">
                    03
                  </span>
                  <h3 className="text-xl sm:text-[28px] font-extrabold text-gray-950 tracking-tight font-display">
                    Launch &amp; Scale
                  </h3>
                </div>
                <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-normal">
                  Receive production-ready assets and systems within days. We stay ready for your next phase.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom CTA Banner */}
        <ScrollReveal
          direction="up"
          distance={24}
          delay={200}
          duration={600}
          className="mt-8 sm:mt-16 bg-gradient-to-r from-gray-950 via-[#1E3A8A] to-[#2563EB] rounded-2xl sm:rounded-[34px] p-6 sm:p-11 text-white flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-[0_20px_50px_rgba(37,99,235,0.22)] relative overflow-hidden"
        >
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-200 text-xs font-semibold mb-2 sm:mb-3">
              <Sparkles size={12} className="text-amber-300" />
              <span>Free 30-Minute Consultation</span>
            </div>
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white leading-tight">
              Ready to build systems that scale your business?
            </h3>
            <p className="mt-1.5 sm:mt-2 text-blue-100 text-xs sm:text-base leading-relaxed">
              Partner with Axeon. Get dedicated product design, brand identity, and custom web builds.
            </p>
          </div>

          <div className="relative z-10 w-full sm:w-auto shrink-0">
            <button
              id="how-it-works-book-btn"
              type="button"
              onClick={onBookCall}
              className="w-full sm:w-auto bg-white hover:bg-blue-50 text-[#1E3A8A] font-bold text-sm sm:text-base px-6 py-3.5 sm:px-7 rounded-full flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all cursor-pointer min-h-[48px]"
            >
              <span>Book A Discovery Call</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        </ScrollReveal>
      </div>
    </section>
  );
};
