'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import { Avatar, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { motion } from "framer-motion";
import { HeroData } from './Home';

const programs = [
  { title: 'Beginner Batches (Age 7+)', description: 'Perfect for young players starting their badminton journey. Focus on basic skills, rules, and fun drills.' },
  { title: 'Intermediate Coaching', description: 'Refining skills and game strategies for intermediate players. Includes match play and tactical sessions.' },
  { title: 'Advanced Player Training', description: 'Intensive training designed for competitive athletes. Personalized feedback and advanced techniques.' },
  { title: 'Aglity and speed', description: 'Improve speed, strength, and endurance for peak performance. Includes footwork, and techniques.' },
  { title: 'Tournament Prep', description: 'Specialized coaching for players preparing for tournaments. Mental preparation, strategy, and match simulation.' },
];

const coaches = [
  {
    name: 'Pavan',
    title: 'Head Coach',
    image: '/images/academy/coach1.jpg',
    acheivements: [
      'National Level Coach',
      '10+ Years Coaching Experience',
      'Mentor to State & National Champions'
    ]
  },
  {
    name: 'Avinash Srinivas',
    title: 'Advanced Trainer',
    image: '/images/academy/coach2.jpg',
    acheivements: [
      '2024 City of Brisbane OMD Champion',
      '2023 & 2024 Qld State Championship',
      'OMD Silver Medalist',
      '2024 BWF Events Participated',
      'Sathio Group Australian Open Super 500',
      'Guwahati Masters Super 100',
      'Odisha Masters Super 100',
      'Sydney International Challenge',
      'Bendigo International Challenge',
      'Kampala International & Future Series',
    ]
  },
  {
    name: 'Aurthur Lee',
    title: 'Junior Coach',
    image: '/images/academy/coach3.jpg',
    acheivements: [
      'Ex- QLD Junior Representative',
      '2021 City of Brisbane Champion AMS Champion',
      '2022 QLD Open AMS Champion'
    ],
  },
];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

export default function AcademyPage() {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-white to-red-50 min-h-screen">
      <Carousel slides={HeroData} />

      {/* About Section */}
      <motion.section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        // variants={fadeUp}
      >
        <h2 className="text-4xl font-extrabold text-cyan-700 mb-8">About the Academy</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Our academy is dedicated to building champions from a young age. We focus on technical skills,
          physical conditioning, and mental toughness, all while fostering a love for the game.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          We offer a range of programs for all ages and skill levels, from beginners to advanced competitors. Our expert coaches provide personalized attention and guidance to help every player reach their full potential.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Join us for regular training, and tournament preparation in a supportive and motivating environment.
        </p>
      </motion.section>

      {/* Programs Section */}
      <motion.section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        // variants={fadeUp}
      >
        {programs.map((program, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            // variants={fadeUp}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-2">
              {program.title}
            </h3>
            <p className="text-gray-600">{program.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Coaches Section */}
      <motion.section
        className="max-w-6xl mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        // variants={fadeUp}
      >
        <h3 className="text-3xl font-semibold text-cyan-700 mb-8 text-center">Meet Our Coaches</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              // variants={fadeUp}
            >
              <CardContent className="flex flex-col items-center">
                <Avatar
                  src={coach.image}
                  alt={coach.name}
                  sx={{ width: 110, height: 110, marginBottom: '1rem' }}
                />
                <Typography variant="h5" className="font-bold text-cyan-700">{coach.name}</Typography>
                <Typography variant="body1" className="mt-2 text-gray-600">{coach.title}</Typography>
                {/* {coach.acheivements && (
                  <ul className="mt-4 text-gray-700 text-left text-sm list-disc list-inside">
                    {coach.acheivements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                )} */}
              </CardContent>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section
        style={{ background: "oklch(0.39 0.13 24.4)" }}
        className="text-white text-center py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        // variants={fadeUp}
      >
        <h4 className="text-4xl font-bold mb-6">Ready to Join the Academy?</h4>
        <Link
          href="/academy/register"
          className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition text-lg"
          style={{ alignSelf: "center" }}
        >
          Register Now
        </Link>
        <div className="mt-8 text-lg">
          <span>For more info, contact us at </span>
          <a href="mailto:admin@badmintonbrisbane.com.au" className="underline text-white font-bold">admin@badmintonbrisbane.com.au</a>
        </div>
      </motion.section>
    </div>
  );
}
