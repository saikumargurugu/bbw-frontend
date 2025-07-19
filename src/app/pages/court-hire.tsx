'use client';

import React, { useState } from 'react';
import Carousel from '@/app/components/Carousel';
import { Button, Box } from '@mui/material';
import { HeroData } from './Home';

const courts = ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6', 'Court 7', 'Court 8', 'Court 9'];
const timeSlots = Array.from({ length: 16 }, (_, i) => `${7 + i}:00`);


export default function CourtHirePage() {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState(new Set());

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
      <Carousel slides={HeroData} />

      {/* Court Hire Information */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-cyan-700 mb-8">Court Hire Information</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Book our Brisbane Highest celing badminton courts today and take your game to the next level!
        </p>
        <ul className="text-lg text-gray-700 mb-6 list-disc list-inside text-left max-w-2xl mx-auto">
          <li>High-quality indoor courts with professional flooring and lighting.</li>
          <li>Courts are <span className="font-bold text-red-600">badminton shoes only</span> for safety and surface protection.</li>
          <li>Hire court to play with friends or organizing your socials.</li>
          <li>Courts can be booked <span className="font-bold text-cyan-700">online</span> and <span className="font-bold text-cyan-700">offline</span> at the center.</li>
          <li>If you don&apos;t have badminton shoes, you can buy a pair at our pro shop located at the badminton center.</li>
          <li>Available for singles, doubles, and group bookings.</li>
          <li>Free parking and easy access from major roads.</li>
          <li>Refreshments and equipment available at our pro shop.</li>
          <li>Special rates for club members and regular players.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-6">
          Whether you&apos;re practicing, playing a friendly match, or hosting a tournament, our courts provide the perfect environment for all skill levels.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          For group bookings, events, or regular sessions, please contact our team for custom packages and support.
        </p>
      </section>

      {/* Booking Button (Only visible if showBooking is false) */}
      {!showBooking && (
        <Box className="text-center py-8">
          <Button variant="contained" color="primary" size="large"
            onClick={() => window.open("https://badmintonbrisbane.yepbooking.com.au/", "_blank")}
          >
            Book Now
          </Button>
        </Box>
      )}
      {showBooking && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-cyan-700  mb-6 text-center">Select Your Booking Slots</h2>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-500 w-full">
              <thead>
                <tr className="bg-cyan-700 text-white">
                  <th className="p-4 border">Court / Time</th>
                  {timeSlots.map((time) => (
                    <th key={time} className="p-3 border">{time}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {courts.map((court) => (
                  <tr key={court} className="border">
                    <td className="p-3 border font-bold">{court}</td>
                    {timeSlots.map((time) => {
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
              href="#"
              target="_self"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-red-700 transition text-lg self-end mt-2"
              style={{ alignSelf: "flex-end" }}
              onClick={(e) => {
                e.preventDefault();
                alert(`Booking Confirmed for ${selectedSlots.size} slots`);
              }}
            >
              Confirm Booking
            </a>
          </Box>
        </section>
      )}
    </div>
  );
}
