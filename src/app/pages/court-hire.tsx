'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
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
    <div className="bg-bgThemeDark min-h-screen text-gray-100">
      {/* Hero Section */}
      {/* Court Hire Information */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-extrabold text-cyan-200 mb-8">{courtHireData.info.title}</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            {courtHireData.info.description}
          </p>
          <ul className="text-lg text-gray-100 mb-6 list-disc list-inside text-left max-w-2xl mx-auto">
            {courtHireData.info.features.map((feature, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
            ))}
          </ul>
          {courtHireData.info.notes.map((note, idx) => (
            <p key={idx} className="text-lg text-gray-400 mb-6">{note}</p>
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
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition text-lg self-end mt-2"
              style={{ alignSelf: "center" }}
            >
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
            <table className="table-auto border-collapse border border-gray-700 w-full bg-white/5">
              <thead>
                <tr className="bg-cyan-900 text-white">
                  <th className="p-4 border">Court / Time</th>
                  {courtHireData.timeSlots.map((time) => (
                    <th key={time} className="p-3 border">{time}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {courtHireData.courts.map((court) => (
                  <tr key={court} className="border">
                    <td className="p-3 border font-bold">{court}</td>
                    {courtHireData.timeSlots.map((time) => {
                      const slotKey = `${court}-${time}`;
                      return (
                        <td
                          key={slotKey}
                          className={`p-3 border cursor-pointer transition-colors duration-200 ${
                            selectedSlots.has(slotKey)
                              ? 'bg-yellow-400 text-black'
                              : 'bg-cyan-900 hover:bg-cyan-700'
                          }`}
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
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition text-lg self-end mt-2"
              style={{ alignSelf: "center" }}
            >
              Book Now
            </a>
          </Box>
        </section>
      )}

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
