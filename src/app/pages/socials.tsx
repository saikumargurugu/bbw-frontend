'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import CardCarousel from '@/app/components/CardCarousel';

const events = [
  {
    title: 'Badminton Night',
    date: 'Every Day',
    description:
      'Join us for a casual night of badminton! Meet new people, play friendly matches, and enjoy snacks and drinks.',
    image: 'https://images.unsplash.com/photo-1717659487323-7783a99bcf61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/contact',
  },
  {
    title: 'Adult Socials',
    date: 'Every Day',
    image: 'https://images.unsplash.com/photo-1659081463572-4c5903a309e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'A charity event to raise funds for local youth badminton programs. Compete and contribute to a good cause!',
    link: '/contact',
  },
  {
    title: 'Kids Socials',
    date: 'Monday, Wednesday, Friday, Saturday',
    description:
      'A day for the entire family! Come for a friendly tournament, activities for all ages, and delicious food and beverages.',
    image: 'https://images.unsplash.com/photo-1718452739586-5b467f1f109b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/contact',
  },
  {
    title: 'Family Fun Day',
    date: 'Sunday',
    description:
      'A day of fun for the whole family! Enjoy badminton games, food stalls, and activities for kids.',
    image: 'https://images.unsplash.com/photo-1718452739586-5b467f1f109b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/contact',
  },
  {
    title: 'Charity Tournament',
    date: '',
    description:
      'A charity event to raise funds for local youth badminton programs. Compete and contribute to a good cause!',
    image: 'https://images.unsplash.com/photo-1717659487323-7783a99bcf61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/contact',
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
      <CardCarousel events={events} />
    </div>
  );
}
