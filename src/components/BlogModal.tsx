import React, { useState } from 'react';
import { X, ArrowRight, BookOpen, Clock, Calendar, ChevronLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
  onOpenAudit: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export const BlogModal: React.FC<BlogModalProps> = ({
  isOpen,
  onClose,
  onBookCall,
  onOpenAudit,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (!isOpen) return null;

  const posts: BlogPost[] = [
    {
      id: 'des-moines-digital-presence',
      title: 'Why Des Moines Businesses Win With Modern Digital Presence',
      category: 'Local Strategy',
      readTime: '4 min read',
      date: 'Sept 2026',
      excerpt: 'How Midwest enterprises and service leaders are outpacing competitors by trading slow legacy websites for high-speed digital systems.',
      content: [
        'For decades, local businesses in Des Moines relied predominantly on word-of-mouth and static directory listings. But in 2026, over 88% of B2B and consumer decisions in Central Iowa start with a digital touchpoint.',
        'When a prospective client lands on your website, you have less than 3 seconds to communicate competence, authority, and reliability. If your site takes 4 seconds to load or feels outdated on a mobile device, potential customers bounce directly to your nearest competitor.',
        'Modern digital presence is not just about an aesthetic refresh. It is about speed, clear message hierarchy, frictionless scheduling, and frictionless booking flows. When Iowa companies upgrade to tailored React architectures with fast CDN hosting, they routinely experience a 2x to 3x increase in qualified inquiries within 60 days.',
      ],
      keyTakeaways: [
        'Page load speed under 1.5 seconds reduces bounce rate by 52%.',
        'Mobile responsiveness directly dictates local search ranking on Google.',
        'Clear, frictionless call-to-actions turn passive visitors into active client calls.',
      ],
    },
    {
      id: 'conversion-design-2026',
      title: 'The 2026 Web Conversion Playbook for Ambitious Founders',
      category: 'Design Systems',
      readTime: '5 min read',
      date: 'August 2026',
      excerpt: 'The subtle UX bottlenecks and layout flaws costing service companies and SaaS platforms up to 40% of their inbound pipeline.',
      content: [
        'Most websites fail to convert not because their product or service is flawed, but because their visual hierarchy forces visitors to do mental work.',
        'When visitors land on your page, their eyes scan in a natural Z or F pattern. If your value proposition is buried under marketing jargon like "streamlined end-to-end synergy", they leave without understanding what you actually do.',
        'At Axeon, our design methodology isolates the primary user intention: Who are you? What problem do you solve? Why are you the trusted authority? How do I take the next step right now?',
        'By stripping away visual noise, aligning high-contrast typography, and introducing direct scheduling prompts, our clients see immediate conversion lifts across all traffic sources.',
      ],
      keyTakeaways: [
        'Eliminate jargon: State what you build and who it helps in plain English.',
        'Single primary call-to-action per viewport keeps prospective clients focused.',
        'Social proof and verifiable metrics should sit within the first 600px of scrolling.',
      ],
    },
    {
      id: 'sprint-velocity-mvp',
      title: 'From Concept to Production: The 14-Day Engineering Sprint',
      category: 'Engineering',
      readTime: '4 min read',
      date: 'July 2026',
      excerpt: 'How lean development frameworks beat traditional 6-month agency contracts every single time.',
      content: [
        'The traditional agency model is broken. Clients pay massive upfront retainers, wait six months through endless status meetings, and receive a product that is already obsolete by the time it goes live.',
        'We believe in rapid, continuous momentum. By utilizing modern TypeScript stacks, component design systems, and direct founder collaboration, Axeon ships complete production systems in focused 2-week sprints.',
        'This allows businesses to test real market feedback, start generating revenue immediately, and adapt to customer needs without wasting tens of thousands of dollars on speculative features.',
      ],
      keyTakeaways: [
        'Ship early and iterate with real customer feedback.',
        'Modular design systems reduce future development costs by over 60%.',
        'Direct communication with builders eliminates costly scope creep.',
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={() => {
          if (selectedPost) {
            setSelectedPost(null);
          } else {
            onClose();
          }
        }}
      />

      <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-white/80 overflow-hidden max-h-[92dvh] overflow-y-auto overscroll-contain">
        {/* Close Button */}
        <button
          id="close-blog-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-gray-100/80 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {selectedPost ? (
          /* ARTICLE READER VIEW */
          <div>
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#1d4ed8] mb-4 cursor-pointer"
            >
              <ChevronLeft size={16} />
              <span>Back to all articles</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563EB] font-bold text-[11px] uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {selectedPost.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {selectedPost.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-gray-950 font-display mb-4">
              {selectedPost.title}
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-display mb-3">
                Key Takeaways
              </h4>
              <ul className="space-y-2">
                {selectedPost.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In-article CTA box */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-gray-900 font-display">
                  Want to audit your business website?
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">
                  Get a free 1-on-1 performance and UX breakdown for your Iowa business.
                </p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenAudit();
                  }}
                  className="flex-1 sm:flex-none text-xs font-semibold px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-xs cursor-pointer"
                >
                  Free Web Audit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookCall();
                  }}
                  className="flex-1 sm:flex-none text-xs font-semibold px-4 py-2 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Book 30-Min Call</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* BLOG LIST VIEW */
          <div>
            <div className="mb-6 pr-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-[11px] font-bold uppercase tracking-wider font-display">
                  <BookOpen size={11} />
                  Axeon Ideas
                </span>
                <span className="text-xs text-gray-400 font-medium">Design &amp; Systems Insights</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950 font-display">
                Ideas &amp; Field Notes
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
                Actionable perspectives on modern web architecture, digital presence, and conversion optimization for Iowa businesses and founders.
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="group p-4 sm:p-5 rounded-2xl bg-gray-50/80 hover:bg-white border border-gray-200/80 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] font-display">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors font-display tracking-tight flex items-center justify-between">
                    <span>{post.title}</span>
                    <ArrowUpRight size={16} className="text-gray-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
                  </h4>

                  <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-gray-500">
                Want a custom breakdown for your specific industry?
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAudit();
                }}
                className="w-full sm:w-auto text-xs font-semibold px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors cursor-pointer"
              >
                Request Free Web Audit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
