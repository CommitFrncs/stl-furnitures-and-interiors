import React from 'react';
import { Phone, Mail, MapPin, Shield, ArrowUp } from 'lucide-react';
import { CATEGORIES } from '../data/furnitureData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0C0C0E] border-t border-[#1F1F24] text-[#8C8A85] text-xs">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Crest Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#C9A96E] to-[#7E6533] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#141417] flex items-center justify-center">
                  <span className="font-cinzel text-sm font-bold text-[#E5C992]">STL</span>
                </div>
              </div>
              <div>
                <span className="font-cinzel text-sm tracking-[0.16em] font-bold text-white block">
                  STL FURNITURE
                </span>
                <span className="text-[9px] tracking-[0.24em] uppercase text-[#A09E98]">
                  & INTERIORS • LAGOS
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A19F9A] leading-relaxed max-w-sm">
              Crafted for Professionals, Designed for Excellence. Premium bespoke furniture and turnkey interior architecture for commercial headquarters, executive suites, and private residences across Nigeria.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#C9A96E]">
              <Shield className="w-3.5 h-3.5" />
              <span>Registered Luxury Furniture Manufacturer in Nigeria</span>
            </div>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDEBE7] font-semibold">
              Product Categories
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.filter((c) => c !== 'All Collections').map((category) => (
                <li key={category}>
                  <a
                    href="#products"
                    className="text-[#9E9B95] hover:text-[#C9A96E] transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
              <li>
                <a href="#products" className="text-[#9E9B95] hover:text-[#C9A96E] transition-colors">
                  Architectural Fit-Outs
                </a>
              </li>
            </ul>
          </div>

          {/* Logistics & Locations */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDEBE7] font-semibold">
              Delivery Corridors
            </h4>
            <ul className="space-y-2 text-[#9E9B95]">
              <li>Oja, Lagos (Flagship)</li>
              <li>Abuja FCT (Central Corridor)</li>
              <li>Port Harcourt & Rivers</li>
              <li>Ibadan & South-West</li>
              <li>Enugu & Eastern Hubs</li>
              <li>Nationwide Freight</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDEBE7] font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9A96E] shrink-0 mt-0.5" />
                <span>Oja, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                <a href="tel:09048018908" className="text-[#DDD] hover:text-[#C9A96E] font-medium">
                  09048018908
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                <a
                  href="mailto:sales@stlfurnitureandinteriors.com"
                  className="text-[#DDD] hover:text-[#C9A96E] truncate"
                >
                  sales@stlfurnitureandinteriors.com
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#787672]">
              Monday – Saturday: 8:00 AM – 6:00 PM WAT
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1C1C20] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[#73716D]">
            © {new Date().getFullYear()} STL Furniture and Interiors. All Rights Reserved. Crafted for Professionals, Designed for Excellence.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#9E9B95] hover:text-[#C9A96E] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
