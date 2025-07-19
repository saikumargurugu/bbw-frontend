'use client';
import React from 'react';
import Carousel from '@/app/components/Carousel';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HeroData } from './Home';

const facilities = [
	{
		title: 'Indoor Courts',
		description: 'Play in our state-of-the-art indoor courts, designed for the best badminton experience.',
	},
	{
		title: 'QBA Club Members',
		description: 'Join our vibrant community of badminton enthusiasts and make new friends. Club memberships are open for all skill levels. Just $99 per year. Contact us to join and enjoy exclusive member benefits, priority court bookings, and access to club tournaments and socials.',
	},
	{
		title: 'Pro Shop',
		description: 'Get all your badminton gear and accessories from our well-stocked pro shop. We offer rackets, shoes, shuttlecocks, apparel, and expert advice for players of all levels.',
	},
];

const events = [
	{
		title: 'Annual Club Tournament',
		date: 'July 15, 2025',
		description: 'Compete in our prestigious annual club tournament and showcase your skills. Open to all members, with exciting prizes and a fun, competitive atmosphere.',
	},
	{
		title: 'Club Socials',
		date: 'Every First Friday of the Month',
		description: 'A casual meet-up for members to socialize, play badminton, and have fun. Enjoy refreshments, friendly matches, and networking opportunities in a relaxed setting.',
	},
];



const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ClubPage() {
	const router = useRouter();
	return (
		<div className="bg-gradient-to-br from-cyan-50 via-white to-red-50 min-h-screen">
			{/* Hero Section */}
			<Carousel slides={HeroData} />

			{/* About Section */}
			<motion.section
				className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeUp}
			>
				<h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-6">
					About the Club
				</h2>
				<p className="text-lg text-gray-600 leading-relaxed">
					Our club is dedicated to creating a friendly and supportive environment for badminton enthusiasts of all levels.
					Whether you&apos;re a beginner or an advanced player, you&apos;ll find the perfect place to grow your skills and enjoy the sport with others.
				</p>
			</motion.section>

			{/* Facilities Section */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 md:grid-cols-3">
				{facilities.map((facility, idx) => (
					<motion.div
						key={idx}
						className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-cyan-200 transition-transform duration-300 hover:scale-105 flex flex-col items-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeUp}
					>
						<h3 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-2 text-center">
							{facility.title}
						</h3>
						<p className="text-gray-600 text-center">{facility.description}</p>
					</motion.div>
				))}
			</section>

			{/* Events Section */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 md:grid-cols-2">
				{events.map((event, idx) => (
					<motion.div
						key={idx}
						className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-red-200 transition-transform duration-300 hover:scale-105 flex flex-col"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeUp}
					>
						<h3 className="text-xl font-bold text-cyan-700 mb-2">
							{event.title}
						</h3>
						<p className="text-gray-600 font-semibold">{event.date}</p>
						<p className="text-gray-600 mt-2">{event.description}</p>
					</motion.div>
				))}
			</section>

			{/* Contact Section */}
			<motion.section
				style={{ background: "oklch(0.39 0.13 24.4)" }}
				className="text-white text-center py-16"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeUp}
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
