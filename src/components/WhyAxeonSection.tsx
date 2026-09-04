import React, { useState } from 'react';
import { ArrowRight, Check, X, ShieldCheck, Zap, Users, Sparkles, Clock, TrendingUp, Code2, MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface WhyAxeonSectionProps {
  onBookCall: () => void;
  onOpenProjects?: () => void;
}

export const WhyAxeonSection: React.FC<WhyAxeonSectionProps> = ({ onBookCall, onOpenProjects }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'agency' | 'inhouse'>('all');

  const pillars = [
    {
      icon: Users,
      iconBg: 'bg-blue-100 text-[#2563EB]',
      badge: 'Zero Junior Handoffs',
      title: 'Direct Senior Craft',
      description:
        'You work 1-on-1 with principal designers and full-stack software engineers from day one. No junior interns, no account managers playing telephone.',
    },
    {
      icon: Zap,
      iconBg: 'bg-emerald-100 text-emerald-700',
      badge: '2-Week Sprints',
      title: 'Rapid Velocity',
      description:
        'Instead of dragging projects through 6-month committee cycles, we ship production-grade code in 14-day continuous delivery sprints with live staging.',
    },
    {
      icon: TrendingUp,
      iconBg: 'bg-indigo-100 text-indigo-700',
      badge: '2.8x Avg Lift',
      title: 'Conversion Psychology',
      description:
        'We do not just design "pretty" websites. Every layout, typography scale, and interaction is engineered to maximize qualified pipeline and user action.',
    },
    {
      icon: Code2,
      iconBg: 'bg-amber-100 text-amber-700',
      badge: '100% Yours',
      title: 'Clean Modern Tech',
      description:
        'Handcrafted with React, Vite, TypeScript, and Tailwind CSS. No sluggish WordPress bloat, no proprietary lock-in. You own 100% of the IP and code.',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-purple-100 text-purple-700',
      badge: 'Flat Sprint Fees',
      title: 'Predictable Pricing',
      description:
        'Transparent, flat sprint investment. No surprise change-order invoices, no hourly billing padding, and zero scope-creep anxiety.',
    },
    {
      icon: MapPin,
      iconBg: 'bg-rose-100 text-rose-700',
      badge: 'Des Moines, Iowa',
      title: 'Midwest Integrity',
      description:
        'Rooted in Des Moines with national caliber standards. We pride ourselves on straight talk, extreme accountability, and long-term partnership.',
    },
  ];

  const comparisonRows = [
    {
      metric: 'Who Does the Work?',
      axeon: 'Principal designers & senior software engineers',
      axeonHighlight: true,
      agency: 'Pitched by partners, handed to junior staffers',
      inhouse: 'Whoever you manage to hire after 3 months',
    },
    {
      metric: 'Time to First Launch',
      axeon: '14 to 21 days (disciplined 2-week sprints)',
      axeonHighlight: true,
      agency: '4 to 6 months of endless slide decks',
      inhouse: '3 to 6 months plus recruiting lead time',
    },
    {
      metric: 'Pricing Model',
      axeon: 'Transparent flat sprint rates, zero surprises',
      axeonHighlight: true,
      agency: '$60k–$150k+ with billable hourly creep',
      inhouse: '$160k+/yr salary + benefits + equity overhead',
    },
    {
      metric: 'Tech Architecture',
      axeon: 'Ultra-fast React + TypeScript + Tailwind (99+ Vitals)',
      axeonHighlight: true,
      agency: 'Clunky templates or heavy legacy CMS',
      inhouse: 'Depends on internal engineering bandwidth',
    },
    {
      metric: 'Code & IP Ownership',
      axeon: '100% client-owned code repository & assets',
      axeonHighlight: true,
      agency: 'Often locked into proprietary agency hosting',
      inhouse: 'Fully owned by your company',
    },
  ];

  return (
    <section
      id="why-axeon-section"
      className="w-full min-h-[100dvh] flex flex-col justify-center py-12 xs:py-16 sm:py-20 lg:py-24 px-3 xs:px-4 sm:px-6 lg:px-8 relative z-20 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Eyebrow & Headline */}
        <ScrollReveal direction="up" distance={24} duration={600} className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 font-display">
            <Sparkles size={12} />
            <span>Why Axeon</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] leading-[1.18] font-extrabold text-gray-950 tracking-tight font-display max-w-3xl mx-auto">
            <span className="font-serif-italic font-normal text-[#2563EB]">Senior-level speed</span> without coastal agency fluff or bloated retainers.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Most digital agencies sell you with executive pitches, then hand off your work to junior staff. Axeon provides direct senior execution, 2-week continuous delivery, and tangible business ROI.
          </p>
        </ScrollReveal>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                direction="up"
                distance={24}
                delay={idx * 70}
                duration={500}
                className="h-full"
              >
                <div className="group bg-white/95 rounded-2xl sm:rounded-3xl border border-gray-200/90 p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl ${pillar.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                      <span className="text-[11px] font-bold text-gray-500 bg-gray-100/90 px-2.5 py-1 rounded-full font-display">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-950 font-display mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-[11px] font-semibold text-[#2563EB] group-hover:translate-x-0.5 transition-transform">
                    <span>Engineered for outcomes</span>
                    <ArrowRight size={12} className="ml-1" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Comparison Matrix: Axeon vs. Agencies vs. In-House */}
        <ScrollReveal direction="up" distance={28} duration={600} className="w-full mb-12 sm:mb-16">
          <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="px-5 sm:px-8 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-blue-50/50 via-white to-gray-50/40">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] font-display">
                  Honest Comparison
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-950 font-display mt-0.5">
                  How Axeon Compares to Other Options
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-gray-500 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Optimized for fast-moving founders &amp; leaders</span>
              </div>
            </div>

            {/* Desktop Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/60 text-xs font-bold text-gray-500 font-display">
                    <th className="py-3.5 px-5 sm:px-6 w-1/4">Criterion</th>
                    <th className="py-3.5 px-5 sm:px-6 w-1/3 bg-blue-50/80 text-[#2563EB]">
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-sm">//. Axeon</span>
                        <span className="text-[10px] bg-[#2563EB] text-white px-1.5 py-0.5 rounded-full uppercase">You are here</span>
                      </div>
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 w-1/4 text-gray-600">Traditional Agency</th>
                    <th className="py-3.5 px-4 sm:px-6 w-1/4 text-gray-600">In-House Hire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-[13px]">
                  {comparisonRows.map((row) => (
                    <tr key={row.metric} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3.5 sm:py-4 px-5 sm:px-6 font-semibold text-gray-900">
                        {row.metric}
                      </td>
                      <td className="py-3.5 sm:py-4 px-5 sm:px-6 bg-blue-50/40 text-gray-950 font-semibold border-x border-blue-100/80">
                        <div className="flex items-start gap-2">
                          <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.axeon}</span>
                        </div>
                      </td>
                      <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-gray-600">
                        <div className="flex items-start gap-2">
                          <X size={15} className="text-gray-400 shrink-0 mt-0.5" />
                          <span>{row.agency}</span>
                        </div>
                      </td>
                      <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-gray-600">
                        <div className="flex items-start gap-2">
                          <Clock size={15} className="text-gray-400 shrink-0 mt-0.5" />
                          <span>{row.inhouse}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats & Call to Action Bar */}
        <ScrollReveal direction="up" distance={20} duration={500} className="w-full">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 sm:p-8 text-white shadow-xl shadow-blue-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 text-center sm:text-left">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 border-b sm:border-b-0 sm:border-r border-white/20 pb-4 sm:pb-0 sm:pr-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display">2.8x</div>
                  <div className="text-[11px] text-blue-100 font-medium">Avg Conversion Lift</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display">14d</div>
                  <div className="text-[11px] text-blue-100 font-medium">Sprint Turnaround</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display">100%</div>
                  <div className="text-[11px] text-blue-100 font-medium">Senior Talent</div>
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold font-display">Ready for digital systems that drive revenue?</h4>
                <p className="text-xs sm:text-sm text-blue-100 mt-0.5">Let’s review your current site or explore your next release.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              {onOpenProjects && (
                <button
                  type="button"
                  onClick={onOpenProjects}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer text-center"
                >
                  View Case Studies
                </button>
              )}
              <button
                type="button"
                onClick={onBookCall}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-[#2563EB] hover:bg-blue-50 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
