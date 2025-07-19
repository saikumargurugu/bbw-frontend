'use client';

import React from 'react';
import { Button, Typography, Paper } from '@mui/material';
import Image from 'next/image';
import Carousel from '@/app/components/Carousel';

const services = [
	{
		name: 'Restringing Service',
		description:
			'Get your racket restrung with high-quality strings to maintain optimum performance.',
		image: '/images/services/restringing.jpg',
		price: '$20',
	},
	{
		name: '1-on-1 Training',
		description:
			'Personalized coaching sessions tailored to your skill level and goals.',
		image: '/images/services/training.jpg',
		price: '$50/hour',
	},
	{
		name: 'Fitness Classes',
		description:
			'Train your body for badminton with specialized fitness sessions focusing on strength and agility.',
		image: '/images/services/fitness.jpg',
		price: '$30/class',
	},
];

const HeroData = [
	{ image: '/images/services/services-hero.jpg', caption: 'Our Premium Services' },
	{ image: '/images/image1.jpg', caption: 'Master the Smash' },
	{ image: '/images/image2.jpg', caption: 'Agility in Motion' },
];

export default function ServicesPage() {
	return (
		<div className="text-gray-900 ">
			{/* Hero Section */}
			<Carousel slides={HeroData} />

			{/* Services Section */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
				<h2 className="text-4xl font-extrabold text-cyan-700 ">
					Our <span className="text-cyan-500">Services</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{services.map((service, idx) => (
						<div key={idx} className="w-full">
							<Paper className="p-6 shadow-md rounded-2xl bg-white  hover:shadow-lg transition-transform duration-300 hover:scale-105">
								<Image
									src={service.image}
									alt={service.name}
									width={320}
									height={220}
									className="object-cover h-48 w-full rounded-t-xl"
								/>
								<Typography
									variant="h5"
									className="font-bold text-cyan-700 mt-4"
								>
									{service.name}
								</Typography>
								<Typography
									variant="body1"
									className="mt-2 text-lg text-gray-600 "
								>
									{service.description}
								</Typography>
								<Typography
									variant="h6"
									className="mt-3 text-xl font-semibold text-cyan-500"
								>
									{service.price}
								</Typography>
								<Button
									variant="contained"
									color="primary"
									className="mt-6 text-lg bg-cyan-700 hover:bg-cyan-600 text-white"
								>
									Book Now
								</Button>
							</Paper>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
