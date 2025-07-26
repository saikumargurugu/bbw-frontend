'use client';

import React, { useState } from 'react';
import Carousel from '@/app/components/Carousel';
import { Button, Box } from '@mui/material';
import { HeroData } from './Home';

const courtHireData = {
  heroSlides: HeroData,
  info: {
    title: "Court Hire Information",
    description: "Book our Brisbane highest ceiling badminton courts today and take your game to the next level!",
    features: [
      "High-quality indoor courts with professional flooring and lighting.",
      "Courts are <span class='font-bold text-red-600'>badminton shoes only</span> for safety and surface protection.",
      "Hire court to play with friends or organizing your socials.",
      "Courts can be booked <span class='font-bold text-cyan-700'>online</span> and <span class='font-bold text-cyan-700'>offline</span> at the center.",
      "If you don't have badminton shoes, you can buy a pair at our pro shop located at the badminton center.",
      "Available for singles, doubles, and group bookings.",
      "Free parking and easy access from major roads.",
      "Refreshments and equipment available at our pro shop.",
      "Special rates for club members and regular players."
    ],
    notes: [
      "Whether you're practicing, playing a friendly match, or hosting a tournament, our courts provide the perfect environment for all skill levels.",
      "For group bookings, events, or regular sessions, please contact our team for custom packages and support."
    ],
    bookingUrl: "https://badmintonbrisbane.yepbooking.com.au/"
  },
  courts: ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6', 'Court 7', 'Court 8', 'Court 9'],
  timeSlots: Array.from({ length: 16 }, (_, i) => `${7 + i}:00`),
  terms: [
    "All players must use only <b>BADMINTON SHOES</b> or <b>Non marking shoes</b> at Brisbane Badminton.",
    "People wearing shoes with black sole/bottom (including partially black) will not be allowed to play on our courts (no refunds of court booking).",
    "People wearing any other shoes which can make any colored marks (including white marks) on the mats will not be allowed to play on our courts.",
    "If you are unsure about your shoes, they are most likely Marking Shoes.",
    "Any breach of this rule will incur management fee start from $150 (Must pay before leaving the Center).",
    "<b>Court Arrangements:</b> Please note that courts for your booking may be adjusted for better utilisation of the facility. You'll be notified through the booking system if there are any changes. Kindly check your booking again on the day. If you do not wish to be moved, please notify us through the comment section upon making your bookings.",
    "All customers are obligated to step off the court at the end of your booking hours; Any extended time of using the court may be charged.",
    "<b>Please read our Booking Rules including Cancellation Policy.</b>",
    "<b>Please read our Terms and Conditions.</b>",
    "<b>No Outside coaches</b> are allowed to do any sort of coaching in Brisbane Badminton premises."
  ]
};

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
    <div>
      <Carousel slides={courtHireData.heroSlides} />

      {/* Court Hire Information */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-cyan-700 mb-8">{courtHireData.info.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          {courtHireData.info.description}
        </p>
        <ul className="text-lg text-gray-700 mb-6 list-disc list-inside text-left max-w-2xl mx-auto">
          {courtHireData.info.features.map((feature, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
          ))}
        </ul>
        {courtHireData.info.notes.map((note, idx) => (
          <p key={idx} className="text-lg text-gray-700 mb-6">{note}</p>
        ))}

        <div className="mt-6">
          <button
            className="text-sm text-cyan-700 underline hover:text-red-700 transition"
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
            className="inline-flex items-center bg-red-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-red-700 transition text-lg self-end mt-2"
            style={{ alignSelf: "flex-end" }}
          >
            Book Now
          </a>
        </Box>
        {/* <Button
          variant="outlined"
          color="primary"
          className="mt-4"
          onClick={() => setShowBooking((prev) => !prev)}
        > */}
        {/* {showBooking ? "Hide Booking Table" : "Show Booking Table"} */}
        {/* </Button> */}
      </section>

      {showBooking && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-cyan-700 mb-6 text-center">Select Your Booking Slots</h2>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-500 w-full">
              <thead>
                <tr className="bg-cyan-700 text-white">
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
                          className={`p-3 border cursor-pointer ${selectedSlots.has(slotKey) ? 'bg-yellow-400' : 'bg-green-500 hover:bg-green-400'
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
              className="inline-flex items-center bg-red-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-red-700 transition text-lg self-end mt-2"
              style={{ alignSelf: "flex-end" }}
            >
              Book Now
            </a>
          </Box>
        </section>
      )}

      {/* Terms & Conditions Modal */}
      {openTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-red-600"
              onClick={() => setOpenTerms(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-cyan-700 mb-4">Terms and Conditions</h2>
            <div className="text-gray-700 text-sm max-h-[60vh] overflow-y-auto space-y-3 text-left">
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
