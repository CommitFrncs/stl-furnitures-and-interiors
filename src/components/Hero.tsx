import React from 'react';
import { HERO_IMAGE } from '../data/furnitureData';
import { ArrowRight, Phone, Shield, Sparkles, MapPin, Truck } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero-section" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          id="hero-bg-image"
          src={HERO_IMAGE}
          alt="STL Furniture and Interiors Luxury Penthouse Showroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111113] via-[#111113]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-[#111113]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Subtle location & segment badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F24]/90 border border-[#C9A96E]/30 text-xs text-[#E5C992] mb-6 shadow-lg backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span className="font-medium tracking-wide">
              Showroom in Oja, Lagos — Nationwide Delivery Across All 36 States
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-medium tracking-tight text-[#F5F4F0] leading-[1.15] mb-6">
            Crafted for Professionals,{' '}
            <span className="italic font-light text-[#E5C992] block mt-1">
              Designed for Excellence.
            </span>
          </h1>

          {/* Subtitle / Positioning */}
          <p className="text-base sm:text-lg text-[#BDBBB7] font-normal leading-relaxed mb-8 max-w-2xl">
            STL Furniture and Interiors designs and curates architectural office furniture, sculpted sofas, bespoke TV consoles, monolithic dining sets, and presidential bed frames for Nigeria’s most discerning executives, interior designers, and luxury residences.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              id="hero-quote-btn"
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-sm bg-[#C9A96E] hover:bg-[#D8B97F] text-[#111113] font-semibold text-xs tracking-widest uppercase transition-all duration-200 shadow-xl hover:shadow-[#C9A96E]/20 flex items-center gap-2"
            >
              <span>Request Bespoke Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="hero-browse-collections-btn"
              href="#products"
              className="px-7 py-4 rounded-sm bg-[#1B1B20]/90 hover:bg-[#25252C] border border-[#3E3E48] hover:border-[#C9A96E]/60 text-[#E8E6E3] font-semibold text-xs tracking-widest uppercase transition-all duration-200 flex items-center gap-2"
            >
              <span>View Collections</span>
            </a>

            <a
              id="hero-call-btn"
              href="tel:09048018908"
              className="px-6 py-4 rounded-sm border border-transparent hover:border-[#383840] text-[#D4D2CD] hover:text-[#C9A96E] font-medium text-xs tracking-wider transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C9A96E]" />
              <span>Direct: 09048018908</span>
            </a>
          </div>

          {/* Value proposition pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#2B2B32]/90">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#1C1C22] border border-[#2F2F38] text-[#C9A96E]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#EDEBE7]">5 Curated Suites</h4>
                <p className="text-xs text-[#9E9B95] mt-0.5">Office, Living, Media, Dining & Suites</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#1C1C22] border border-[#2F2F38] text-[#C9A96E]">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#EDEBE7]">Nationwide White-Glove</h4>
                <p className="text-xs text-[#9E9B95] mt-0.5">Direct from Lagos with on-site assembly</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#1C1C22] border border-[#2F2F38] text-[#C9A96E]">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#EDEBE7]">Bespoke Craftsmanship</h4>
                <p className="text-xs text-[#9E9B95] mt-0.5">Kiln-dried hardwoods & imported hardware</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
