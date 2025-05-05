'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import Image from 'next/image';
import { Button } from '@mui/material';

const events = [
  {
    title: 'Badminton Night',
    date: 'Every Friday, 6 PM',
    description:
      'Join us for a casual night of badminton! Meet new people, play friendly matches, and enjoy snacks and drinks.',
    image: '/images/socials/badminton-night.jpg',
    link: '/events/badminton-night',
  },
  {
    title: 'Charity Tournament',
    date: 'August 21, 2025',
    description:
      'A charity event to raise funds for local youth badminton programs. Compete and contribute to a good cause!',
    image: '/images/socials/charity-tournament.jpg',
    link: '/events/charity-tournament',
  },
  {
    title: 'Community Fun Day',
    date: 'September 5, 2025',
    description:
      'A day for the entire family! Come for a friendly tournament, activities for all ages, and delicious food and beverages.',
    image: '/images/socials/community-fun-day.jpg',
    link: '/events/community-fun-day',
  },
];

const HeroData = [
  { image: '/images/socials/socials-hero.jpg', caption: 'Join Our Social Events' },
  { image: '/images/image1.jpg', caption: 'Master the Smash' },
  { image: '/images/image2.jpg', caption: 'Agility in Motion' },
  { image: '/images/image3.jpg', caption: 'Precision and Power' },
  { image: '/images/image4.jpg', caption: 'Team Spirit' },
  { image: '/images/image5.jpg', caption: 'Train Hard, Play Hard' },
  { image: '/images/image6.jpg', caption: 'Join the Community' },
];

export default function SocialsPage() {
  return (
    <div>
      <Carousel slides={HeroData} />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-3">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={500}
              height={300}
              className="object-cover h-48 w-full rounded-t-xl"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 dark:text-cyan-300 mt-4 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{event.date}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{event.description}</p>
            <Button variant="contained" color="primary" className="mt-4 w-full" href={event.link}>
              Learn More
            </Button>
          </div>
        ))}
      </section>
    </div>
  );
}
