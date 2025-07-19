'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import { Typography, Paper } from '@mui/material';
import { HeroData } from './Home';

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
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-red-100">
      <Carousel slides={HeroData} />

      {/* Vibrant Contact Info Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-24 grid gap-10 md:grid-cols-2">
        <Paper className="bg-white/90 rounded-2xl shadow-2xl p-10 hover:shadow-cyan-200 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-start">
          <Typography className="text-5xl sm:text-6xl font-extrabold tracking-tight text-cyan-700 mb-8">
            Contact Us
          </Typography>
          <Typography variant="h6" className="font-bold text-red-600 mb-4">Our Address</Typography>
          <Typography className="text-lg text-gray-700">{contactData.address}</Typography>
          <Typography className="mt-6 text-lg text-gray-700">
            <span className="font-bold text-cyan-700">Call us:</span> {contactData.phone}
          </Typography>
          <Typography className="mt-6 text-lg text-gray-700">
            <span className="font-bold text-cyan-700">Email:</span> {contactData.email}
          </Typography>
        </Paper>
        <Paper className="bg-white/90 rounded-2xl shadow-2xl p-10 hover:shadow-red-200 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center">
          <Typography variant="h6" className="font-bold text-red-600 mb-4">Our Location Map</Typography>
          <iframe
            width="100%"
            height="350"
            style={{ border: '0', borderRadius: '1rem', boxShadow: '0 4px 32px 0 rgba(0, 200, 255, 0.15)' }}
            loading="lazy"
            allowFullScreen
            src={contactData.mapSrc}
          />
        </Paper>
      </section>
    </div>
  );
}
