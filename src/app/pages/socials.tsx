'use client';

import React from 'react';
// import Image from 'next/image';
// import data from './dataBrisbaneBadminton.json';
import CardCarousel from '../components/CardCarousel';
import { QRCodeSVG } from 'qrcode.react';
import { sportySectionTheme } from '../styles/sportyTheme';

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

const whatsappInviteUrl = 'https://chat.whatsapp.com/FGZOTERLPJAAQQcLj4S5bd?mode=ac_t'; // Replace with your actual invite link

export default function SocialsPage() {
	return (
	 <div className={sportySectionTheme.section.className + ' min-h-screen'} style={sportySectionTheme.section.style}>
		 {/* WhatsApp Group QR Card */}
		 <div className={sportySectionTheme.card.className + ' max-w-md mx-auto mt-10'} style={sportySectionTheme.card.style}>
			 <h2 className="text-2xl font-bold text-green-400 mb-4" style={{fontFamily:'Oswald, Montserrat, Arial, sans-serif'}}>Join Our WhatsApp Group</h2>
			 <p className="text-white/90 mb-4 text-center" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>
				 Scan the QR code below to join our club WhatsApp group for updates, events, and community chat!
			 </p>
			 <QRCodeSVG
				 value={whatsappInviteUrl}
				 size={150}
				 fgColor="#fff"
				 bgColor="#000"
				 className="mb-4"
			 />
			 <a
				 href={whatsappInviteUrl}
				 target="_blank"
				 rel="noopener noreferrer"
				 className={sportySectionTheme.sharpButton.className + ' mt-2'}
				 style={sportySectionTheme.sharpButton.style}
			 >
				 Join WhatsApp Group
			 </a>
		 </div>
		 <div className="w-full max-w-5xl mx-auto mt-16">
			 <CardCarousel events={events} />
		 </div>
	 </div>
 );
}
