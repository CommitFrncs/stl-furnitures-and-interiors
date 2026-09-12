import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceArea } from './components/ServiceArea';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Product } from './types';
import { Phone, ArrowRight } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [preselectedCategory, setPreselectedCategory] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (category?: string) => {
    setSelectedProduct(null);
    setPreselectedCategory(category);
    setQuoteModalOpen(true);
  };

  const handleProductQuote = (product: Product) => {
    setSelectedProduct(product);
    setPreselectedCategory(product.category);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#111113] text-[#E8E6E3] selection:bg-[#C9A96E] selection:text-[#111113] font-sans">
      {/* Primary Sticky Header */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main>
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Products & Collections Showcase */}
        <ProductCatalog onSelectProductForQuote={handleProductQuote} />

        {/* The STL Standard / Why Choose Us */}
        <WhyChooseUs />

        {/* Service Area & Nationwide Logistics from Oja, Lagos */}
        <ServiceArea />

        {/* Contact & Consultation Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quote & Specification Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={selectedProduct}
        initialCategory={preselectedCategory}
      />

      {/* Mobile Quick Action Dock (STRICTLY NO WHATSAPP: Only Direct Phone & Quote) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#141418]/95 backdrop-blur-md border-t border-[#26262D] p-3 flex items-center gap-3">
        <a
          id="mobile-dock-call"
          href="tel:09048018908"
          className="flex-1 py-3 bg-[#1F1F24] border border-[#363640] rounded-sm text-xs font-semibold text-[#EDEBE7] flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
          <span>Call 09048018908</span>
        </a>

        <button
          id="mobile-dock-quote"
          onClick={() => handleOpenQuoteModal()}
          className="flex-1 py-3 bg-[#C9A96E] text-[#111113] rounded-sm text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
