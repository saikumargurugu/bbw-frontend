'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';

const services = [
  {
    title: 'Restringing',
    description: 'Top-quality restringing service with fast turnaround.',
  },
  {
    title: '1-on-1 Training',
    description: 'Personal coaching sessions tailored to your skill level.',
  },
  {
    title: 'Court Hire',
    description: 'Book our world-class courts at your convenience.',
  },
  {
    title: 'Club Socials',
    description: 'Meet, play and socialize with other club members.',
  },
  {
    title: 'Junior Academy',
    description: 'Train young champions with certified coaches.',
  },
  {
    title: 'Fitness Training',
    description: 'Improve your stamina and agility with sport-specific drills.',
  },
];

const HeroData = [
  { image: '/images/image1.jpg', caption: 'Master the Smash' },
  { image: '/images/image2.jpg', caption: 'Agility in Motion' },
  { image: '/images/image3.jpg', caption: 'Precision and Power' },
  { image: '/images/image4.jpg', caption: 'Team Spirit' },
  { image: '/images/image5.jpg', caption: 'Train Hard, Play Hard' },
  { image: '/images/image6.jpg', caption: 'Join the Community' },
];

export default function Home() {
  return (
    <div>
      <Carousel slides={HeroData} />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 dark:text-cyan-300 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
