import React from 'react';
import { WHY_CHOOSE_US, TESTIMONIALS } from '../data/furnitureData';
import { ShieldCheck, Award, Truck, Compass, CheckCircle2, Quote } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [Compass, Award, Truck, ShieldCheck];

  return (
    <section id="why-us" className="py-24 bg-[#111113] relative overflow-hidden">
      {/* Decorative subtle ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-2">
            The STL Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#F4F3EF] tracking-tight">
            Why Discerning Clients Choose STL
          </h2>
          <p className="text-sm text-[#9E9B95] mt-3 leading-relaxed">
            Every piece bearing the STL crest embodies our foundational philosophy: Crafted for Professionals, Designed for Excellence.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {WHY_CHOOSE_US.map((pillar, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={pillar.title}
                id={`why-card-${index}`}
                className="p-8 rounded-sm bg-[#161619] border border-[#27272D] hover:border-[#C9A96E]/40 transition-all duration-300 group shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#1E1E24] border border-[#30303A] flex items-center justify-center text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-[#111113] transition-colors shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#C9A96E] font-semibold block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-xl font-serif-luxury font-medium text-[#EDEBE7] mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E9B95] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specs Comparison Table / Trust Box */}
        <div className="bg-[#17171C] rounded-sm border border-[#282830] p-8 mb-20">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-serif-luxury text-[#F2F0EC]">
              Commercial Durability Engineered for Nigerian Environments
            </h3>
            <p className="text-xs text-[#8E8C87] mt-1">
              Engineered to outperform delicate imported flat-pack items through robust structural timber and precision hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-4 bg-[#121215] rounded-sm border border-[#23232A]">
              <div className="flex items-center gap-2 text-[#C9A96E] font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Seasoned Hardwood Core</span>
              </div>
              <p className="text-[#9E9B95] leading-relaxed">
                Zero hollow honeycomb boards. Kiln-dried Obeche and Mahogany resistant to bowing, humidity swelling, and tropical pests.
              </p>
            </div>

            <div className="p-4 bg-[#121215] rounded-sm border border-[#23232A]">
              <div className="flex items-center gap-2 text-[#C9A96E] font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Heavy-Duty Joinery</span>
              </div>
              <p className="text-[#9E9B95] leading-relaxed">
                Austrian soft-close mechanisms, dowelled mortise-and-tenon joints, and reinforced steel sub-frames rated for heavy commercial use.
              </p>
            </div>

            <div className="p-4 bg-[#121215] rounded-sm border border-[#23232A]">
              <div className="flex items-center gap-2 text-[#C9A96E] font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Full Transit Insurance</span>
              </div>
              <p className="text-[#9E9B95] leading-relaxed">
                Crated in multi-layer shockproof protective cladding. Fully insured from our Lagos workshop until final on-site installation.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials from Nigerian clients */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-semibold mb-2">
              Client Endorsements
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#F4F3EF]">
              Trusted by Architects & Executives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                id={`testimonial-${idx}`}
                className="bg-[#151518] p-6 rounded-sm border border-[#26262C] flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#C9A96E]/40 mb-3" />
                  <p className="text-xs sm:text-sm text-[#C4C2BE] italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#232328]">
                  <div className="text-xs font-semibold text-[#EDEBE7]">{item.client}</div>
                  <div className="text-[11px] text-[#8C8A85] mt-0.5">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
