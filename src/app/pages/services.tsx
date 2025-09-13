'use client';

import React from 'react';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ServicesSection from '@/app/components/ServicesSection';
import { sportySectionTheme } from '@/app/styles/sportyTheme';

const services = [
  {
    title: 'Restringing Service',
    description:
      'Get your racket restrung with high-quality strings to maintain optimum performance. Fast turnaround and expert advice on string tension and type for your playing style.',
    image : 'https://images.unsplash.com/photo-1722003184213-b5dfa47e2476?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    config: {
      url: '/services/restringing',
      name: 'See Details',
      type: "sidebar",
      dataSource: "restringing",
      newTab: false
    }
  },
  {
    title: 'Personal Training',
    description: `Personal coaching sessions tailored to your skill level.
Our certified coaches focus on technique, strategy, and fitness. Whether you’re a beginner or advanced player, we help you reach your goals with customized drills and feedback. Flexible scheduling available for busy lifestyles.`,
    image : 'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/minified/TRAINING2.jpg',
    config: {
      url: '/academy/join',
      name: 'Join Academy',
      type: "sidebar",
      newTab: false
    }
  },
  {
    title: 'QBA Membership',
    image: 'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/SOCIAL.jpg',
    description: `QBA Membership is Queensland Badminton Association membership which allows you to play competition at the Queensland level and provides insurance during these competitions.
Book our world-class courts at your convenience.
Our facility features high-quality flooring, lighting, and equipment for an optimal playing experience. Courts are available for singles, doubles, and group bookings. Reserve online and enjoy hassle-free access for practice or matches.`,
    config: {
      url: '/membership/qba',
      name: 'Book Court',
      type: "sidebar",
      newTab: true
    }
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="bg-bgThemeDark min-h-screen text-gray-100">
      {/* Services Section */}
      <section className="w-full py-16">
        <h2 className="text-4xl font-extrabold text-cyan-200 mb-12 text-center">
          Our <span className="text-cyan-400">Services</span>
        </h2>
        <ServicesSection services={services} background="bg-bgThemeDark" />
      </section>

      {/* Contact Section */}
      <motion.section
        style={{ background: "oklch(0.18 0 0)" }}
        className="text-white text-center py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="text-3xl font-bold mb-6 text-red-500">Get in Touch</h4>
        <p className="text-lg mb-6">Have questions? We&apos;re here to help. Reach out to us today!</p>
        <button
          className={sportySectionTheme.sharpButton.className + ' px-6 py-3'}
          style={{ ...sportySectionTheme.sharpButton.style, padding: '0.75rem 1.5rem' }}
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
      </motion.section>
    </div>
  );
}
