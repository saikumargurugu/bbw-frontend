'use client';

import React from 'react';
import ServicesSection from '@/app/components/ServicesSection';
import data from './dataBrisbaneBadminton.json';
const services = [
	{
		title: 'Court Hire',
		image: 'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/minified/COURTS3.jpg',
		description: `Book our world-class courts at your convenience.
Our facility features high-quality flooring, lighting, and equipment for an optimal playing experience. Courts are available for singles, doubles, and group bookings. Reserve online and enjoy hassle-free access for practice or matches.(Non Marking Shoes Only)`,
		config: {
			url: 'https://badmintonbrisbane.yepbooking.com.au/',
			name: 'Hire Now',
			newTab: true,
		},
	},
	{
		title: 'QBA Membership',
		image: 'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/CLUB.PNG',
		description: `South Brisbane Badminton Inc. is proud to be affiliated with the Queensland Badminton Association (QBA). Becoming a QBA member not only supports the growth of badminton in Queensland but also allows you to compete in official state-level tournaments and includes insurance coverage during these competitions.`,
		config: {
			url: 'https://badmintonbrisbane.yepbooking.com.au/',
			name: 'Contact Us to Join Now',
			newTab: true,
		},
	},
	{
		title: 'Restringing',
		image : 'https://images.unsplash.com/photo-1722003184213-b5dfa47e2476?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: `Top-quality restringing service with fast turnaround.
We use premium strings and professional techniques to ensure your racket performs at its best. Our experts can advise on string tension and type for your playing style. Drop off your racket and pick it up ready for your next match!`,
		config: {
			url: '/services/',
			name: 'Restringing',
			newTab: false,
		},
	},
	{
		title: '1-on-1 Training',
		image : 'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/minified/TRAINING2.jpg',
		description: `Personal coaching sessions tailored to your skill level.
Our certified coaches focus on technique, strategy, and fitness. Whether you’re a beginner or advanced player, we help you reach your goals with customized drills and feedback. Flexible scheduling available for busy lifestyles.`,
		config: {
			url: '/academy/',
			name: 'Academy',
			newTab: false,
		},
	},

	{
		title: 'Club Socials',
		image:'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/SOCIAL.jpg',
		description: `Meet, play and socialize with other club members.
Our socials are open to all skill levels and ages. Enjoy friendly games, refreshments, and networking opportunities. Special events and tournaments are held regularly to foster community and fun.`,
		config: {
			url: '/club/',
			name: 'Club Socials',
			newTab: false,
		},
	},
	{
		title: 'Junior Academy',
		image:'https://storage.googleapis.com/badminton_brisabane_gallery/web_gallery/Gallery/ACADEMY.JPG',
		description: `Train young champions with certified coaches.
Our junior academy focuses on skill development, teamwork, and sportsmanship. Programs are designed for different age groups and abilities. Kids learn through fun drills, games, and competitions in a safe environment.`,
		config: {
			url: '/academy/',
			name: 'Junior Academy',
			newTab: false,
		},
	},
];

export const HeroData = data.home.heroSlides[0]
export default function Home() {
	return (
		<div>
			{/* <Carousel slides={HeroData} /> */}
			<ServicesSection services={services} />
		</div>
	);
}
