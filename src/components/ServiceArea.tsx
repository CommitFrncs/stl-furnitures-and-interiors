import React, { useState } from 'react';
import { MapPin, Truck, Check, Clock, Phone, Mail, ShieldAlert } from 'lucide-react';
import { NIGERIA_STATES } from '../data/furnitureData';

export const ServiceArea: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>(NIGERIA_STATES[0]);
  const [calculatedInfo, setCalculatedInfo] = useState<{
    timeline: string;
    assembly: string;
    hub: string;
  }>({
    timeline: '24 - 48 Hours White-Glove Dispatch',
    assembly: 'Complimentary On-Site Assembly & Room Placement',
    hub: 'Direct from Oja, Lagos Showroom',
  });

  const handleStateChange = (stateName: string) => {
    setSelectedState(stateName);
    if (stateName.includes('Lagos')) {
      setCalculatedInfo({
        timeline: '24 - 48 Hours White-Glove Dispatch',
        assembly: 'Complimentary On-Site Assembly & Room Placement',
        hub: 'Direct from Oja, Lagos Showroom & Studio',
      });
    } else if (stateName.includes('Abuja')) {
      setCalculatedInfo({
        timeline: '3 - 4 Business Days Insured Freight',
        assembly: 'Dedicated STL Assembly Crew in Abuja FCT',
        hub: 'Direct Dedicated Trucking: Lagos to Abuja Corridor',
      });
    } else if (stateName.includes('Rivers') || stateName.includes('Delta') || stateName.includes('Edo')) {
      setCalculatedInfo({
        timeline: '3 - 5 Business Days Insured Freight',
        assembly: 'Regional Installation Support Available',
        hub: 'Lagos to South-South Express Transit',
      });
    } else if (stateName.includes('Oyo') || stateName.includes('Ogun') || stateName.includes('Osun')) {
      setCalculatedInfo({
        timeline: '48 - 72 Hours Priority Courier',
        assembly: 'Direct STL Technician Team Deployment',
        hub: 'South-West Regional Corridor',
      });
    } else {
      setCalculatedInfo({
        timeline: '4 - 6 Business Days Insured Nationwide Freight',
        assembly: 'Detailed Blueprint Assembly + Technician Callout',
        hub: 'Nationwide Logistics Network from Lagos Hub',
      });
    }
  };

  return (
    <section id="service-area" className="py-24 bg-[#141418] border-t border-[#232328] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C22] border border-[#C9A96E]/30 text-xs text-[#C9A96E] font-medium mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Showroom & Nationwide Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#F4F3EF] tracking-tight">
            Based in Oja, Lagos. Delivering Across Nigeria.
          </h2>
          <p className="text-sm text-[#9E9B95] mt-3">
            From our primary design center in Oja, Lagos, we oversee precision manufacturing, quality control crating, and direct nationwide white-glove transport to every state in Nigeria.
          </p>
        </div>

        {/* 2-Column Showcase: Interactive Coverage Calculator & Hub Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Flagship Hub & Direct Access */}
          <div className="lg:col-span-5 bg-[#18181D] p-8 rounded-sm border border-[#27272F] shadow-xl space-y-6">
            <div>
              <span className="text-[11px] font-semibold text-[#C9A96E] uppercase tracking-wider block">
                Flagship Showroom & Workshop
              </span>
              <h3 className="text-2xl font-serif-luxury text-[#EDEBE7] mt-1">
                Oja, Lagos State
              </h3>
              <p className="text-xs text-[#9E9B95] mt-2 leading-relaxed">
                Visit our showroom by private appointment to inspect grain textures, test upholstery cushioning firmness, and review timber sample swatches with our chief interior designer.
              </p>
            </div>

            <div className="pt-4 border-t border-[#26262E] space-y-3.5 text-xs text-[#C5C3BF]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Showroom Location:</span>
                  <span>Oja, Lagos, Nigeria</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Showroom & Order Line:</span>
                  <a href="tel:09048018908" className="hover:text-[#C9A96E] transition-colors font-semibold">
                    09048018908
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Sales & Specifications:</span>
                  <a
                    href="mailto:sales@stlfurnitureandinteriors.com"
                    className="hover:text-[#C9A96E] transition-colors"
                  >
                    sales@stlfurnitureandinteriors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Operating Hours:</span>
                  <span>Monday – Saturday: 8:00 AM – 6:00 PM WAT</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#26262E]">
              <div className="p-4 bg-[#141417] rounded-sm border border-[#2B2B33] text-xs text-[#9E9B95]">
                <span className="text-[#C9A96E] font-medium block mb-1">
                  Private Showroom Visits:
                </span>
                We accommodate scheduled walkthroughs for architects, corporate purchasers, and discerning private clients.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive State Logistics Simulator */}
          <div className="lg:col-span-7 bg-[#18181D] p-8 rounded-sm border border-[#27272F] shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#26262E] mb-6">
              <div>
                <span className="text-[11px] font-semibold text-[#C9A96E] uppercase tracking-wider block">
                  Delivery Coverage Simulator
                </span>
                <h3 className="text-xl font-serif-luxury text-[#EDEBE7]">
                  Check Delivery to Your State
                </h3>
              </div>
              <span className="text-xs bg-[#22222A] px-3 py-1 rounded-sm text-[#A6A49E] border border-[#2D2D38]">
                36 States Covered
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="delivery-state-select"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#A09E98] mb-2"
                >
                  Select Your Destination State in Nigeria:
                </label>
                <select
                  id="delivery-state-select"
                  value={selectedState}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full bg-[#121215] border border-[#353540] rounded-sm px-4 py-3 text-sm text-[#EDEBE7] focus:outline-none focus:border-[#C9A96E] transition-colors"
                >
                  {NIGERIA_STATES.map((state) => (
                    <option key={state} value={state} className="bg-[#121215] text-white">
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dynamic Transit Details Card */}
              <div className="p-5 bg-[#121215] rounded-sm border border-[#2A2A33] space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] text-[#8C8A84] uppercase tracking-wider block">
                      Estimated Transit Time
                    </span>
                    <span className="text-base font-semibold text-[#E5C992] flex items-center gap-2 mt-0.5">
                      <Clock className="w-4 h-4 text-[#C9A96E]" />
                      {calculatedInfo.timeline}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-sm">
                    Active Route
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#23232A] text-xs">
                  <div>
                    <span className="text-[#888] block mb-0.5">Fulfillment Origin:</span>
                    <span className="text-[#DDD] font-medium">{calculatedInfo.hub}</span>
                  </div>
                  <div>
                    <span className="text-[#888] block mb-0.5">Assembly & Placement:</span>
                    <span className="text-[#DDD] font-medium">{calculatedInfo.assembly}</span>
                  </div>
                </div>
              </div>

              {/* White Glove Standard Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#161619] rounded-sm border border-[#25252C] flex items-center gap-2 text-[#BAB8B2]">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0" />
                  <span>Heavy Crate Protection</span>
                </div>
                <div className="p-3 bg-[#161619] rounded-sm border border-[#25252C] flex items-center gap-2 text-[#BAB8B2]">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0" />
                  <span>Insured Against Scratches</span>
                </div>
                <div className="p-3 bg-[#161619] rounded-sm border border-[#25252C] flex items-center gap-2 text-[#BAB8B2]">
                  <Check className="w-4 h-4 text-[#C9A96E] shrink-0" />
                  <span>Direct Doorstep Delivery</span>
                </div>
              </div>

              {/* Call Dispatch Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#26262E]">
                <div className="text-xs text-[#9E9B95]">
                  Need freight dispatch for an entire corporate building or estate?
                </div>
                <a
                  id="service-call-logistics"
                  href="tel:09048018908"
                  className="w-full sm:w-auto text-center px-5 py-2.5 bg-[#25252C] hover:bg-[#C9A96E] text-[#EDEBE7] hover:text-[#111113] border border-[#3A3A45] hover:border-[#C9A96E] text-xs font-semibold tracking-wider transition-colors rounded-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Dispatch: 09048018908</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
