import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  Layout,
  Cpu,
  Target,
  LineChart,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesSectionProps {
  onBookCall: () => void;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  accentBadge: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design & Digital Experiences',
    description:
      'Custom website design, UX/UI development, and responsive digital builds tailored to convert visitors into loyal customers.',
    icon: <Layout size={20} className="text-white" />,
    tags: ['UX/UI Design', 'Custom Webflow & React', 'Design Systems', 'Responsive Optimization'],
    imageUrl:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'High-end interactive web design and digital experience interface',
    accentBadge: 'Design & Build',
  },
  {
    id: 'operations-systems',
    title: 'Business Operations & Systems Setup',
    description:
      'Complete technical setup including POS systems, payment processing, workflow automation, and backend tools.',
    icon: <Cpu size={20} className="text-white" />,
    tags: ['POS Integration', 'Payment Processing', 'Automations', 'Backend Architecture'],
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Glowing modern software engineering and systems screen',
    accentBadge: 'Infrastructure',
  },
  {
    id: 'marketing-acquisition',
    title: 'Marketing & Customer Acquisition',
    description:
      'Multi-channel ad campaigns, digital outreach, local marketing strategies, and client retention tools.',
    icon: <Target size={20} className="text-white" />,
    tags: ['Paid Campaigns', 'Local Marketing', 'Conversion Funnels', 'Lifecycle Retention'],
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Strategic multi-channel marketing growth dashboard',
    accentBadge: 'Growth Engine',
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Business Consulting',
    description:
      'End-to-end operational guidance, process optimization, and growth strategy to scale your business sustainably.',
    icon: <LineChart size={20} className="text-white" />,
    tags: ['Process Audits', 'Unit Economics', 'Executive Strategy', 'Scaling Playbooks'],
    imageUrl:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Executive business strategy planning workspace',
    accentBadge: 'Executive Advisory',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookCall }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('web-design');

  const activeService =
    SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  const handleToggle = (id: string) => {
    setActiveServiceId(id);
  };

  return (
    <section
      id="solutions-section"
      className="w-full min-h-[100dvh] flex flex-col justify-center py-8 xs:py-10 sm:py-16 lg:py-20 px-2 xs:px-4 sm:px-6 lg:px-8 relative z-20 overflow-hidden scroll-mt-20"
    >
      <div id="services-section" className="sr-only" />
      <div className="w-full max-w-7xl mx-auto">
        {/* TOP HEADER ROW: Enlarged Typography & Distinctly Positioned "Start A Project" Pill */}
        <ScrollReveal direction="up" distance={20} duration={500} className="mb-6 xs:mb-8 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5 pb-2">
            <div>
              <p className="text-[11px] xs:text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-1 sm:mb-1.5 font-display">
                SOLUTIONS &amp; CAPABILITIES
              </p>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-gray-950 tracking-tight font-display leading-[1.12]">
                From idea to scale.{' '}
                <span className="text-gray-950 font-extrabold">We master our craft.</span>
              </h2>
            </div>

            {/* Prominently Positioned "Start A Project" Pill Button */}
            <div className="w-full sm:w-auto shrink-0">
              <motion.button
                id="services-start-project-btn"
                type="button"
                onClick={onBookCall}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm sm:text-[16px] font-bold shadow-[0_8px_25px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.45)] transition-all duration-200 group cursor-pointer min-h-[44px]"
              >
                <span>Start A Project</span>
                <motion.div
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#2563EB] flex items-center justify-center shrink-0 shadow-xs"
                  whileHover={{ x: 2 }}
                >
                  <ArrowRight size={13} strokeWidth={2.5} />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </ScrollReveal>

        {/* TWO COLUMN GRID: Left Enlarged Accordion List & Right Enlarged Preview Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* LEFT COLUMN: Enlarged, Balanced Accordion Items */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3 sm:gap-4">
            {SERVICES.map((service, index) => {
              const isOpen = service.id === activeServiceId;

              return (
                <ScrollReveal
                  key={service.id}
                  direction="up"
                  distance={16}
                  delay={index * 60}
                  duration={450}
                  className="w-full"
                >
                  <motion.div
                    id={`service-accordion-${service.id}`}
                    layout
                    transition={{ layout: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                    className={`rounded-2xl sm:rounded-3xl transition-colors duration-300 border overflow-hidden ${
                      isOpen
                        ? 'bg-white shadow-[0_12px_36px_rgba(37,99,235,0.1)] border-blue-200/90 ring-1 ring-blue-500/10'
                        : 'bg-white/85 hover:bg-white border-gray-200/80 hover:border-gray-300 shadow-xs hover:shadow-sm'
                    }`}
                  >
                    {/* Accordion Header Button */}
                    <button
                      type="button"
                      onClick={() => handleToggle(service.id)}
                      className="w-full flex items-center justify-between p-3.5 sm:p-5 text-left cursor-pointer select-none min-h-[52px]"
                    >
                      <div className="flex items-center gap-3 sm:gap-4.5 min-w-0 pr-2">
                        {/* Dark Pill Badge with Icon */}
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-xs transition-colors duration-300 ${
                            isOpen ? 'bg-gray-950 text-white' : 'bg-gray-900 text-gray-200'
                          }`}
                        >
                          {service.icon}
                        </div>

                        {/* Service Title */}
                        <h3 className="text-sm xs:text-base sm:text-lg lg:text-[19px] font-bold text-gray-900 tracking-tight font-display truncate">
                          {service.title}
                        </h3>
                      </div>

                      {/* Animated Chevron Toggle */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="text-gray-400 group-hover:text-gray-700 transition-colors shrink-0 pl-2"
                      >
                        <ChevronDown size={18} className={`stroke-[2.5] ${isOpen ? 'text-[#2563EB]' : ''}`} />
                      </motion.div>
                    </button>

                    {/* Smooth AnimatePresence Dropdown */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`content-${service.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: {
                              height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.25, delay: 0.05 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.15 },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 pt-0">
                            <div className="p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl bg-blue-50/50 border border-blue-100/70">
                              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                                {service.description}
                              </p>

                              {/* Capability Tags */}
                              <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                                {service.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="inline-flex items-center text-[10.5px] sm:text-xs font-medium text-gray-700 bg-white border border-gray-200/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shadow-2xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Enlarged Dynamic Image Window with Fluid Crossfade Transition */}
          <div className="lg:col-span-6 w-full flex flex-col">
            <ScrollReveal direction="up" distance={20} delay={120} duration={500} className="w-full h-full">
              <div
                id="service-preview-showcase"
                className="relative w-full h-full min-h-[280px] xs:min-h-[320px] sm:min-h-[440px] lg:min-h-[540px] rounded-2xl sm:rounded-[32px] overflow-hidden bg-gray-950 border border-gray-900 shadow-[0_24px_60px_rgba(0,0,0,0.18)] flex flex-col justify-end group"
              >
                {/* Dynamic Image with AnimatePresence for Silky Smooth Crossfade */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.id}
                    src={activeService.imageUrl}
                    alt={activeService.imageAlt}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.06, filter: 'blur(2px)' }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                      filter: 'blur(2px)',
                      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>

                {/* Subtle Ambient Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-10" />

                {/* Bottom Overlay Info with Smooth Transition */}
                <div className="relative z-20 p-4 sm:p-8 flex items-center justify-between pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="flex flex-col"
                    >
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-400 font-display">
                        {activeService.accentBadge}
                      </span>
                      <span className="text-base sm:text-xl lg:text-2xl font-bold text-white font-display tracking-tight drop-shadow-md mt-0.5">
                        {activeService.title}
                      </span>
                    </motion.div>
                  </AnimatePresence>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10.5px] sm:text-sm font-semibold border border-white/20">
                    <Sparkles size={12} className="text-blue-300" />
                    <span>Production Grade</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
