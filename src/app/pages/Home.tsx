'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import ServicesSection from '@/app/components/ServicesSection';

const services = [
	{
		title: 'Restringing',
		description: 'Top-quality restringing service with fast turnaround.',
		config: {
			url: '/services/',
			name: 'Restringing',
			newTab: false,
		},
	},
	{
		title: '1-on-1 Training',
		description: 'Personal coaching sessions tailored to your skill level.',
		config: {
			url: '/academy/',
			name: 'Academy',
			newTab: false,
		},
	},
	{
		title: 'Court Hire',
		description: 'Book our world-class courts at your convenience.',
		config: {
			url: 'https://badmintonbrisbane.yepbooking.com.au/',
			name: 'Hire Now',
			newTab: true,
		},
	},
	{
		title: 'Club Socials',
		description: 'Meet, play and socialize with other club members.',
		config: {
			url: '/club/',
			name: 'Club Socials',
			newTab: false,
		},
	},
	{
		title: 'Junior Academy',
		description: 'Train young champions with certified coaches.',
		config: {
			url: '/academy/',
			name: 'Academy',
			newTab: false,
		},
	},
	{
		title: 'Fitness Training',
		description: 'Improve your stamina and agility with sport-specific drills.',
		config: {
			url: '/academy/',
			name: 'Acadamy',
			newTab: false,
		},
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
			<ServicesSection services={services} />
		</div>
	);
}
