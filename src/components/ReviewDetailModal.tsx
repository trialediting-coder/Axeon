import React from 'react';
import { X, Star, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';
import { TestimonialData } from './TestimonialCard';

interface ReviewDetailModalProps {
  review: TestimonialData | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const ReviewDetailModal: React.FC<ReviewDetailModalProps> = ({
  review,
  onClose,
  onBookCall,
}) => {
  if (!review) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.2)] border border-white/80 overflow-hidden max-h-[92dvh] overflow-y-auto overscroll-contain animate-in fade-in zoom-in-95 duration-200">
        <button
          id="close-review-detail-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Rating and Verified Badge */}
        <div className="flex items-center justify-between mb-4 pr-8">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
            <span className="text-xs font-bold text-gray-800 ml-1">5.0 Verified Review</span>
          </div>

          <span className="text-[10.5px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 size={11} />
            Verified Client
          </span>
        </div>

        {/* Big Quote */}
        <div className="relative my-3 sm:my-4 pl-3.5 sm:pl-4 border-l-2 border-[#2563EB]">
          <p className="text-sm xs:text-base sm:text-lg text-gray-800 font-medium leading-relaxed italic">
            &ldquo;{review.quote}&rdquo;
          </p>
        </div>

        {/* Metrics Box */}
        {review.metric && (
          <div className="bg-[#FAF9F8] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-gray-100 flex items-center justify-between my-4">
            <div>
              <div className="text-[10.5px] sm:text-[11px] text-gray-500 font-medium">Recorded Impact with Axeon</div>
              <div className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5">{review.metric}</div>
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
              <TrendingUp size={18} />
            </div>
          </div>
        )}

        {/* Author Card */}
        <div className="flex items-center gap-3 pt-2 pb-4 border-b border-gray-100">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#2563EB] to-cyan-400 text-white font-bold text-sm sm:text-base flex items-center justify-center shadow-sm shrink-0">
            {review.author.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-1.5 font-display">
              <span>{review.author}</span>
            </div>
            <div className="text-xs text-gray-500 font-medium">
              {review.role} • {review.company || 'Partner'}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 sm:mt-5 flex flex-col xs:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full xs:w-auto text-xs font-semibold text-gray-500 hover:text-gray-800 px-3 py-2.5 min-h-[40px]"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="w-full xs:w-auto bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,99,235,0.3)] transition-all min-h-[44px] cursor-pointer"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
