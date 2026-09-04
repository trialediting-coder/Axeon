import React, { useState } from 'react';
import { Heart, Star, CheckCircle2, TrendingUp } from 'lucide-react';

export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  metric?: string;
  avatar?: string;
  initialLikes?: number;
  likes?: number;
  featured?: boolean;
}

interface TestimonialCardProps {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  metric?: string;
  avatar?: string;
  initialLikes?: number;
  opacity?: 'faded' | 'full';
  align?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  quote,
  author,
  role = 'Founder & CEO',
  company = 'SaaS',
  metric = '+140% Conversion',
  avatar,
  initialLikes = 12,
  opacity = 'full',
  align = 'left',
  className = '',
  onClick,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const isFaded = opacity === 'faded';

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  return (
    <div
      id={id}
      onClick={onClick}
      className={`group relative w-[285px] sm:w-[310px] lg:w-[330px] rounded-2xl p-5 sm:p-5.5 transition-all duration-300 cursor-pointer select-none ${
        isFaded
          ? 'bg-white/70 backdrop-blur-md opacity-45 hover:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.14)]'
          : 'bg-white/95 backdrop-blur-xl opacity-100 shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_48px_rgba(37,99,235,0.16)]'
      } border border-white/80 hover:border-[#2563EB]/40 ${className}`}
    >
      {/* Top row: Star rating & Quote icon */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-0.5 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} fill="currentColor" />
          ))}
          <span className="text-[10px] text-gray-400 ml-1 font-semibold">5.0</span>
        </div>

        {/* Top right quote glyph */}
        <div className="text-[#2563EB] font-serif text-2xl font-bold leading-none select-none opacity-90 group-hover:scale-110 transition-transform">
          ”
        </div>
      </div>

      {/* Quote text */}
      <p className="text-[13px] sm:text-[13.5px] leading-[1.55] text-gray-700 font-normal pr-1 line-clamp-3 group-hover:text-gray-900 transition-colors">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Metric Pill Badge if available */}
      {metric && (
        <div className="mt-2.5 inline-flex items-center gap-1 text-[10.5px] font-semibold text-[#2563EB] bg-[#2563EB]/8 px-2 py-0.5 rounded-md">
          <TrendingUp size={11} />
          <span>{metric}</span>
        </div>
      )}

      {/* Bottom Row: Author details & Interactive Heart Reaction */}
      <div className="mt-3 pt-2.5 border-t border-gray-100/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="w-6 h-6 rounded-full object-cover border border-white shadow-xs"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#2563EB] to-cyan-400 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <div className="text-[12px] sm:text-[12.5px] text-gray-800 font-semibold tracking-tight flex items-center gap-1">
              <span>— {author}</span>
              <CheckCircle2 size={10} className="text-blue-500 fill-blue-50" />
            </div>
            <div className="text-[10px] text-gray-400 font-medium -mt-0.5">
              {role}
            </div>
          </div>
        </div>

        {/* Interactive Likes button */}
        <button
          type="button"
          onClick={handleLike}
          className={`flex items-center gap-1 text-[11px] px-2 py-1 rounded-full transition-all ${
            hasLiked
              ? 'bg-[#2563EB]/15 text-[#2563EB] font-semibold'
              : 'text-gray-400 hover:text-[#2563EB] hover:bg-gray-50'
          }`}
          title="Useful review"
        >
          <Heart
            size={11}
            className={`transition-transform ${hasLiked ? 'fill-current scale-110 text-[#2563EB]' : ''}`}
          />
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
};
