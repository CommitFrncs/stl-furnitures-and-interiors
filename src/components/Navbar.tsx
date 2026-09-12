import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (preselectedCategory?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#products' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Nationwide Delivery', href: '#service-area' },
    { name: 'Showroom & Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111113]/95 backdrop-blur-md border-b border-[#2A2A2F] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#111113]/90 via-[#111113]/60 to-transparent py-5'
      }`}
    >
      {/* Top micro banner */}
      <div className="hidden lg:block border-b border-[#26262B] pb-2 mb-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-[#A09E9B]">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#C9A96E]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Flagship Showroom: Oja, Lagos • Nationwide Delivery Across Nigeria</span>
            </span>
            <span className="text-[#656360]">•</span>
            <span className="tracking-wide">Crafted for Professionals, Designed for Excellence.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              id="topbar-email-link"
              href="mailto:sales@stlfurnitureandinteriors.com"
              className="flex items-center gap-1.5 hover:text-[#C9A96E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>sales@stlfurnitureandinteriors.com</span>
            </a>
            <a
              id="topbar-phone-link"
              href="tel:09048018908"
              className="flex items-center gap-1.5 font-semibold text-[#E8E6E3] hover:text-[#C9A96E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>09048018908</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <a id="brand-logo-link" href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#C9A96E] via-[#A8884B] to-[#7E6533] p-[1px] flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-[#161619] flex items-center justify-center">
                <span className="font-cinzel text-base font-bold text-[#E5C992] tracking-wider">STL</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-base tracking-[0.18em] font-bold text-white group-hover:text-[#C9A96E] transition-colors">
                STL FURNITURE
              </span>
              <span className="text-[10px] tracking-[0.26em] uppercase text-[#9C9994]">
                & INTERIORS • LAGOS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8 text-sm tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="text-[#B5B3AE] hover:text-[#C9A96E] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A96E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              id="nav-call-btn"
              href="tel:09048018908"
              className="flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-semibold text-[#E8E6E3] border border-[#3A3A40] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>09048018908</span>
            </a>

            <button
              id="nav-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#C9A96E] hover:bg-[#D8B97F] text-[#121214] font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-[#C9A96E]/20"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#C9A96E] hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#161619] border-b border-[#2D2D32] px-6 py-6 mt-3 space-y-4">
          <div className="pb-3 border-b border-[#2A2A30] text-xs text-[#9E9B95] space-y-1">
            <p className="text-[#C9A96E] font-medium">Showroom: Oja, Lagos • Nationwide Delivery</p>
            <p>Crafted for Professionals, Designed for Excellence.</p>
          </div>

          <div className="flex flex-col space-y-3 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#D8D6D2] hover:text-[#C9A96E] py-1 font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#2A2A30] space-y-3">
            <a
              id="mobile-call-cta"
              href="tel:09048018908"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-sm border border-[#3E3E45] text-sm text-[#E8E6E3] font-semibold"
            >
              <Phone className="w-4 h-4 text-[#C9A96E]" />
              <span>Call 09048018908</span>
            </a>

            <a
              id="mobile-email-cta"
              href="mailto:sales@stlfurnitureandinteriors.com"
              className="flex items-center justify-center gap-2 w-full py-2 text-xs text-[#A9A7A2]"
            >
              <Mail className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>sales@stlfurnitureandinteriors.com</span>
            </a>

            <button
              id="mobile-request-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-sm bg-[#C9A96E] text-[#121214] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>Request Quote / Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
