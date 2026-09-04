import React, { useState } from 'react';
import {
  X,
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Users,
  Send,
  ExternalLink,
} from 'lucide-react';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall?: () => void;
}

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'senior-fullstack',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Des Moines, IA or Remote (US)',
    type: 'Full-time / Sprint-based',
    experience: '5+ years',
    description:
      'Lead development of high-velocity web apps and client systems using React, Vite, TypeScript, and modern API architectures. Build clean, accessible, 99+ Core Web Vitals software.',
    requirements: [
      'Strong mastery of modern TypeScript, React, and Tailwind CSS',
      'Experience architecting robust full-stack APIs and state machines',
      'Passion for speed, code craft, micro-interactions, and accessibility',
      'Comfortable communicating directly with clients during sprints',
    ],
  },
  {
    id: 'lead-product-designer',
    title: 'Lead Product & UX/UI Designer',
    department: 'Design',
    location: 'Des Moines, IA or Remote (US)',
    type: 'Full-time',
    experience: '4+ years',
    description:
      'Own end-to-end design from wireframing to high-fidelity design systems. Create conversion-centered user experiences that drive measurable revenue lifts for ambitious companies.',
    requirements: [
      'Portfolio showcasing complex web applications and conversion funnels',
      'Deep understanding of typography math, layout spacing, and accessibility',
      'Fluency in Figma, design tokens, and collaborating with engineers',
      'Proven ability to articulate design choices based on user psychology',
    ],
  },
  {
    id: 'growth-strategy-lead',
    title: 'Digital Strategist & Growth Partner',
    department: 'Growth & Strategy',
    location: 'Des Moines, IA (Hybrid / Remote)',
    type: 'Full-time',
    experience: '3+ years',
    description:
      'Work hand-in-hand with Iowa business owners and founders to diagnose bottlenecks, craft strategic digital roadmaps, and oversee sprint success.',
    requirements: [
      'Background in B2B web strategy, conversion optimization, or agency account leadership',
      'Midwest integrity: exceptional verbal and written communication skills',
      'Experience analyzing web analytics, SEO performance, and pipeline conversion',
      'High ownership mentality with obsession for client outcomes',
    ],
  },
];

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantLink, setApplicantLink] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  if (!isOpen) return null;

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    setApplicationSubmitted(true);
  };

  const handleReset = () => {
    setSelectedJob(null);
    setApplicationSubmitted(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantLink('');
    setApplicantNote('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={() => {
          handleReset();
          onClose();
        }}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-white/80 overflow-hidden max-h-[92dvh] overflow-y-auto overscroll-contain">
        {/* Close Button */}
        <button
          id="close-careers-modal-btn"
          type="button"
          onClick={() => {
            handleReset();
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-gray-100/80 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-[11px] font-bold uppercase tracking-wider font-display">
              <Sparkles size={11} />
              We're Growing
            </span>
            <span className="text-xs text-gray-400 font-medium">Des Moines &amp; Remote</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950 font-display">
            Careers at Axeon
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-1.5 leading-relaxed">
            We are a collective of senior digital builders. No junior fluff, no endless committee meetings—just high-velocity design and engineering that creates lasting value.
          </p>
        </div>

        {/* Studio Culture Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-gray-50/90 border border-gray-200/70">
            <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center mb-2">
              <Users size={16} />
            </div>
            <h4 className="text-xs font-bold text-gray-950 font-display">Zero Red Tape</h4>
            <p className="text-[11px] text-gray-600 mt-0.5 leading-normal">
              Direct peer collaboration with senior teammates and founders.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-gray-50/90 border border-gray-200/70">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
              <Zap size={16} />
            </div>
            <h4 className="text-xs font-bold text-gray-950 font-display">2-Week Sprints</h4>
            <p className="text-[11px] text-gray-600 mt-0.5 leading-normal">
              Continuous delivery of working code instead of slide decks.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-gray-50/90 border border-gray-200/70">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2">
              <Briefcase size={16} />
            </div>
            <h4 className="text-xs font-bold text-gray-950 font-display">Autonomous Craft</h4>
            <p className="text-[11px] text-gray-600 mt-0.5 leading-normal">
              Competitive compensation, equipment stipends, and flexible hours.
            </p>
          </div>
        </div>

        {/* Position Detail or Application View */}
        {selectedJob ? (
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-blue-50/40 via-white to-gray-50/60 border border-blue-100/90 mb-6">
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="text-xs font-semibold text-[#2563EB] hover:underline cursor-pointer flex items-center gap-1"
              >
                ← Back to all positions
              </button>
              <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                {selectedJob.type}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-gray-950 font-display">
              {selectedJob.title}
            </h4>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-1 mb-3">
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-gray-400" />
                {selectedJob.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-gray-400" />
                {selectedJob.experience} experience
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
              {selectedJob.description}
            </p>

            <div className="mb-5">
              <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 font-display">
                What We Look For
              </h5>
              <ul className="space-y-1.5 text-xs text-gray-600">
                {selectedJob.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Apply Form */}
            {applicationSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center">
                <CheckCircle2 size={24} className="text-emerald-600 mx-auto mb-1.5" />
                <h5 className="text-sm font-bold font-display">Application Received!</h5>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Thanks for applying, {applicantName}. Our principal team reviews submissions directly and will get in touch within 48 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-3 text-xs font-semibold text-emerald-800 underline cursor-pointer"
                >
                  View other roles
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-3 pt-4 border-t border-gray-200/80">
                <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider font-display">
                  Quick Apply (Under 2 Minutes)
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#2563EB] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#2563EB] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    Portfolio, GitHub, or LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={applicantLink}
                    onChange={(e) => setApplicantLink(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#2563EB] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    What are you proud of building? (Brief note)
                  </label>
                  <textarea
                    rows={2}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="A quick summary of recent systems or projects you enjoyed..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#2563EB] bg-white resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-full shadow-xs flex items-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Submit Application</span>
                    <Send size={12} />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Position List */
          <div className="space-y-3 mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">
              Open Positions ({OPEN_POSITIONS.length})
            </h4>

            {OPEN_POSITIONS.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="group p-4 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full font-display">
                      {job.department}
                    </span>
                    <span className="text-xs text-gray-500">{job.type}</span>
                  </div>
                  <h5 className="text-sm sm:text-base font-bold text-gray-950 font-display group-hover:text-[#2563EB] transition-colors">
                    {job.title}
                  </h5>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                    <MapPin size={12} />
                    <span>{job.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-semibold text-[#2563EB] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>View Role</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* General Inquiries / Spontaneous note */}
        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-[#2563EB]" />
            <span>Don't see your specific role? We always talk to exceptional talent.</span>
          </div>
          <a
            href="mailto:careers@axeon.design"
            className="inline-flex items-center gap-1 font-semibold text-[#2563EB] hover:underline"
          >
            <span>careers@axeon.design</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
