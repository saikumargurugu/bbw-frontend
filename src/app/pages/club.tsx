'use client';
import React from 'react';
import Carousel from '@/app/components/Carousel';
import { useRouter } from "next/navigation";

const facilities = [
  {
    title: 'Indoor Courts',
    description: 'Play in our state-of-the-art indoor courts, designed for the best badminton experience.',
  },
  {
    title: 'Fitness Center',
    description: 'Our modern fitness center helps players improve their agility, strength, and endurance.',
  },
  {
    title: 'Pro Shop',
    description: 'Get all your badminton gear and accessories from our well-stocked pro shop.',
  },
];

const events = [
  {
    title: 'Annual Club Tournament',
    date: 'July 15, 2025',
    description: 'Compete in our prestigious annual club tournament and showcase your skills.',
  },
  {
    title: 'Club Socials',
    date: 'Every First Friday of the Month',
    description: 'A casual meet-up for members to socialize, play badminton, and have fun.',
  },
];

const HeroData = [
  { image: '/images/club/club-hero.jpg', caption: 'Welcome to Our Badminton Club' },
  { image: '/images/image1.jpg', caption: 'Train Hard, Play Hard' },
  { image: '/images/image2.jpg', caption: 'Agility in Motion' },
];

export default function ClubPage() {
  const router = useRouter();
  return (
    <div>
      {/* Hero Section */}
      <Carousel slides={HeroData} />

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 dark:text-cyan-300 mb-6">
          About the Club
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Our club is dedicated to creating a friendly and supportive environment for badminton enthusiasts of all levels.
          Whether you&apos;re a beginner or an advanced player, you&apos;ll find the perfect place to grow your skills and enjoy the sport with others.
        </p>
      </section>

      {/* Facilities Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-3">
        {facilities.map((facility, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 dark:text-cyan-300 mb-2">
              {facility.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
          </div>
        ))}
      </section>

      {/* Events Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-2">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-300 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{event.date}</p>
            <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="bg-cyan-700 text-white text-center py-16">
        <h4 className="text-3xl font-bold mb-6">Get in Touch</h4>
        <p className="text-lg mb-6">Have questions? We&apos;re here to help. Reach out to us today!</p>
        <button
          className="bg-white text-cyan-700 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}
