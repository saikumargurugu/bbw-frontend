'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import { Typography, Paper } from '@mui/material';
import Image from 'next/image';
import data from './dataBrisbaneBadminton.json';

interface ContactCardProps {
  address: string;
  phone: string;
  email: string;
  image: string;
  theme?: 'dark' | 'light';
}

interface MapCardProps {
  mapSrc: string;
  theme?: 'dark' | 'light';
}

const ContactCard: React.FC<ContactCardProps> = ({
  address,
  phone,
  email,
  image,
}) => (
  <div
    className="bg-black border border-white/10 rounded-2xl shadow-xl p-10 flex flex-col justify-center items-start hover:shadow-cyan-400/40 transition-transform duration-300 hover:scale-105"
  >
    <Image
      src={image}
      alt={address}
      width={600}
      height={400}
      className="rounded-2xl shadow-lg object-cover mb-4 border border-white/10"
    />
    <Typography className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cyan-200 mb-6">
      Contact Brisbane Badminton
    </Typography>
    <div className="mb-4">
      <Typography variant="h6" className="font-bold text-red-400 mb-2">Venue Address</Typography>
      <Typography className="text-lg text-gray-100">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-cyan-200 hover:text-red-400 transition"
        >
          {address}
        </a>
      </Typography>
    </div>
    <div className="mb-4">
      <Typography variant="h6" className="font-bold text-red-400 mb-2">Phone</Typography>
      <Typography className="text-lg text-gray-100">
        <a href={`tel:${phone}`} className="underline text-cyan-200 hover:text-red-400 transition">
          {phone}
        </a>
      </Typography>
    </div>
    <div>
      <Typography variant="h6" className="font-bold text-red-400 mb-2">Email</Typography>
      <Typography className="text-lg text-gray-100">
        <a href={`mailto:${email}`} className="underline text-cyan-200 hover:text-red-400 transition">
          {email}
        </a>
      </Typography>
    </div>
  </div>
);

const MapCard: React.FC<MapCardProps> = ({ mapSrc }) => (
  <div
    className="bg-black border border-white/10 rounded-2xl shadow-xl p-10 flex flex-col justify-center items-center hover:shadow-red-400/40 transition-transform duration-300 hover:scale-105"
  >
    <Typography variant="h6" className="font-bold mb-4 text-red-400">
      Find Us on Google Maps
    </Typography>
    <div className="w-full rounded-2xl overflow-hidden border border-cyan-900/30 shadow-lg">
      <iframe
        width="100%"
        height="350"
        style={{
          border: '0',
          borderRadius: '1rem',
          boxShadow: '0 4px 32px 0 rgba(0, 200, 255, 0.10)',
        }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
        title="Brisbane Badminton Location"
      />
    </div>
  </div>
);

export default function ContactUsPage() {
  const contactData = {
    heroSlides: [
      { image: "/images/contact/contact-hero.jpg", caption: "Get in Touch with Us" },
      { image: "/images/image1.jpg", caption: "Master the Smash" },
      { image: "/images/image2.jpg", caption: "Agility in Motion" }
    ],
    address: "39 Quilton Pl, Crestmead QLD 4132, Australia",
    phone: "+61433300506",
    email: "admin@badmintonbrisbane.com.au",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8216875057965!2d153.06956077585127!3d-27.691905526211332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9147f2bb4d041d%3A0x290bdd13220b6c9b!2sBrisbane%20Badminton!5e0!3m2!1sen!2sau!4v1752287359564!5m2!1sen!2sau"
  };

  return (
    <div className="min-h-screen bg-bgThemeDark">
      {/* Contact Info Section */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-cyan-200 mt-12 m-6 text-center">
          Get in Touch with Brisbane Badminton
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Reach out to us for court bookings, coaching, events, or any club-related queries. We look forward to hearing from you!
        </p>
      </div>
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 grid gap-10 md:grid-cols-2">
        <ContactCard
          address={contactData.address}
          phone={contactData.phone}
          email={contactData.email}
          image={data.ContactUs.images[0]}
          theme="dark"
        />
        <MapCard mapSrc={contactData.mapSrc} theme="dark" />
      </section>
    </div>
  );
}
