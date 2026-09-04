import React from 'react';
import { X, ArrowRight, ShieldCheck, Zap, Users, CheckCircle2, MapPin, TrendingUp, Sparkles } from 'lucide-react';

interface WhyAxeonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
  onOpenAudit: () => void;
}

export const WhyAxeonModal: React.FC<WhyAxeonModalProps> = ({
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
          id="close-why-modal-btn"
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-[11px] font-bold uppercase tracking-wider font-display">
              <MapPin size={11} />
              Des Moines, Iowa
            </span>
            <span className="text-xs text-gray-400 font-medium">Digital Product Studio</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950 font-display">
            Why Axeon
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-1.5 leading-relaxed">
            We are a digital product and design systems studio founded in Des Moines, Iowa. We build high-converting websites, web apps, and digital infrastructure for businesses that want world-class execution without coastal agency overhead or endless timelines.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-6">
          <div className="p-4 rounded-xl sm:rounded-2xl bg-gray-50/90 border border-gray-200/70">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center mb-3">
              <Users size={18} />
            </div>
            <h4 className="text-sm font-bold text-gray-900 font-display">
              Direct Senior Builders
            </h4>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              When you hire Axeon, you work directly with principal product designers and full-stack software engineers—not junior account managers or outsourced handoffs.
            </p>
          </div>

          <div className="p-4 rounded-xl sm:rounded-2xl bg-gray-50/90 border border-gray-200/70">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Zap size={18} />
            </div>
            <h4 className="text-sm font-bold text-gray-900 font-display">
              14-Day Delivery Sprints
            </h4>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              No endless committee meetings or 6-month timelines. We operate in rapid 2-week execution sprints, turning strategies into launched products in record time.
            </p>
          </div>

          <div className="p-4 rounded-xl sm:rounded-2xl bg-gray-50/90 border border-gray-200/70">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
              <TrendingUp size={18} />
            </div>
            <h4 className="text-sm font-bold text-gray-900 font-display">
              Engineered For Conversion
            </h4>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Beautiful design is only half the battle. Every system we build is architected for speed, top Core Web Vitals scores, search ranking, and qualified inbound leads.
            </p>
          </div>

          <div className="p-4 rounded-xl sm:rounded-2xl bg-gray-50/90 border border-gray-200/70">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
              <ShieldCheck size={18} />
            </div>
            <h4 className="text-sm font-bold text-gray-900 font-display">
              Rooted in Des Moines, Iowa
            </h4>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              We understand Midwest business values—integrity, accountability, transparent sprint pricing, and real ROI with 100% client code ownership.
            </p>
          </div>
        </div>

        {/* Stats / Proof Points */}
        <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50/90 via-white to-gray-50/90 border border-blue-100 p-4 sm:p-5 mb-6">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#2563EB] font-display">50+</div>
              <div className="text-[11px] sm:text-xs text-gray-600 mt-0.5">Projects Delivered</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-gray-950 font-display">2.8x</div>
              <div className="text-[11px] sm:text-xs text-gray-600 mt-0.5">Average Conversion Lift</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 font-display">100%</div>
              <div className="text-[11px] sm:text-xs text-gray-600 mt-0.5">On-Time Sprint Guarantee</div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Serving Des Moines, Iowa and forward-thinking businesses nationwide</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenAudit();
              }}
              className="flex-1 sm:flex-none text-xs font-semibold px-4 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors cursor-pointer"
            >
              Get Free Web Audit
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="flex-1 sm:flex-none text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Book Free 30-Min Call</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Also export as AboutAxeonModal for backward compatibility
export const AboutAxeonModal = WhyAxeonModal;
