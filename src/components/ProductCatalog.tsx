import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/furnitureData';
import { Product } from '../types';
import { Check, ArrowRight, Eye, Layers, Ruler, Clock } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProductForQuote: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Collections');
  const [selectedProductDetails, setSelectedProductDetails] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === 'All Collections'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#141417] border-t border-[#232328]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-2">
              Signature Collections
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#F4F3EF] tracking-tight">
              Curated for Distinguished Interiors
            </h2>
            <p className="text-sm text-[#9E9B95] mt-2 max-w-xl">
              Precision-crafted for corporate executives, luxury residences, and architectural fit-outs across Nigeria.
            </p>
          </div>

          <div className="text-xs text-[#9E9B95] border-l border-[#2B2B32] pl-4 py-1">
            <span className="block text-[#E8E6E3] font-medium">Bespoke Dimensions Available</span>
            <span>Custom timber stains, marble choices & upholstery finishes</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-[#232328]">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-sm text-xs font-medium tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#C9A96E] text-[#121214] font-semibold shadow-md'
                    : 'bg-[#1C1C21] text-[#A6A49F] hover:text-[#E8E6E3] hover:bg-[#25252C] border border-[#2B2B33]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group bg-[#18181D] rounded-sm border border-[#27272E] hover:border-[#C9A96E]/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] bg-[#121214] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle category tag */}
                <div className="absolute top-3 left-3 bg-[#111113]/90 backdrop-blur-md px-3 py-1 rounded-sm border border-[#303038] text-[11px] font-medium text-[#C9A96E] tracking-wider uppercase">
                  {product.category}
                </div>

                {product.badge && (
                  <div className="absolute top-3 right-3 bg-[#C9A96E] text-[#111113] px-2.5 py-0.5 rounded-sm text-[10px] font-bold tracking-widest uppercase shadow">
                    {product.badge}
                  </div>
                )}

                {/* Overlay Quick View Button */}
                <button
                  onClick={() => setSelectedProductDetails(product)}
                  className="absolute inset-0 bg-[#111113]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-white backdrop-blur-[2px]"
                >
                  <span className="px-4 py-2 rounded-sm bg-[#16161A]/90 border border-[#3A3A42] flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span>View Specifications</span>
                  </span>
                </button>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif-luxury font-medium text-[#EDEBE7] group-hover:text-[#E5C992] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#9E9B95] mt-1.5 line-clamp-2">
                    {product.tagline}
                  </p>

                  {/* Materials Chip list */}
                  <div className="mt-4 pt-4 border-t border-[#23232A] space-y-1.5 text-xs text-[#BAB8B2]">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                      <span className="truncate">{product.materials.join(' • ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                      <span className="text-[11px] text-[#8F8D88]">{product.dimensions}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Quote CTA */}
                <div className="mt-6 pt-4 border-t border-[#23232A] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8782] block">
                      Investment
                    </span>
                    <span className="text-base font-semibold text-[#F2F0EC]">
                      {product.priceFormatted}
                    </span>
                  </div>

                  <button
                    id={`quote-btn-${product.id}`}
                    onClick={() => onSelectProductForQuote(product)}
                    className="px-4 py-2 rounded-sm bg-[#232329] hover:bg-[#C9A96E] text-[#DEDCD7] hover:text-[#111113] border border-[#33333C] hover:border-[#C9A96E] text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order / Architecture Consultation Banner */}
        <div className="mt-16 p-8 rounded-sm bg-gradient-to-r from-[#1C1C22] via-[#1A1A1F] to-[#16161A] border border-[#2D2D38] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <h3 className="text-xl font-serif-luxury text-[#F4F3EF]">
              Requiring Custom Proportions or Full Interior Fit-Outs?
            </h3>
            <p className="text-xs sm:text-sm text-[#A19F9A] mt-1.5">
              We collaborate with private homeowners, estate architects, and corporate procurement teams across Nigeria for custom sizing, bespoke wood stain matching, and tailored fabric palettes.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              id="catalog-call-sales"
              href="tel:09048018908"
              className="flex-1 md:flex-none text-center px-6 py-3 rounded-sm border border-[#3E3E47] text-xs font-semibold text-[#EDEBE7] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
            >
              Call 09048018908
            </a>
            <button
              onClick={() => onSelectProductForQuote(PRODUCTS[0])}
              className="flex-1 md:flex-none px-6 py-3 rounded-sm bg-[#C9A96E] hover:bg-[#D8B97F] text-[#121214] text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Custom Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Product Specification Modal */}
      {selectedProductDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090C]/85 backdrop-blur-md">
          <div className="bg-[#18181D] border border-[#2E2E36] rounded-sm max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-[#2A2A32]">
              <div>
                <span className="text-[11px] font-semibold text-[#C9A96E] uppercase tracking-wider">
                  {selectedProductDetails.category}
                </span>
                <h3 className="text-2xl font-serif-luxury text-white mt-1">
                  {selectedProductDetails.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="text-[#999] hover:text-white p-1 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div className="aspect-[16/9] rounded-sm overflow-hidden bg-[#111113]">
                <img
                  src={selectedProductDetails.image}
                  alt={selectedProductDetails.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-[#C4C2BE] leading-relaxed">
                {selectedProductDetails.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#131316] p-4 rounded-sm border border-[#25252C]">
                <div>
                  <span className="text-[#888] block mb-1">Dimensions:</span>
                  <span className="text-white font-medium">{selectedProductDetails.dimensions}</span>
                </div>
                <div>
                  <span className="text-[#888] block mb-1">Lead Time & Fulfillment:</span>
                  <span className="text-white font-medium">{selectedProductDetails.leadTime}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[#888] block mb-1">Finishes & Materials:</span>
                  <ul className="list-disc list-inside text-[#D0CECA] space-y-0.5">
                    {selectedProductDetails.materials.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2A32] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#888] block">Price Guide:</span>
                  <span className="text-xl font-bold text-white">
                    {selectedProductDetails.priceFormatted}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const prod = selectedProductDetails;
                      setSelectedProductDetails(null);
                      onSelectProductForQuote(prod);
                    }}
                    className="px-6 py-3 bg-[#C9A96E] hover:bg-[#D8B97F] text-[#121214] font-semibold text-xs tracking-wider uppercase rounded-sm"
                  >
                    Request Item Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
