'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';

import { sportySectionTheme } from '../styles/sportyTheme';
import courtHireData from './CourHire.json';

export default function CourtHirePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showBooking, setShowBooking] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState(new Set<string>());
  const [openTerms, setOpenTerms] = useState(false);

  const toggleSlot = (slot: string) => {
    setSelectedSlots((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(slot)) {
        newSet.delete(slot);
      } else {
        newSet.add(slot);
      }
      return newSet;
    });
  };

  return (
    <div
      className={
        sportySectionTheme.section.className + " min-h-screen"
      }
      style={sportySectionTheme.section.style}
    >
      {/* Hero Section */}
      {/* Court Hire Information */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-8 tracking-widest" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif', letterSpacing:'0.12em'}}>{courtHireData.title}</h2>
          <p className="text-lg text-white/90 leading-relaxed mb-10 font-medium" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
            {courtHireData.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Facility Highlights */}
            {courtHireData.facilityHighlights && (
              <div className="bg-black/40 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-200 mb-3">Facility Highlights</h3>
                <ul className="list-disc list-inside text-lg text-white/80 font-medium" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
                  {courtHireData.facilityHighlights.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Membership & Savings */}
            {courtHireData.membershipAndSavings && (
              <div className="bg-black/40 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-200 mb-3">Membership & Savings</h3>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-1">{courtHireData.membershipAndSavings.courtHireMembership.title}</h4>
                  <ul className="list-disc list-inside text-white/80 ml-5 mb-3">
                    {courtHireData.membershipAndSavings.courtHireMembership.benefits.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-red-400 mb-1">{courtHireData.membershipAndSavings.bulkAndGroupDiscounts.title}</h4>
                  <ul className="list-disc list-inside text-white/80 ml-5">
                    {courtHireData.membershipAndSavings.bulkAndGroupDiscounts.benefits.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {/* Customer-Focused Service */}
            {courtHireData.customerFocusedService && (
              <div className="bg-black/40 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-200 mb-3">Customer-Focused Service</h3>
                <ul className="list-disc list-inside text-lg text-white/80 font-medium" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
                  {courtHireData.customerFocusedService.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Groups & Events */}
            {courtHireData.groupsAndEvents && (
              <div className="bg-black/40 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-200 mb-3">Groups & Events</h3>
                <p className="text-white/80 mb-2">{courtHireData.groupsAndEvents.description}</p>
                <ul className="list-disc list-inside text-white/80 ml-5 mb-2">
                  {courtHireData.groupsAndEvents.types.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-white/60 italic">{courtHireData.groupsAndEvents.note}</p>
              </div>
            )}
          </div>
          {/* Terms Note */}
          {courtHireData.termsNote && (
            <div className="mt-8 text-center">
              <button
                className="text-sm text-cyan-200 underline hover:text-red-400 transition"
                onClick={() => setOpenTerms(true)}
              >
                {courtHireData.termsNote}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
