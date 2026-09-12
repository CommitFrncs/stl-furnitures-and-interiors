import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, ShieldCheck } from 'lucide-react';
import { CATEGORIES, NIGERIA_STATES } from '../data/furnitureData';
import { Product } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
  initialCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  initialCategory,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: 'Office Furniture',
    destinationState: 'Lagos (Same-Day / 24-48hr Showroom & White Glove Delivery)',
    projectType: 'Corporate / Executive Office',
    specificPiece: '',
    notes: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        category: initialProduct.category,
        specificPiece: initialProduct.name,
      }));
    } else if (initialCategory && initialCategory !== 'All Collections') {
      setFormData((prev) => ({
        ...prev,
        category: initialCategory,
      }));
    }
  }, [initialProduct, initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const ref = `STL-QT-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(ref);
      setIsSubmitting(false);
    }, 500);
  };

  const handleResetAndClose = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0D]/85 backdrop-blur-sm">
      <div className="bg-[#16161A] border border-[#2D2D35] rounded-sm max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-[#888] hover:text-white p-1 rounded-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C9A96E]/20 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-serif-luxury text-[#EDEBE7]">
              Quote Request Logged
            </h3>

            <p className="text-sm text-[#A6A49E]">
              Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Your personalized estimate docket has been generated:
            </p>

            <div className="inline-block px-4 py-2 bg-[#1C1C22] border border-[#33333D] rounded-sm text-sm font-mono text-[#E5C992]">
              {submittedRef}
            </div>

            <p className="text-xs text-[#8A8883] leading-relaxed">
              Our Senior Project Director in Oja, Lagos is reviewing availability and freight logistics for{' '}
              <span className="text-[#DDD]">{formData.destinationState.split('(')[0]}</span>. We will call you at{' '}
              <span className="text-[#DDD]">{formData.phone}</span> shortly.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:09048018908"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#C9A96E] text-[#121214] rounded-sm text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly: 09048018908</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#24242C] text-[#D8D6D2] rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-[#2C2C36]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-[11px] font-semibold text-[#C9A96E] uppercase tracking-wider">
                Bespoke Order Desk
              </div>
              <h3 className="text-xl font-serif-luxury text-[#EDEBE7] mt-0.5">
                Request Itemized Quote & Catalog
              </h3>
              <p className="text-xs text-[#8F8D88] mt-1">
                Receive commercial pricing, lead times, and material specification sheets directly to your email and phone.
              </p>
            </div>

            {formData.specificPiece && (
              <div className="p-3 bg-[#1C1C22] rounded-sm border border-[#2F2F3A] text-xs flex items-center justify-between">
                <span className="text-[#888]">Selected Piece:</span>
                <span className="text-[#E5C992] font-semibold">{formData.specificPiece}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9B95] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arc. Kemi Adeleke"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-3 py-2 text-xs text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9B95] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="080... or 090..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-3 py-2 text-xs text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9B95] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-3 py-2 text-xs text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9B95] mb-1">
                  Collection Suite *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-3 py-2 text-xs text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E]"
                >
                  {CATEGORIES.filter((c) => c !== 'All Collections').map((c) => (
                    <option key={c} value={c} className="bg-[#121215] text-white">
                      {c}
                    </option>
                  ))}
                  <option value="Entire Residential Suite" className="bg-[#121215] text-white">
                    Entire Residential Suite
                  </option>
                  <option value="Corporate Office Project" className="bg-[#121215] text-white">
                    Corporate Office Project
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9B95] mb-1">
                Destination State in Nigeria *
              </label>
              <select
                value={formData.destinationState}
                onChange={(e) => setFormData({ ...formData, destinationState: e.target.value })}
                className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-3 py-2 text-xs text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E]"
              >
                {NIGERIA_STATES.map((s) => (
                  <option key={s} value={s} className="bg-[#121215] text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9B95] mb-1">
                Custom Specifications or Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Include custom sizes, wood finishes, or target delivery date..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-3 py-2 text-xs text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#C9A96E] hover:bg-[#D8B97F] text-[#121214] font-semibold text-xs tracking-widest uppercase rounded-sm transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Generating Quotation...' : 'Send Quote Request'}
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-[11px] text-[#7A7873] text-center flex items-center justify-center gap-4 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A96E]" />
                Confidential Trade Pricing
              </span>
              <span>•</span>
              <a href="tel:09048018908" className="hover:text-[#C9A96E]">
                Direct: 09048018908
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
