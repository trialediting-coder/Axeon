import React from 'react';

interface HeroVideoFrameProps {
  className?: string;
}

export const HeroVideoFrame: React.FC<HeroVideoFrameProps> = ({ className = '' }) => {
  return (
    <div
      id="hero-video-frame"
      className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[calc(100vw-20px)] sm:w-[calc(100vw-32px)] md:w-[calc(100vw-48px)] lg:w-[calc(100vw-56px)] xl:w-[min(calc(100vw-64px),1880px)] rounded-2xl sm:rounded-3xl md:rounded-[36px] lg:rounded-[44px] xl:rounded-[48px] border border-gray-300/80 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.32)] overflow-hidden bg-slate-950 pointer-events-none -z-0 ${className}`}
    >
      {/* Original HTML5 Looping Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-75"
        src="/assets/landing-reel.mp4"
      >
        <source src="/assets/landing-reel.mp4" type="video/mp4" />
        <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      </video>

      {/* Clean subtle dark tint to keep the hero typography crisp and legible */}
      <div className="absolute inset-0 bg-slate-950/45 pointer-events-none" />
    </div>
  );
};
