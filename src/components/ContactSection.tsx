import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, FileText } from 'lucide-react';
import { NIGERIA_STATES, CATEGORIES } from '../data/furnitureData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'Office Furniture',
    destinationState: 'Lagos (Same-Day / 24-48hr Showroom & White Glove Delivery)',
    projectType: 'Corporate / Executive Office',
    message: '',
  });

  const [submittedReference, setSubmittedReference] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable lead capture processing
    setTimeout(() => {
      const ref = `STL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedReference(ref);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#111113] border-t border-[#232328] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-2">
            Inquire & Consult
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#F4F3EF] tracking-tight">
            Initiate Your Project Consultation
          </h2>
          <p className="text-sm text-[#9E9B95] mt-3">
            Whether furnishing a C-suite corporate headquarters or an executive private residence, our design directors in Oja, Lagos are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Showroom Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#16161A] p-8 rounded-sm border border-[#272730] shadow-xl space-y-6">
              <h3 className="text-xl font-serif-luxury text-[#EDEBE7]">
                STL Furniture and Interiors
              </h3>
              <p className="text-xs text-[#A3A19C] leading-relaxed">
                "Crafted for Professionals, Designed for Excellence." Reach our client engagement desk directly or schedule a private showroom walkthrough.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  id="contact-card-phone"
                  href="tel:09048018908"
                  className="flex items-start gap-3.5 p-3 rounded-sm bg-[#1B1B20] border border-[#2A2A33] hover:border-[#C9A96E]/50 transition-colors group"
                >
                  <div className="p-2 bg-[#24242C] rounded-sm text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-[#121214] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#8A8883] uppercase tracking-wider block">
                      Direct Telephone Line
                    </span>
                    <span className="text-sm font-semibold text-[#EDEBE7] group-hover:text-[#C9A96E] transition-colors">
                      09048018908
                    </span>
                    <span className="text-[10px] text-[#A6A49E] block mt-0.5">
                      Available Mon-Sat for instant pricing & inquiries
                    </span>
                  </div>
                </a>

                <a
                  id="contact-card-email"
                  href="mailto:sales@stlfurnitureandinteriors.com"
                  className="flex items-start gap-3.5 p-3 rounded-sm bg-[#1B1B20] border border-[#2A2A33] hover:border-[#C9A96E]/50 transition-colors group"
                >
                  <div className="p-2 bg-[#24242C] rounded-sm text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-[#121214] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#8A8883] uppercase tracking-wider block">
                      Official Sales Inbox
                    </span>
                    <span className="text-sm font-semibold text-[#EDEBE7] group-hover:text-[#C9A96E] transition-colors">
                      sales@stlfurnitureandinteriors.com
                    </span>
                    <span className="text-[10px] text-[#A6A49E] block mt-0.5">
                      Send architectural CAD files & specifications
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-sm bg-[#1B1B20] border border-[#2A2A33]">
                  <div className="p-2 bg-[#24242C] rounded-sm text-[#C9A96E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#8A8883] uppercase tracking-wider block">
                      Showroom & Design Studio
                    </span>
                    <span className="text-sm font-semibold text-[#EDEBE7]">
                      Oja, Lagos, Nigeria
                    </span>
                    <span className="text-[10px] text-[#A6A49E] block mt-0.5">
                      Nationwide delivery & white-glove setup across all 36 states
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-[#26262E] flex items-center justify-between text-xs text-[#9E9B95]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C9A96E]" />
                  <span>Mon – Sat: 8:00 AM – 6:00 PM WAT</span>
                </div>
                <span className="text-[#C9A96E] font-medium">Prompt Response</span>
              </div>
            </div>

            {/* Corporate Procurement Notice */}
            <div className="p-6 bg-[#16161A] rounded-sm border border-[#272730] text-xs text-[#9E9B95] space-y-2">
              <div className="flex items-center gap-2 text-[#C9A96E] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Architect & Interior Designer Trade Accounts</span>
              </div>
              <p>
                Registered Nigerian architects, interior decorators, and corporate procurement managers are eligible for trade pricing schedules and complimentary sample finish boxes.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-[#16161A] p-8 sm:p-10 rounded-sm border border-[#272730] shadow-2xl">
            {submittedReference ? (
              <div id="form-success-banner" className="py-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#C9A96E]/20 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif-luxury text-[#EDEBE7]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#A6A49E] max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Your inquiry has been registered with reference ID:
                </p>
                <div className="inline-block px-4 py-2 bg-[#1F1F26] border border-[#3A3A45] rounded-sm text-sm font-mono text-[#E5C992] tracking-wider">
                  {submittedReference}
                </div>
                <p className="text-xs text-[#8C8A85] max-w-md mx-auto">
                  Our Senior Furniture Consultant will review your requirements for{' '}
                  <span className="text-[#DDD]">{formData.category}</span> and contact you at{' '}
                  <span className="text-[#DDD]">{formData.phone}</span> / {formData.email} within 2 business hours.
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmittedReference(null);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        category: 'Office Furniture',
                        destinationState: 'Lagos (Same-Day / 24-48hr Showroom & White Glove Delivery)',
                        projectType: 'Corporate / Executive Office',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-[#25252D] hover:bg-[#C9A96E] hover:text-[#121214] text-xs font-semibold uppercase tracking-wider text-[#DCDAD5] transition-colors rounded-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form id="lead-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="pb-2 border-b border-[#26262E]">
                  <h3 className="text-xl font-serif-luxury text-[#EDEBE7]">
                    Request a Quotation or Showroom Appointment
                  </h3>
                  <p className="text-xs text-[#8F8D88] mt-1">
                    Fill in your project specifications below. Our design consultants will prepare itemized estimates and digital catalog sheets.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A6A49E] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Arc. Oluwaseun Davies"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-4 py-2.5 text-sm text-[#EDEBE7] placeholder-[#555] focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A6A49E] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. 0803 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-4 py-2.5 text-sm text-[#EDEBE7] placeholder-[#555] focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A6A49E] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-4 py-2.5 text-sm text-[#EDEBE7] placeholder-[#555] focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-category"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A6A49E] mb-1.5"
                    >
                      Primary Collection of Interest *
                    </label>
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-4 py-2.5 text-sm text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E] transition-colors"
                    >
                      {CATEGORIES.filter((c) => c !== 'All Collections').map((cat) => (
                        <option key={cat} value={cat} className="bg-[#121215] text-white">
                          {cat}
                        </option>
                      ))}
                      <option value="Entire Residential Package" className="bg-[#121215] text-white">
                        Entire Residential Package
                      </option>
                      <option value="Complete Corporate Fit-out" className="bg-[#121215] text-white">
                        Complete Corporate Fit-out
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A6A49E] mb-1.5"
                    >
                      Project Classification
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-4 py-2.5 text-sm text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E] transition-colors"
                    >
                      <option value="Corporate / Executive Office">Corporate / Executive Office</option>
                      <option value="Luxury Private Residence">Luxury Private Residence</option>
                      <option value="Architect / Interior Designer Client">Architect / Interior Designer Client</option>
                      <option value="Hospitality / Hotel Suite">Hospitality / Hotel Suite</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-state"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A6A49E] mb-1.5"
                    >
                      Delivery Destination State
                    </label>
                    <select
                      id="contact-state"
                      value={formData.destinationState}
                      onChange={(e) => setFormData({ ...formData, destinationState: e.target.value })}
                      className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-4 py-2.5 text-sm text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E] transition-colors"
                    >
                      {NIGERIA_STATES.map((state) => (
                        <option key={state} value={state} className="bg-[#121215] text-white">
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium uppercase tracking-wider text-[#A6A49E] mb-1.5"
                  >
                    Project Details & Dimensions (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Provide any specific dimensions, quantity requirements, or preferred timber/marble finishes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#121215] border border-[#30303A] rounded-sm px-4 py-2.5 text-sm text-[#EDEBE7] placeholder-[#555] focus:outline-none focus:border-[#C9A96E] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-sm bg-[#C9A96E] hover:bg-[#D8B97F] text-[#111113] font-semibold text-xs tracking-widest uppercase transition-all duration-200 shadow-xl flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Processing Specifications...</span>
                    ) : (
                      <>
                        <span>Submit Project Specifications</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#7A7873] text-center mt-2">
                    Direct inquiries are routed directly to sales@stlfurnitureandinteriors.com
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
