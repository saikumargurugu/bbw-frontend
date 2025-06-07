'use client';

import React, { useState } from 'react';
import Carousel from '@/app/components/Carousel';
import { Button, Typography, Box } from '@mui/material';

const courtsTypes = ['Indoor Court'];
const courts = ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6', 'Court 7', 'Court 8', 'Court 9'];
const timeSlots = Array.from({ length: 16 }, (_, i) => `${7 + i}:00`);

const HeroData = [
  { image: '/images/court-hire/court-hero.jpg', caption: 'Book a Court Now' },
  { image: '/images/image1.jpg', caption: 'Train Hard, Play Hard' },
  { image: '/images/image2.jpg', caption: 'Agility in Motion' },
];

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
        <h2 className="text-4xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-8">Court Hire Information</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Reserve one of our world-class badminton courts today and take your game to the next level!
        </p>
      </section>

      {/* Available Courts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-3">
        {courtsTypes.map((court, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 dark:text-cyan-300">{court}</h3>
            <p className="text-gray-600 dark:text-gray-300">Book now and enjoy top-tier facilities.</p>
          </div>
        ))}
      </section>

      {/* Booking Button (Only visible if showBooking is false) */}
      {!showBooking && (
        <Box className="text-center py-8">
          <Button variant="contained" color="primary" size="large" onClick={() => setShowBooking(true)}>
            Book Now
          </Button>
        </Box>
      )}
      {showBooking && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-300 mb-6 text-center">Select Your Booking Slots</h2>
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
                          className={`p-3 border cursor-pointer ${
                            selectedSlots.has(slotKey) ? 'bg-yellow-400' : 'bg-green-500 hover:bg-green-400'
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
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => alert(`Booking Confirmed for ${selectedSlots.size} slots`)}
            >
              Confirm Booking
            </Button>
          </Box>
        </section>
      )}
    </div>
  );
}
