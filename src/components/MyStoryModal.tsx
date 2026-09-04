import React from 'react';
import { X, ArrowRight, Heart, Sparkles, MapPin, CheckCircle2, Shield } from 'lucide-react';

interface MyStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
  onOpenAudit: () => void;
}

export const MyStoryModal: React.FC<MyStoryModalProps> = ({
  isOpen,
  onClose,
  onBookCall,
  onOpenAudit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-white/80 overflow-hidden max-h-[92dvh] overflow-y-auto overscroll-contain">
        {/* Close Button */}
        <button
          id="close-my-story-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-gray-100/80 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider font-display">
              <Sparkles size={11} className="text-emerald-600" />
              Founder&apos;s Perspective
            </span>
            <span className="text-xs text-gray-400 font-medium">Built in Iowa</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950 font-display">
            My Story &amp; Why Axeon Exists
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
            The mission to bring world-class digital craftsmanship to Iowa businesses and ambitious founders.
          </p>
        </div>

        {/* Narrative Content */}
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80">
            <p className="font-medium text-gray-900 leading-relaxed italic">
              &ldquo;I started Axeon with a simple conviction: Businesses in Des Moines and across the Midwest deserve the same caliber of design, technical speed, and product craftsmanship as top Silicon Valley venture-backed companies—without having to pay bloated coastal agency markups.&rdquo;
            </p>
          </div>

          <p>
            For years, I watched business owners in Des Moines get caught between two frustrating extremes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80">
              <div className="text-xs font-bold text-gray-900 mb-1">1. Overpriced Legacy Agencies</div>
              <p className="text-xs text-gray-600 leading-normal">
                Lengthy 6-month timelines, endless layers of account managers, and $30k+ invoices for slow WordPress templates that don&apos;t convert visitors into customers.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80">
              <div className="text-xs font-bold text-gray-900 mb-1">2. Generic Cookie-Cutter Sites</div>
              <p className="text-xs text-gray-600 leading-normal">
                Cheap drag-and-drop templates that look identical to every competitor in town, suffer from poor mobile loading speeds, and fail to generate real qualified revenue.
              </p>
            </div>
          </div>

          <p>
            Axeon was built to be the antidote. A lean, high-velocity engineering and design partner where you work directly with me and senior craftspeople. We treat your digital presence not as a vanity project, but as your most important business asset.
          </p>

          <p>
            Whether it&apos;s a high-growth SaaS platform needing an intuitive web application, a local Des Moines service company wanting to dominate regional search and bookings, or an established enterprise modernizing its brand system—we build systems that actually move the needle.
          </p>

          {/* Personal Guarantees Box */}
          <div className="mt-4 p-4 rounded-2xl bg-gray-50/90 border border-gray-200">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-900 uppercase tracking-wider font-display">
              <Shield size={14} className="text-[#2563EB]" />
              <span>My Commitment to Every Client</span>
            </div>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero Fluff, Real Results:</strong> Clear, measurable goals on user conversion, site speed, and search visibility.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Handoff to Juniors:</strong> Direct communication with the senior creators writing your code and designing your screens.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Iowa Hospitality &amp; Reliability:</strong> We answer when you call, ship when we promise, and stand behind our work.</span>
              </li>
            </ul>
          </div>

          {/* Founder Sign-off */}
          <div className="pt-2 flex items-center justify-between">
            <div>
              <div className="font-bold text-gray-950 font-display text-sm">The Axeon Team</div>
              <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                <MapPin size={11} className="text-[#2563EB]" />
                <span>Des Moines, Iowa</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <Heart size={13} className="text-rose-500 fill-rose-500" />
              <span>Proudly based in Iowa</span>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenAudit();
            }}
            className="w-full sm:w-auto text-xs font-semibold px-4 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors cursor-pointer"
          >
            Get Free Web Audit
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <span>Book a Quick 30-Min Call</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
