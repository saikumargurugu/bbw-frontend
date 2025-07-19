'use client';

import React from 'react';
import Carousel from '@/app/components/Carousel';
import ServicesSection from '@/app/components/ServicesSection';

const services = [
	{
		title: 'Court Hire',
		image: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
		image: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: `QBA Membership is Queensland Badminton Association membership which allows you to play competition at the Queensland level and provides insurance during these competitions.
Book our world-class courts at your convenience.
Our facility features high-quality flooring, lighting, and equipment for an optimal playing experience. Courts are available for singles, doubles, and group bookings. Reserve online and enjoy hassle-free access for practice or matches.`,
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
		image : 'https://images.unsplash.com/photo-1732955365690-84d4cfe88436?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
		image:'https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
		image:'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: `Train young champions with certified coaches.
Our junior academy focuses on skill development, teamwork, and sportsmanship. Programs are designed for different age groups and abilities. Kids learn through fun drills, games, and competitions in a safe environment.`,
		config: {
			url: '/academy/',
			name: 'Junior Academy',
			newTab: false,
		},
	},
];

export const HeroData = [
	{
		image: '/images/image1.jpg',
		caption: 'Court Hire',
		description: 'Book our world-class courts for singles, doubles, or group play. Enjoy premium facilities and easy online booking.',
		buttons: [
			{ label: 'Hire Now', url: 'https://badmintonbrisbane.yepbooking.com.au/', newTab: true },
			{ label: 'Learn More', url: '/services/', newTab: false }
		]
	},
	{
		image: '/images/image2.jpg',
		caption: 'Academy',
		description: 'Join our academy for professional coaching, skill development, and fun training sessions for all ages.',
		buttons: [
			{ label: 'Join Academy', url: '/academy/', newTab: false }
		]
	},
	{
		image: '/images/image3.jpg',
		caption: 'Club Socials',
		description: 'Meet, play, and socialize with other club members. Friendly games, refreshments, and networking every month.',
		buttons: [
			{ label: 'See Events', url: '/club/', newTab: false }
		]
	},
	{
		image: '/images/image4.jpg',
		caption: '1 - on 1 Training',
		description: 'Personalized coaching sessions to help you reach your badminton goals. Flexible scheduling available.',
		buttons: [
			{ label: 'Book Session', url: '/academy/', newTab: false }
		]
	},
	{
		image: '/images/image5.jpg',
		caption: 'Competition Training',
		description: 'Prepare for tournaments with advanced drills and strategy sessions led by experienced coaches.',
		buttons: [
			{ label: 'Competition Info', url: '/academy/', newTab: false }
		]
	},
	{
		image: '/images/image6.jpg',
		caption: 'QBA Club Membership',
		description: 'Become a QBA member to play at the Queensland level and get insurance during competitions.',
		buttons: [
			{ label: 'Join QBA', url: 'https://badmintonbrisbane.yepbooking.com.au/', newTab: true }
		]
	},
];

export default function Home() {
	return (
		<div>
			<Carousel slides={HeroData} />
			<ServicesSection services={services} />
		</div>
	);
}
