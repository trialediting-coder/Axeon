import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose, onBookCall }) => {
  if (!isOpen) return null;

  const projects = [
    {
      title: 'Narrativ SaaS',
      category: 'Product & Web App Redesign',
      metric: '+142% Conversion Rate',
      description: 'Complete brand overhaul and conversion architecture for an AI workflow automation suite.',
      image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85',
      tags: ['SaaS', 'Framer', 'Design System'],
    },
    {
      title: 'Luminar Cloud',
      category: 'Fintech Landing Page & UI',
      metric: '$4.2M Seed Raised Post-Launch',
      description: 'High-end aesthetic design with micro-interactions, interactive pricing calculators, and responsive design.',
      image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85',
      tags: ['Web Design', '3D Graphics', 'Copywriting'],
    },
    {
      title: 'HyperScale AI',
      category: 'Developer Platform',
      metric: '3.8x More Signups',
      description: 'Developer-first documentation and marketing portal built for maximum readability and conversion velocity.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tags: ['DevTools', 'UI/UX', 'Tailwind'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-white/80 overflow-hidden max-h-[92dvh] overflow-y-auto overscroll-contain">
        <button
          id="close-projects-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-gray-100/80 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        <div className="mb-5 sm:mb-6 pr-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-1 font-display">
            Axeon Client Case Studies
          </div>
          <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900 font-display">
            Recent Projects &amp; Conversions
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Explore how Axeon builds conversion-first websites and software for world-class founders.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <div className="sm:w-2/5 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shrink-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10.5px] sm:text-[11px] font-semibold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-0.5 rounded-full">
                      {p.metric}
                    </span>
                    <div className="flex gap-1">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[9.5px] sm:text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mt-2 font-display">{p.title}</h4>
                  <p className="text-xs font-medium text-gray-500 mb-1 sm:mb-2">{p.category}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{p.description}</p>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Delivered in 3 weeks</span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onBookCall();
                    }}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1d4ed8] flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>Request similar project</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 text-center sm:text-left">
            Ready to give your business the premium web presence it deserves?
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all min-h-[44px] cursor-pointer"
          >
            <span>Book A Discovery Call</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
