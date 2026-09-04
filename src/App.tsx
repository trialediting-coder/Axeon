import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  X,
  Sparkles,
  Layers,
  CheckCircle,
  Menu,
  Flame,
  Clock,
  ChevronRight,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import { LuminousGlassShader } from './components/LuminousGlassShader';
import { TestimonialCard, TestimonialData } from './components/TestimonialCard';
import { HeroVideoFrame } from './components/HeroVideoFrame';
import { ReviewDetailModal } from './components/ReviewDetailModal';
import { BookCallModal } from './components/BookCallModal';
import { BookCallPrompt } from './components/BookCallPrompt';
import { ProjectsModal } from './components/ProjectsModal';
import { WhyAxeonModal } from './components/WhyAxeonModal';
import { MyStoryModal } from './components/MyStoryModal';
import { BlogModal } from './components/BlogModal';
import { CareersModal } from './components/CareersModal';
import { TemplateModal } from './components/TemplateModal';
import { HelpingTeamsSlider } from './components/HelpingTeamsSlider';
import { ServicesSection } from './components/ServicesSection';
import { WhyAxeonSection } from './components/WhyAxeonSection';
import { HowItWorksSection } from './components/HowItWorksSection';

export default function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isWhyModalOpen, setIsWhyModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const [triggerAuditDirectly, setTriggerAuditDirectly] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<TestimonialData | null>(null);

  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Left stack testimonials (duplicated for infinite seamless loop)
  const leftTestimonials: TestimonialData[] = [
    {
      id: 'nora-1',
      quote: 'The updates and attention to detail are unmatched.',
      author: 'Nora S.',
      role: 'Founder & CEO',
      company: 'Aura Analytics',
      metric: '+142% Conversion Rate',
      initialLikes: 24,
    },
    {
      id: 'ethan-1',
      quote: 'Saved me weeks of work, and the result looks professional.',
      author: 'Ethan J.',
      role: 'Head of Product',
      company: 'FinFlow SaaS',
      metric: '3.8x Demo Signups',
      initialLikes: 39,
    },
    {
      id: 'chloe-1',
      quote: 'Love the flexibility—my brand looks amazing on this template.',
      author: 'Chloe D.',
      role: 'Design Director',
      company: 'Loomis AI',
      metric: '+88% User Retention',
      initialLikes: 19,
    },
    {
      id: 'marcus-1',
      quote: 'Axeon transformed our bounce rate into instant booked demos.',
      author: 'Marcus K.',
      role: 'Co-founder',
      company: 'DevLayer',
      metric: '+210% Pipeline Velocity',
      initialLikes: 31,
    },
  ];

  // Right stack testimonials (duplicated for infinite seamless loop)
  const rightTestimonials: TestimonialData[] = [
    {
      id: 'amelia-1',
      quote: 'Beautiful template, easy to customize, and worth every penny.',
      author: 'Amelia R.',
      role: 'VP Growth',
      company: 'CloudCore',
      metric: '$4.2M Seed Raised',
      initialLikes: 47,
    },
    {
      id: 'leo-1',
      quote: 'Exactly what I needed to kickstart my SaaS project fast.',
      author: 'Leo M.',
      role: 'Lead Architect',
      company: 'Quantum Stack',
      metric: '2.4x Paid Activations',
      initialLikes: 53,
    },
    {
      id: 'sofia-1',
      quote: 'Clean design, modern feel, and excellent support team.',
      author: 'Sofia L.',
      role: 'Product Strategist',
      company: 'SyncOps',
      metric: '65% Lower CAC',
      initialLikes: 28,
    },
    {
      id: 'david-1',
      quote: 'The shader visuals and typography gave us instantaneous enterprise trust.',
      author: 'David P.',
      role: 'CEO',
      company: 'Vertex AI',
      metric: '+175% Enterprise ARR',
      initialLikes: 36,
    },
  ];

  // Client logos for the moving "Trusted By" marquee
  const clientLogos = [
    {
      name: 'Infinity Loop',
      icon: (
        <svg width="22" height="12" viewBox="0 0 30 16" fill="currentColor">
          <path d="M7.5 0C3.36 0 0 3.58 0 8s3.36 8 7.5 8c2.4 0 4.54-1.2 5.9-3.08L15 10.7l1.6 2.22C17.96 14.8 20.1 16 22.5 16 26.64 16 30 12.42 30 8s-3.36-8-7.5-8c-2.4 0-4.54 1.2-5.9 3.08L15 5.3 13.4 3.08C12.04 1.2 9.9 0 7.5 0zm0 3.2c1.78 0 3.28.94 4.14 2.44L15 10.3l3.36-4.66C19.22 4.14 20.72 3.2 22.5 3.2 25.04 3.2 27 5.3 27 8s-1.96 4.8-4.5 4.8c-1.78 0-3.28-.94-4.14-2.44L15 5.7l-3.36 4.66C10.78 11.86 9.28 12.8 7.5 12.8 4.96 12.8 3 10.7 3 8s1.96-4.8 4.5-4.8z" />
        </svg>
      ),
    },
    {
      name: 'LOCO',
      icon: (
        <div className="flex items-center tracking-tighter text-sm font-black">
          <span className="text-[15px] font-black tracking-[-0.08em]">LO</span>
          <span className="w-2 h-2 rounded-full bg-current mx-0.5 inline-block" />
          <span className="text-[15px] font-black tracking-[-0.08em]">O</span>
        </div>
      ),
    },
    {
      name: 'Acme Corp',
      icon: (
        <div className="flex items-center gap-1.5 font-bold text-[13px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 22,12 12,22 2,12" />
          </svg>
          <span>Acme Corp</span>
        </div>
      ),
    },
    {
      name: 'Quantum',
      icon: (
        <div className="flex items-center gap-1.5 font-semibold text-[13px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="4" r="2" />
            <circle cx="12" cy="20" r="2" />
            <circle cx="4" cy="12" r="2" />
            <circle cx="20" cy="12" r="2" />
          </svg>
          <span>Quantum</span>
        </div>
      ),
    },
    {
      name: 'Supabase',
      icon: (
        <div className="flex items-center gap-1.5 font-bold text-[13px]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.5 2L3 13.5h7.5L9.5 22l11.5-11.5H13.5L15.5 2z" />
          </svg>
          <span>Supabase</span>
        </div>
      ),
    },
    {
      name: 'Linear',
      icon: (
        <div className="flex items-center gap-1.5 font-bold text-[13px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
            <path d="M7 12h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span>Linear</span>
        </div>
      ),
    },
    {
      name: 'Vercel',
      icon: (
        <div className="flex items-center gap-1.5 font-bold text-[13px]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 24 22 0 22" />
          </svg>
          <span>Vercel</span>
        </div>
      ),
    },
    {
      name: 'Resend',
      icon: (
        <div className="flex items-center gap-1.5 font-bold text-[13px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <path d="M7 7h10v10H7z" fill="white" />
          </svg>
          <span>Resend</span>
        </div>
      ),
    },
    {
      name: 'Raycast',
      icon: (
        <div className="flex items-center gap-1.5 font-bold text-[13px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          </svg>
          <span>Raycast</span>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#FAF9F8] text-gray-900 overflow-x-hidden font-sans selection:bg-[#2563EB]/20 selection:text-gray-900">
      {/* Background Luminous Glass & Aurora Beam Shader */}
      <LuminousGlassShader />

      {/* Subtle ambient overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-radial from-transparent via-white/10 to-white/40" />

      {/* Floating Follow Navigation Bar (Sticky/Fixed, Rounded Look) */}
      <div className="fixed top-3 sm:top-4 inset-x-0 z-40 px-3 xs:px-4 sm:px-6 lg:px-12 pointer-events-none transition-all duration-300">
        <header
          id="main-header"
          className={`pointer-events-auto w-full max-w-[1440px] mx-auto backdrop-blur-md border rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 border-gray-200/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)]'
              : 'bg-white/90 border-gray-200/80 shadow-xs'
          }`}
        >
          {/* Left Logo: //. Axeon */}
          <a
            id="brand-logo"
            href="#hero-section"
            className="flex items-center gap-2 text-lg xs:text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group shrink-0"
          >
            <div className="flex items-center text-gray-900 group-hover:scale-105 transition-transform">
              {/* Dual forward slanted bars logo mark */}
              <svg width="22" height="18" viewBox="0 0 24 20" fill="currentColor" className="sm:w-6 sm:h-5">
                <polygon points="6,0 2,20 6,20 10,0" />
                <polygon points="14,0 10,20 14,20 18,0" />
                <circle cx="21" cy="18" r="2" />
              </svg>
            </div>
            <span className="font-extrabold tracking-tight text-[20px] sm:text-[22px] text-gray-900 font-display">Axeon</span>
          </a>

          {/* Desktop Navigation Links (Rounded Tab Style) */}
          <nav
            id="main-nav-bar"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5"
          >
            {/* Axeon */}
            <a
              id="nav-axeon-btn"
              href="#why-axeon-section"
              className="group relative text-[13px] font-medium text-gray-600 hover:text-gray-950 px-3.5 xl:px-4 py-1.5 rounded-full transition-all duration-200 ease-out hover:bg-gray-100/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">Axeon</span>
              <span className="absolute inset-0 rounded-full border border-gray-900/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>

            {/* Solutions */}
            <a
              id="nav-solutions-btn"
              href="#solutions-section"
              className="group relative text-[13px] font-medium text-gray-600 hover:text-gray-950 px-3.5 xl:px-4 py-1.5 rounded-full transition-all duration-200 ease-out hover:bg-gray-100/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">Solutions</span>
              <span className="absolute inset-0 rounded-full border border-gray-900/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>

            {/* Projects */}
            <button
              id="nav-projects-btn"
              type="button"
              onClick={() => setIsProjectsModalOpen(true)}
              className="group relative text-[13px] font-medium text-gray-600 hover:text-gray-950 px-3.5 xl:px-4 py-1.5 rounded-full transition-all duration-200 ease-out hover:bg-gray-100/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute inset-0 rounded-full border border-gray-900/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>

            {/* Stories */}
            <a
              id="nav-helping-teams-btn"
              href="#helping-teams-section"
              className="group relative text-[13px] font-medium text-gray-600 hover:text-gray-950 px-3.5 xl:px-4 py-1.5 rounded-full transition-all duration-200 ease-out hover:bg-gray-100/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">Stories</span>
              <span className="absolute inset-0 rounded-full border border-gray-900/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>

            {/* Ideas */}
            <button
              id="nav-ideas-btn"
              type="button"
              onClick={() => setIsBlogModalOpen(true)}
              className="group relative text-[13px] font-medium text-gray-600 hover:text-gray-950 px-3.5 xl:px-4 py-1.5 rounded-full transition-all duration-200 ease-out hover:bg-gray-100/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">Ideas</span>
              <span className="absolute inset-0 rounded-full border border-gray-900/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>

            {/* Careers */}
            <button
              id="nav-careers-btn"
              type="button"
              onClick={() => setIsCareersModalOpen(true)}
              className="group relative text-[13px] font-medium text-gray-600 hover:text-gray-950 px-3.5 xl:px-4 py-1.5 rounded-full transition-all duration-200 ease-out hover:bg-gray-100/90 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">Careers</span>
              <span className="absolute inset-0 rounded-full border border-gray-900/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>
          </nav>

          {/* Right Action: "Book a Call" Rounded Button */}
          <div className="hidden lg:flex items-center">
            <button
              id="nav-book-call-btn"
              type="button"
              onClick={() => setIsBookModalOpen(true)}
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-[13.5px] font-semibold rounded-full px-4 py-2 flex items-center gap-2 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Book a Call</span>
              <div className="w-5 h-5 rounded-full bg-white text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200/70 border border-gray-200 text-gray-800 shadow-xs flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-md pt-16 sm:pt-20 px-4 flex flex-col justify-start pointer-events-auto">
            <div className="bg-white/98 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col gap-2.5 border border-gray-200 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">Navigation</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200/80 flex items-center justify-center text-gray-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <a
                href="#why-axeon-section"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left py-2 text-base font-bold text-gray-900 border-b border-gray-100 flex items-center justify-between"
              >
                <span>Axeon</span>
                <ChevronRight size={18} className="text-gray-400" />
              </a>

              <a
                href="#solutions-section"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left py-2 text-base font-bold text-gray-900 border-b border-gray-100 flex items-center justify-between"
              >
                <span>Solutions</span>
                <ChevronRight size={18} className="text-gray-400" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsProjectsModalOpen(true);
                }}
                className="text-left py-2 text-base font-bold text-gray-900 border-b border-gray-100 flex items-center justify-between"
              >
                <span>Projects</span>
                <ChevronRight size={18} className="text-gray-400" />
              </button>

              <a
                href="#helping-teams-section"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left py-2 text-base font-bold text-gray-900 border-b border-gray-100 flex items-center justify-between"
              >
                <span>Stories</span>
                <ChevronRight size={18} className="text-gray-400" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBlogModalOpen(true);
                }}
                className="text-left py-2 text-base font-bold text-gray-900 border-b border-gray-100 flex items-center justify-between"
              >
                <span>Ideas</span>
                <ChevronRight size={18} className="text-gray-400" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCareersModalOpen(true);
                }}
                className="text-left py-2 text-base font-bold text-gray-900 border-b border-gray-100 flex items-center justify-between"
              >
                <span>Careers</span>
                <ChevronRight size={18} className="text-gray-400" />
              </button>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsBookModalOpen(true);
                  }}
                  className="w-full bg-[#2563EB] text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(37,99,235,0.35)] active:scale-98 cursor-pointer"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================= */}
        {/* SECTION 1: HERO (100VH)                                   */}
        {/* ========================================================= */}
        <section
          id="hero-section"
          className="min-h-[100dvh] w-full flex flex-col justify-between pt-20 sm:pt-24 pb-3 xs:pb-4 sm:pb-6 relative"
        >
          {/* HERO BODY: Large Centered Video Frame in Background, Center Hero Content Intact */}
          <div className="relative w-full flex-1 my-2 sm:my-4 py-12 sm:py-16 md:py-24 flex items-center justify-center min-h-[600px] sm:min-h-[680px] md:min-h-[760px] lg:min-h-[820px]">
            
            {/* LARGE CENTERED VIDEO FRAME IN BACKGROUND (EXPANDED, ROUNDED CORNERS, NO DETAILS/AD UI) */}
            <HeroVideoFrame />

            {/* CENTER HERO CONTENT (Centered directly in front of the video frame) */}
            <div
              id="center-hero-content"
              className="relative w-full max-w-3xl lg:max-w-4xl mx-auto flex flex-col items-center text-center z-20 px-4 transition-all duration-700 ease-out animate-fade-in"
            >
              {/* Main Headline H1 (No period at end, frosted glass text effect on YOUR) */}
              <h1
                id="main-hero-headline"
                className="text-[32px] xs:text-[40px] sm:text-[52px] lg:text-[60px] font-extrabold leading-[1.1] tracking-[-0.035em] text-white font-display drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5"
              >
                <span>Axeon Builds</span>
                {/* Vibrant Blue with subtle luminous glow effect */}
                <span className="relative inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#3b82f6] to-blue-500 drop-shadow-[0_0_16px_rgba(59,130,246,0.6)]">
                  YOUR
                </span>
                <span>Digital Presence</span>
              </h1>

              {/* Subtitle / Tagline: Single continuous line with bold "Des Moines, Iowa." and hand-drawn scribble underline */}
              <p
                id="main-hero-subtitle"
                className="mt-3 xs:mt-4 sm:mt-5 text-[14px] xs:text-[15px] sm:text-[16.5px] lg:text-[17.5px] leading-[1.6] sm:leading-[1.65] text-gray-200 font-normal max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
              >
                <span>We build design and systems that work for every business here in </span>
                <span className="relative inline-block whitespace-nowrap">
                  <strong className="font-bold text-white text-[15px] xs:text-[16px] sm:text-[17.5px] lg:text-[18px] opacity-100 tracking-tight">
                    Des Moines, Iowa.
                  </strong>
                  {/* Organic hand-drawn scribble underline */}
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-[102%] -ml-[1%] h-[11px] sm:h-[13px] text-blue-400 overflow-visible pointer-events-none select-none"
                    viewBox="0 0 200 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 3 10 C 26 5.5, 48 13, 72 8.5 C 96 4, 120 12, 144 7.5 C 168 3.5, 188 9.5, 206 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="drop-shadow-[0_1px_4px_rgba(59,130,246,0.6)]"
                    />
                  </svg>
                </span>
              </p>

              {/* Action Buttons Row */}
              <div
                id="hero-cta-buttons"
                className="mt-5 xs:mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto"
              >
                {/* Primary "Book A Call" Button */}
                <button
                  id="hero-book-call-btn"
                  type="button"
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full sm:w-auto group relative bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-[14px] sm:text-[15px] font-medium rounded-full pl-5 pr-1.5 py-1.5 sm:py-2 flex items-center justify-center gap-2.5 shadow-[0_8px_20px_-4px_rgba(37,99,235,0.5)] hover:shadow-[0_12px_26px_-4px_rgba(37,99,235,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0 min-h-[44px]"
                >
                  <span className="pl-1">Book A Call</span>
                  <div className="w-7 h-7 rounded-full bg-white text-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 shadow-xs">
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </div>
                </button>

                {/* Secondary "See Projects" Button */}
                <button
                  id="hero-see-projects-btn"
                  type="button"
                  onClick={() => setIsProjectsModalOpen(true)}
                  className="w-full sm:w-auto bg-white/95 hover:bg-white text-gray-900 text-[14px] sm:text-[15px] font-medium rounded-full px-5 py-2.5 sm:py-3 border border-white/80 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0 min-h-[44px]"
                >
                  See Projects
                </button>
              </div>
            </div>

          </div>

          {/* BOTTOM MOVING "TRUSTED BY" MARQUEE */}
          <div id="trusted-by-marquee-section" className="w-full pt-1 sm:pt-2 pb-2 sm:pb-4 z-20 flex flex-col items-center shrink-0">
            <div className="mb-1.5 sm:mb-2.5 select-none">
              <p
                id="trusted-founders-title"
                className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-gray-500 font-display text-center"
              >
                Trusted by Iowa Businesses
              </p>
            </div>

            {/* Moving Horizontal Marquee Container with fade masks */}
            <div
              id="moving-trusted-by-marquee-wrapper"
              className="w-full max-w-4xl overflow-hidden mask-gradient-x py-0.5 sm:py-1 group cursor-pointer"
              onClick={() => setIsProjectsModalOpen(true)}
              title="Click to view client case studies"
            >
              <div className="animate-marquee-left flex items-center">
                {/* Track 1 */}
                <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 text-gray-400 opacity-80 group-hover:opacity-100 transition-opacity shrink-0">
                  {clientLogos.map((logo, index) => (
                    <div
                      key={`trusted-logo-a-${index}`}
                      className="flex items-center gap-2 hover:text-gray-900 transition-colors shrink-0"
                    >
                      {logo.icon}
                    </div>
                  ))}
                </div>
                {/* Track 2 (Identical duplicate for seamless continuous scroll) */}
                <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 text-gray-400 opacity-80 group-hover:opacity-100 transition-opacity shrink-0" aria-hidden="true">
                  {clientLogos.map((logo, index) => (
                    <div
                      key={`trusted-logo-b-${index}`}
                      className="flex items-center gap-2 hover:text-gray-900 transition-colors shrink-0"
                    >
                      {logo.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2 text-[11px] sm:text-[12px] text-gray-400 font-medium">
              <span>and 50+ more industry leaders</span>
              <span>•</span>
              <button
                type="button"
                onClick={() => setIsProjectsModalOpen(true)}
                className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1"
              >
                <span>Explore transformations</span>
                <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 1.5: HELPING TEAMS SLIDER (ACCORDION & WORDS)     */}
        {/* ========================================================= */}
        <HelpingTeamsSlider
          onOpenProjects={() => setIsProjectsModalOpen(true)}
          onBookCall={() => setIsBookModalOpen(true)}
        />

        {/* ========================================================= */}
        {/* SECTION 2: SERVICES SHOWCASE (100VH)                      */}
        {/* ========================================================= */}
        <ServicesSection onBookCall={() => setIsBookModalOpen(true)} />

        {/* ========================================================= */}
        {/* SECTION 2.5: WHY AXEON                                   */}
        {/* ========================================================= */}
        <WhyAxeonSection
          onBookCall={() => setIsBookModalOpen(true)}
          onOpenProjects={() => setIsProjectsModalOpen(true)}
        />

        {/* ========================================================= */}
        {/* SECTION 3: HOW IT WORKS (100VH)                           */}
        {/* ========================================================= */}
        <HowItWorksSection onBookCall={() => setIsBookModalOpen(true)} />

        {/* ========================================================= */}
        {/* MAIN FOOTER BAR                                           */}
        {/* ========================================================= */}
        <footer className="w-full py-8 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="font-semibold text-gray-800">
            <span>
              Axeon — Design and systems for{' '}
              <strong className="font-bold text-gray-900">
                Des Moines, Iowa
              </strong>{' '}
              &amp; beyond
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#why-axeon-section"
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Axeon
            </a>
            <a
              href="#solutions-section"
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Solutions
            </a>
            <button
              type="button"
              onClick={() => setIsProjectsModalOpen(true)}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => setIsBlogModalOpen(true)}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Ideas
            </button>
            <button
              type="button"
              onClick={() => setIsCareersModalOpen(true)}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Careers
            </button>
            <button
              type="button"
              onClick={() => setTriggerAuditDirectly(true)}
              className="hover:text-gray-900 transition-colors cursor-pointer font-medium"
            >
              Free Web Audit
            </button>
            <button
              type="button"
              onClick={() => setIsBookModalOpen(true)}
              className="text-[#2563EB] font-semibold hover:underline cursor-pointer"
            >
              Book Strategy Call
            </button>
          </div>
        </footer>
      </div>

      {/* Floating Prompt Pop-up (Free 30-min strategy call + Free Web Audit) */}
      <BookCallPrompt
        onBookCall={() => setIsBookModalOpen(true)}
        isOpenAuditDirectly={triggerAuditDirectly}
        onAuditDirectlyConsumed={() => setTriggerAuditDirectly(false)}
      />

      {/* ========================================================= */}
      {/* MODALS: Book A Call, Projects Gallery, Template, Review   */}
      {/* ========================================================= */}
      <BookCallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />

      <ProjectsModal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
        onBookCall={() => {
          setIsProjectsModalOpen(false);
          setIsBookModalOpen(true);
        }}
      />

      <WhyAxeonModal
        isOpen={isWhyModalOpen}
        onClose={() => setIsWhyModalOpen(false)}
        onBookCall={() => {
          setIsWhyModalOpen(false);
          setIsBookModalOpen(true);
        }}
        onOpenAudit={() => {
          setIsWhyModalOpen(false);
          setTriggerAuditDirectly(true);
        }}
      />

      <MyStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onBookCall={() => {
          setIsStoryModalOpen(false);
          setIsBookModalOpen(true);
        }}
        onOpenAudit={() => {
          setIsStoryModalOpen(false);
          setTriggerAuditDirectly(true);
        }}
      />

      <BlogModal
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        onBookCall={() => {
          setIsBlogModalOpen(false);
          setIsBookModalOpen(true);
        }}
        onOpenAudit={() => {
          setIsBlogModalOpen(false);
          setTriggerAuditDirectly(true);
        }}
      />

      <CareersModal
        isOpen={isCareersModalOpen}
        onClose={() => setIsCareersModalOpen(false)}
        onBookCall={() => {
          setIsCareersModalOpen(false);
          setIsBookModalOpen(true);
        }}
      />

      <TemplateModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
      />

      <ReviewDetailModal
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
        onBookCall={() => {
          setSelectedReview(null);
          setIsBookModalOpen(true);
        }}
      />

    </div>
  );
}
