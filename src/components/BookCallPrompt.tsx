import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Sparkles, ArrowRight, Mail, CheckCircle2, Globe, Send } from 'lucide-react';

interface BookCallPromptProps {
  onBookCall: () => void;
  isOpenAuditDirectly?: boolean;
  onAuditDirectlyConsumed?: () => void;
}

export const BookCallPrompt: React.FC<BookCallPromptProps> = ({
  onBookCall,
  isOpenAuditDirectly,
  onAuditDirectlyConsumed,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [viewState, setViewState] = useState<'initial' | 'audit_prompt' | 'audit_submitted'>('initial');
  const [businessWebsite, setBusinessWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Show side banner automatically after 3 seconds on the site
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Listen to external request to open the audit view directly
  useEffect(() => {
    if (isOpenAuditDirectly) {
      setIsDismissed(false);
      setViewState('audit_prompt');
      setIsVisible(true);
      if (onAuditDirectlyConsumed) {
        onAuditDirectlyConsumed();
      }
    }
  }, [isOpenAuditDirectly, onAuditDirectlyConsumed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleMaybeLater = () => {
    setViewState('audit_prompt');
  };

  const handleOpenCall = () => {
    setIsVisible(false);
    onBookCall();
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessWebsite.trim()) {
      setFormError('Please enter your business website or name');
      return;
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      setFormError('Please enter a valid email address');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setViewState('audit_submitted');
      // Automatically dismiss after 3 seconds of showing success confirmation
      setTimeout(() => {
        handleDismiss();
      }, 3000);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !isDismissed && (
          <motion.aside
            id="book-call-prompt-popup"
            initial={{ opacity: 0, x: 60, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-[325px] sm:max-w-[345px] w-full"
            aria-label="Discovery Call Notification"
          >
            <div className="relative bg-white/98 backdrop-blur-xl border border-gray-200/95 border-l-4 border-l-[#2563EB] rounded-2xl p-4 sm:p-4.5 shadow-[0_12px_36px_rgba(0,0,0,0.1)]">
              {/* Close Button */}
              <button
                id="dismiss-book-prompt-btn"
                type="button"
                onClick={handleDismiss}
                className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Dismiss banner"
              >
                <X size={13} />
              </button>

              {/* VIEW 1: Minimalist Side Banner Prompt */}
              {viewState === 'initial' && (
                <motion.div
                  key="initial-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Headline */}
                  <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-950 font-display tracking-tight leading-snug pr-6">
                    Let&apos;s build your digital presence
                  </h4>

                  {/* Minimal Subtitle */}
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    Review your website UX, conversion bottlenecks, and roadmap.
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-3.5 flex items-center gap-2">
                    <button
                      id="prompt-book-call-cta"
                      type="button"
                      onClick={handleOpenCall}
                      className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-semibold rounded-full px-3.5 py-2 flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-[0.98] cursor-pointer min-h-[36px]"
                    >
                      <Calendar size={13} />
                      <span>Book Call</span>
                      <ArrowRight size={12} strokeWidth={2.5} />
                    </button>

                    <button
                      id="prompt-maybe-later-btn"
                      type="button"
                      onClick={handleMaybeLater}
                      className="text-[11px] text-gray-600 hover:text-gray-950 font-medium px-3 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer shrink-0 min-h-[36px]"
                    >
                      Audit
                    </button>
                  </div>
                </motion.div>
              )}

              {/* VIEW 2: Free Web Audit for Individual's Business */}
              {viewState === 'audit_prompt' && (
                <motion.div
                  key="audit-prompt-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="flex items-center gap-1.5 mb-1.5 pr-6">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-[#2563EB] text-[10px] font-bold uppercase tracking-wider border border-blue-200/60">
                      <Sparkles size={10} />
                      Free Audit
                    </span>
                    <span className="text-[10.5px] text-gray-400 font-medium">Delivered in 24h</span>
                  </div>

                  <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-950 font-display tracking-tight leading-snug">
                    Complimentary Website Audit
                  </h4>

                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    We&apos;ll inspect speed, mobile UX, and conversion leaks.
                  </p>

                  <form onSubmit={handleAuditSubmit} className="mt-2.5 space-y-2">
                    {/* Website / Business Name Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                        <Globe size={13} />
                      </div>
                      <input
                        id="audit-website-input"
                        type="text"
                        value={businessWebsite}
                        onChange={(e) => {
                          setBusinessWebsite(e.target.value);
                          if (formError) setFormError('');
                        }}
                        placeholder="yourwebsite.com or business name"
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] text-gray-900 transition-all"
                        autoFocus
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                        <Mail size={13} />
                      </div>
                      <input
                        id="audit-email-input"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (formError) setFormError('');
                        }}
                        placeholder="you@company.com"
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] text-gray-900 transition-all"
                      />
                    </div>

                    {formError && (
                      <p className="text-[10.5px] text-rose-600 font-medium pl-0.5">{formError}</p>
                    )}

                    <div className="flex items-center gap-1.5 pt-0.5">
                      <button
                        id="submit-audit-prompt-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gray-950 hover:bg-black text-white text-xs font-semibold rounded-full px-3 py-2 flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-[0.98] cursor-pointer min-h-[34px] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Analyzing...</span>
                        ) : (
                          <>
                            <Send size={12} />
                            <span>Send Me Free Audit</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleDismiss}
                        className="text-[11px] text-gray-400 hover:text-gray-700 font-medium px-2 py-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
                      >
                        Skip
                      </button>
                    </div>
                  </form>

                  <div className="mt-2 pt-1.5 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
                    <span>100% Free • No obligation</span>
                    <button
                      type="button"
                      onClick={() => setViewState('initial')}
                      className="text-[#2563EB] hover:underline font-medium cursor-pointer"
                    >
                      ← Back to call
                    </button>
                  </div>
                </motion.div>
              )}

              {/* VIEW 3: Audit Submitted Confirmation */}
              {viewState === 'audit_submitted' && (
                <motion.div
                  key="audit-submitted-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-2.5 flex flex-col items-center text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2 shadow-xs">
                    <CheckCircle2 size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-gray-950 font-display">
                    Audit Request Received!
                  </h4>
                  <p className="mt-0.5 text-xs text-gray-600 max-w-xs">
                    We will audit <strong>{businessWebsite}</strong> and send your full breakdown to <strong>{email}</strong> within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Persistent Minimalist Floating Pill (When minimized) */}
      {isDismissed && (
        <motion.button
          id="reopen-book-prompt-pill"
          type="button"
          onClick={() => {
            setIsDismissed(false);
            setViewState('initial');
            setIsVisible(true);
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-white/95 backdrop-blur-md border border-gray-200 text-gray-800 rounded-full pl-3 pr-3.5 py-1.5 shadow-md hover:border-blue-400 flex items-center gap-2 text-[11.5px] font-medium transition-all cursor-pointer group"
          title="Open strategy call and free web audit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#2563EB] font-bold">Free</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-700 group-hover:text-gray-900">30m Strategy Call</span>
          <Calendar size={12} className="text-gray-400 group-hover:text-[#2563EB] ml-0.5" />
        </motion.button>
      )}
    </>
  );
};
