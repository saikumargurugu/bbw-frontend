'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import { HeroData } from './Home';
import ServicesSection from '@/app/components/ServicesSection';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const services = [
	{
		title: 'Restringing Service',
		description:
			'Get your racket restrung with high-quality strings to maintain optimum performance. Fast turnaround and expert advice on string tension and type for your playing style.',
			image : 'https://images.unsplash.com/photo-1722003184213-b5dfa47e2476?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

	},
	{
		title: '1-on-1 Training',
		description:
			'Personalized coaching sessions tailored to your skill level and goals. Improve technique, strategy, and fitness with certified coaches. Flexible scheduling available.',
			image : 'https://images.unsplash.com/photo-1732955365690-84d4cfe88436?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'QBA Membership',
		image: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: `QBA Membership is Queensland Badminton Association membership which allows you to play competition at the Queensland level and provides insurance during these competitions.
Book our world-class courts at your convenience.
Our facility features high-quality flooring, lighting, and equipment for an optimal playing experience. Courts are available for singles, doubles, and group bookings. Reserve online and enjoy hassle-free access for practice or matches.`,

	},
];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

export default function ServicesPage() {
  const router = useRouter();

	return (
		<div className="bg-gradient-to-br from-cyan-50 via-white to-red-50 min-h-screen text-gray-900">
			{/* Hero Section */}
			<Carousel slides={HeroData} />

			{/* Services Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
				<h2 className="text-4xl font-extrabold text-cyan-700 mb-12 text-center">
					Our <span className="text-cyan-500">Services</span>
				</h2>
				<ServicesSection services={services} />
			</section>

			{/* Contact Section */}
			<motion.section
        style={{ background: "oklch(0.39 0.13 24.4)" }}
        className="text-white text-center py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        // variants={fadeUp}
      >
        <h4 className="text-3xl font-bold mb-6">Get in Touch</h4>
        <p className="text-lg mb-6">Have questions? We&apos;re here to help. Reach out to us today!</p>
        <button
          className="bg-white text-cyan-700 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
      </motion.section>
		</div>
	);
}
