import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TemplateModal: React.FC<TemplateModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGet = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-white/80 overflow-hidden max-h-[92dvh] overflow-y-auto overscroll-contain">
        <button
          id="close-template-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-gray-100/80 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-2 pr-8">
          <span className="p-1.5 rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
            <Sparkles size={16} />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] font-display">
            Official Release
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight font-display pr-8">
          Axeon — Design &amp; Systems Template
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-4 sm:mb-6">
          The exact, high-conversion design framework built with React, Vite, Tailwind CSS, and luminous WebGL shaders.
        </p>

        <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
          <div className="flex items-start gap-2.5 text-xs text-gray-700">
            <span className="p-1 rounded-full bg-emerald-100 text-emerald-600 mt-0.5 shrink-0">
              <Check size={12} strokeWidth={3} />
            </span>
            <span><strong>Full Source Code</strong>: 100% customizable React + Tailwind components</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-gray-700">
            <span className="p-1 rounded-full bg-emerald-100 text-emerald-600 mt-0.5 shrink-0">
              <Check size={12} strokeWidth={3} />
            </span>
            <span><strong>Luminous Shader Engine</strong>: GPU-accelerated liquid frosted glass background</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-gray-700">
            <span className="p-1 rounded-full bg-emerald-100 text-emerald-600 mt-0.5 shrink-0">
              <Check size={12} strokeWidth={3} />
            </span>
            <span><strong>Conversion-Optimized</strong>: Floating social proof stacks & discovery modal</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-gray-700">
            <span className="p-1 rounded-full bg-emerald-100 text-emerald-600 mt-0.5 shrink-0">
              <Check size={12} strokeWidth={3} />
            </span>
            <span><strong>Lifetime Updates</strong>: Free access to new section presets & Figma files</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between mb-5 sm:mb-6">
          <div>
            <div className="text-xs text-gray-400 font-medium">Standard License</div>
            <div className="text-lg sm:text-xl font-bold text-gray-900 flex items-baseline gap-2 font-display">
              $49 <span className="text-xs text-gray-400 font-normal line-through">$99</span>
            </div>
          </div>
          <span className="text-[10.5px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
            50% Launch Discount
          </span>
        </div>

        <button
          type="button"
          onClick={handleGet}
          className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-3.5 px-6 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(37,99,235,0.35)] transition-all min-h-[48px] cursor-pointer"
        >
          <span>{copied ? 'Template Added to Workspace!' : 'Get Axeon Template Now'}</span>
          <ArrowRight size={16} />
        </button>

        <div className="mt-3 sm:mt-4 text-center text-[10.5px] sm:text-[11px] text-gray-400">
          Instant download • 14-day money-back guarantee • Commercial use allowed
        </div>
      </div>
    </div>
  );
};
