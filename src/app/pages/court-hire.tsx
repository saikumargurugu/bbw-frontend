'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';

import { sportySectionTheme } from '../styles/sportyTheme';
import data from './dataBrisbaneBadminton.json';

const courtHireData = data.courtHire;

export default function CourtHirePage() {
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
  <div className={sportySectionTheme.section.className + " min-h-screen"} style={sportySectionTheme.section.style}>
      {/* Hero Section */}
      {/* Court Hire Information */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-8 tracking-widest" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif', letterSpacing:'0.12em'}}>{courtHireData.info.title}</h2>
          <p className="text-lg text-white/90 leading-relaxed mb-6 font-medium" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
            {courtHireData.info.description}
          </p>
          <ul className="text-lg text-white/80 mb-6 list-disc list-inside text-left max-w-2xl mx-auto font-medium" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
            {courtHireData.info.features.map((feature, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
            ))}
          </ul>
          {courtHireData.info.notes.map((note, idx) => (
            <p key={idx} className="text-lg text-white/60 mb-6 font-medium" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>{note}</p>
          ))}

          <div className="mt-6">
            <button
              className="text-sm text-cyan-200 underline hover:text-red-400 transition"
              onClick={() => setOpenTerms(true)}
            >
              Terms and Conditions apply
            </button>
          </div>
          <Box className="text-center py-8">
            <a
              href={courtHireData.info.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={sportySectionTheme.sharpButton.className}
              style={{...sportySectionTheme.sharpButton.style, alignSelf: 'center'}}>
              Book Now
            </a>
          </Box>
        </div>
      </section>

      {/* Booking Table */}
      {showBooking && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-cyan-200 mb-6 text-center">Select Your Booking Slots</h2>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border-2 border-red-700 w-full bg-black/80 rounded-xl overflow-hidden shadow-xl">
              <thead>
                <tr className="bg-gradient-to-br from-red-700 to-red-500 text-white uppercase tracking-widest" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif', letterSpacing:'0.10em'}}>
                  <th className="p-4 border-r-2 border-red-700">Court / Time</th>
                  {courtHireData.timeSlots.map((time) => (
                    <th key={time} className="p-3 border-r-2 border-red-700">{time}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {courtHireData.courts.map((court) => (
                  <tr key={court} className="border-b-2 border-red-700">
                    <td className="p-3 border-r-2 border-red-700 font-bold text-white/90" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>{court}</td>
                    {courtHireData.timeSlots.map((time) => {
                      const slotKey = `${court}-${time}`;
                      const isSelected = selectedSlots.has(slotKey);
                      return (
                        <td
                          key={slotKey}
                          className={`p-3 border-r-2 border-red-700 cursor-pointer transition-colors duration-200 text-center font-semibold ${
                            isSelected
                              ? 'bg-gradient-to-br from-yellow-400 to-yellow-200 text-black scale-105 shadow-lg'
                              : 'bg-gray-900 hover:bg-red-900/40 text-white/80'
                          }`}
                          style={{fontFamily:'Montserrat, Arial, sans-serif'}}
                          onClick={() => toggleSlot(slotKey)}
                        ></td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Box className="text-center py-8">
            <a
              href={courtHireData.info.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={sportySectionTheme.sharpButton.className}
              style={{...sportySectionTheme.sharpButton.style, alignSelf: 'center'}}>
              Book Now
            </a>
          </Box>
        </section>
      )}

      {/* Pricing Section */}
      {Array.isArray(data.courtHire.info.Pricing) && data.courtHire.info.Pricing.map((section: { title: string; details: { label: string; price?: string }[] }, idx: number) => (
        <section key={idx} className="max-w-4xl mx-auto px-4 py-8">
          <h3
            className="text-2xl font-bold text-red-500 mb-4 text-center"
            style={{ ...sportySectionTheme.font.title.style, textShadow: '0 4px 24px #000, 0 1px 0 #c53030' }}
          >
            {section.title}
          </h3>
          <ul className="list-disc pl-5 text-gray-300 text-left" style={sportySectionTheme.font.description.style}>
            {section.details.map((detail: { label: string; price?: string }, detailIdx: number) => (
              <li key={detailIdx} className="mb-2">
                <span className="font-semibold" style={sportySectionTheme.font.title.style}>{detail.label}:</span> {detail.price}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Terms & Conditions Modal */}
      {openTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-bgThemeDark rounded-xl max-w-lg w-full p-6 shadow-2xl relative border border-white/10">
            <button
              className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-red-400"
              onClick={() => setOpenTerms(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-cyan-200 mb-4">Terms and Conditions</h2>
            <div className="text-gray-100 text-sm max-h-[60vh] overflow-y-auto space-y-3 text-left">
              <ul className="list-disc list-inside space-y-2">
                {courtHireData.terms.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
