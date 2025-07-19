'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import { Avatar, Button, Card, CardContent, Typography } from '@mui/material';

const programs = [
  { title: 'Beginner Batches (Age 7+)', description: 'Perfect for young players starting their badminton journey.' },
  { title: 'Intermediate Coaching', description: 'Refining skills and game strategies for intermediate players.' },
  { title: 'Advanced Player Training', description: 'Intensive training designed for competitive athletes.' },
  { title: 'Fitness & Conditioning', description: 'Improve speed, strength, and endurance for peak performance.' },
  { title: 'Tournament Prep', description: 'Specialized coaching for players preparing for tournaments.' },
];


const coaches = [
  {
    name: 'Pavan ',
    title: 'Head Coach',
    image: '/images/academy/coach1.jpg',
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
    acheivements: ['Ex- QLD Junior Representative', '2021 City of Brisbane Champion AMS Champion', '2022 QLD Open AMS Champion'],
  },
];

const HeroData = [
  { image: '/images/academy/academy-hero.jpg', caption: 'Badminton Academy' },
  { image: '/images/image1.jpg', caption: 'Train Hard, Play Hard' },
  { image: '/images/image2.jpg', caption: 'Agility in Motion' },
];

export default function AcademyPage() {
  return (
    <div>
      <Carousel slides={HeroData} />

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-cyan-700  mb-8">About the Academy</h2>
        <p className="text-lg text-gray-600  leading-relaxed">
          Our academy is dedicated to building champions from a young age. We focus on technical skills,
          physical conditioning, and mental toughness, all while fostering a love for the game.
        </p>
      </section>

      {/* Programs Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-3">
        {programs.map((program, idx) => (
          <div
            key={idx}
            className="bg-white  rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-700  mb-2">
              {program.title}
            </h3>
            <p className="text-gray-600 ">{program.description}</p>
          </div>
        ))}
      </section>

      {/* Coaches Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold text-cyan-700  mb-8 text-center">Meet Our Coaches</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, idx) => (
            <Card key={idx} className="bg-white  shadow-md rounded-xl p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <CardContent className="flex flex-col items-center">
                <Avatar
                  src={coach.image}
                  alt={coach.name}
                  sx={{ width: 110, height: 110, marginBottom: '1rem' }}
                />
                <Typography variant="h5" className="font-bold text-cyan-700">{coach.name}</Typography>
                <Typography variant="body1" className="mt-2 text-gray-600 ">{coach.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* info section */}
      <section
        style={{ background: "oklch(0.39 0.13 24.4)" }}
        className="text-white text-center py-16">
        <h4 className="text-4xl font-bold mb-6">Ready to Join the Academy?</h4>
        <p className="text-xl mb-6">Registrations are open. Limited spots available!</p>
        <Button variant="contained" className="text-lg bg-white text-cyan-700 hover:bg-gray-200 px-6 py-3 rounded-xl">
          Register Now
        </Button>
      </section>
    </div>
  );
}
