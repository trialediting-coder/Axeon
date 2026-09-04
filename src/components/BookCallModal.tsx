import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('Oct 24, 2026');
  const [selectedTime, setSelectedTime] = useState('2:30 PM');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$5k - $10k',
    description: '',
  });

  if (!isOpen) return null;

  const dates = ['Oct 24, 2026', 'Oct 25, 2026', 'Oct 28, 2026', 'Oct 29, 2026'];
  const times = ['10:00 AM', '11:30 AM', '2:30 PM', '4:00 PM', '5:15 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-xl bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-white/80 overflow-hidden max-h-[92dvh] overflow-y-auto overscroll-contain">
        <button
          id="close-book-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles size={11} className="text-emerald-600 fill-emerald-600" />
                100% FREE • Zero Cost
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-[11px] font-bold uppercase tracking-wider">
                <Clock size={11} />
                Quick 30 Minutes
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900 font-display pr-8">
              Book a Free 30-Min Discovery Call
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 mb-5">
              A quick 30-minute session at no cost (FREE). We&apos;ll discuss your product vision, system bottlenecks, and actionable conversion roadmap with zero sales pressure.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Date & Time selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Calendar size={13} className="text-gray-500" />
                  Select Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`text-xs py-2.5 px-2.5 rounded-xl border font-medium transition-all min-h-[40px] cursor-pointer ${
                        selectedDate === d
                          ? 'border-[#2563EB] bg-[#2563EB]/10 text-[#2563EB] font-semibold ring-1 ring-[#2563EB]'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white/70'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Clock size={13} className="text-gray-500" />
                  Available Time (US / Iowa CT)
                </label>
                <div className="flex flex-wrap gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`text-xs py-2 px-3 rounded-xl border font-medium transition-all min-h-[38px] cursor-pointer ${
                        selectedTime === t
                          ? 'border-[#2563EB] bg-[#2563EB] text-white font-semibold'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white/70'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Project</label>
                  <input
                    type="text"
                    placeholder="Acme SaaS"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-[#2563EB] transition-colors text-gray-800"
                  >
                    <option>$3k - $5k</option>
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Tell us about your goals</label>
                <textarea
                  rows={2}
                  placeholder="We are launching a new product and need a high-converting web presence..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-gray-50/80 border border-gray-200 text-base sm:text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-3.5 px-6 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(37,99,235,0.35)] transition-all active:scale-[0.98] min-h-[48px] cursor-pointer"
              >
                <span>Confirm Free 30-Min Call for {selectedDate}</span>
                <ArrowRight size={16} />
              </button>
              
              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-gray-500">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>100% Free • No Credit Card Required • No Sales Pressure</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-display">Call Confirmed!</h3>
            <p className="text-sm text-gray-600 max-w-sm mt-2">
              We&apos;ve sent an invitation to <span className="font-semibold text-gray-800">{formData.email || 'your email'}</span> for <span className="font-semibold text-gray-800">{selectedDate} at {selectedTime}</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 bg-gray-900 text-white text-sm font-semibold py-3 px-7 rounded-full hover:bg-gray-800 transition-colors min-h-[44px]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
