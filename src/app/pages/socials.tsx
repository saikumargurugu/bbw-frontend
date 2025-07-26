'use client';

import React from 'react';
import Image from 'next/image';
import Carousel from '@/app/components/Carousel';
import CardCarousel from '@/app/components/CardCarousel';
import { HeroData } from './Home';
import data from './dataBrisbaneBadminton.json';

const events = [
	{
		title: 'Badminton Night',
		date: 'Every Day',
		description:
			'Join us for a casual night of badminton! Meet new people, play friendly matches, and enjoy snacks and drinks.',
		image:
			'https://images.unsplash.com/photo-1717659487323-7783a99bcf61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		link: '/contact',
	},
	{
		title: 'Adult Socials',
		date: 'Every Day',
		image:
			'https://images.unsplash.com/photo-1659081463572-4c5903a309e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'A charity event to raise funds for local youth badminton programs. Compete and contribute to a good cause!',
		link: '/contact',
	},
	{
		title: 'Kids Socials',
		date: 'Monday, Wednesday, Friday, Saturday',
		description:
			'A day for the entire family! Come for a friendly tournament, activities for all ages, and delicious food and beverages.',
		image:
			'https://images.unsplash.com/photo-1718452739586-5b467f1f109b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		link: '/contact',
	},
	{
		title: 'Family Fun Day',
		date: 'Sunday',
		description:
			'A day of fun for the whole family! Enjoy badminton games, food stalls, and activities for kids.',
		image:
			'https://images.unsplash.com/photo-1718452739586-5b467f1f109b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		link: '/contact',
	},
	{
		title: 'Charity Tournament',
		date: '',
		description:
			'A charity event to raise funds for local youth badminton programs. Compete and contribute to a good cause!',
		image:
			'https://images.unsplash.com/photo-1717659487323-7783a99bcf61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		link: '/contact',
	},
];

const whatsappInviteUrl = 'https://chat.whatsapp.com/your-group-invite-link'; // Replace with your actual invite link

export default function SocialsPage() {
	return (
		<div>
			<Carousel slides={HeroData} />
			{/* WhatsApp Group QR Card */}
			<div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
				<h2 className="text-2xl font-bold text-green-700 mb-4">
					Join Our WhatsApp Group
				</h2>
				<p className="text-gray-700 mb-4 text-center">
					Scan the QR code below to join our club WhatsApp group for updates,
					events, and community chat!
				</p>
				<div className="bg-white p-4 rounded-xl border border-gray-200 mb-4">
					<Image
						src={data.Socials.images[0]}
						alt="QR Code"
						width={150}
						height={150}
						className="rounded"
					/>
				</div>
				<a
					href={whatsappInviteUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded transition"
				>
					Join WhatsApp Group
				</a>
			</div>
			<CardCarousel events={events} />

		</div>
	);
}
